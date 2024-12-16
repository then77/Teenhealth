import Page from '@/components/page-component';
import React from 'react';

import { Navigate, useLocation } from 'react-router';
import { useStoreState } from "@/store";

import axios from 'axios';
import {addCSRFToken} from "@/api";

export default function DevOnly2() {

    // React router location hook
    const location = useLocation();

    // Store hooks
    const user = useStoreState((state) => state.user);

    // Redirect to login if user is not logged in
    if (!user) {
        return <Navigate to="/login" />;
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // send request to the server with multipart/form-data
        // to /api/user POST
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.querySelector('input[name="name"]') as HTMLInputElement).value;
        const email = (form.querySelector('input[name="email"]') as HTMLInputElement).value;
        const oldPassword = (form.querySelector('input[name="oldPassword"]') as HTMLInputElement).value;
        const newPassword = (form.querySelector('input[name="newPassword"]') as HTMLInputElement).value;
        // @ts-ignore
        const profilePicture = (form.querySelector('input[name="profilePicture"]') as HTMLInputElement).files[0];

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('oldPassword', oldPassword);
        formData.append('newPassword', newPassword);
        formData.append('profilePicture', profilePicture);

        addCSRFToken(axios);
        axios({
            method: 'POST',
            url: `/api/user`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.error(err);
        });
    };

    return (
        <Page title="Home">
            <div className="w-full min-h-screen flex justify-center items-center">
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <div className="flex gap-4">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className="flex gap-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div className="flex gap-4">
                        <label htmlFor="oldPassword">Old Password</label>
                        <input type="password" name="oldPassword" id="oldPassword"/>
                    </div>
                    <div className="flex gap-4">
                        <label htmlFor="newPassword">New Password</label>
                        <input type="password" name="newPassword" id="newPassword"/>
                    </div>
                    <div className="flex gap-4">
                        <label htmlFor="profilePicture">Profile picture</label>
                        <input type="file" name="profilePicture" id="profilePicture"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Page>
    );
}
