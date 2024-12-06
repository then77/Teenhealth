import React from 'react';
import Page from '@/components/page-component';

export default function Home() {
    return (
        <Page title="Home">
            <h1 className="text-4xl font-bold text-blue-800">Home</h1>
            <div className="h-96 bg-blue-300"></div>
        </Page>
    );
}
