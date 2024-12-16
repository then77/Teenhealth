import Page from '@/components/page-component';
import React from 'react';

import { Navigate, useLocation } from 'react-router';
import { useStoreState } from "@/store";

import axios from 'axios';
import {addCSRFToken} from "@/api";

export default function DevOnly() {

    // React router location hook
    const location = useLocation();

    // Store hooks
    const user = useStoreState((state) => state.user);

    // Redirect to login if user is not logged in
    if (!user) {
        return <Navigate to="/login" />;
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const method = (form.querySelector('select[name="method"]') as HTMLSelectElement).value;
        const url = (form.querySelector('input[name="url"]') as HTMLInputElement).value;
        const body = (form.querySelector('textarea[name="body"]') as HTMLTextAreaElement).value;

        addCSRFToken(axios);
        axios({
            method,
            url: `//${window.location.host}${url}`,
            data: method === 'GET' ? undefined : JSON.parse(body),
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.error(err);
        });
    };

    return (
        <Page title="Home">
            <div className="w-full min-h-screen flex justify-center items-center">
                {/*Create input for request testing where it will have method selection, input for url, and submit button*/}
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <div className="flex gap-4">
                        <label htmlFor="method">Method</label>
                        <select name="method" id="method">
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <label htmlFor="url">URL</label>
                        <input type="text" name="url" id="url" />
                    </div>
                    <div className="flex gap-4">
                        <label htmlFor="body">Body</label>
                        <textarea name="body" id="body" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Page>
    );
}
