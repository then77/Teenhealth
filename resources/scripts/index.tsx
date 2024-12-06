import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/css/app.css';

import Routable from '@/route';

import { ErrorBoundary } from 'react-error-boundary';
import AppCrash from '@/pages/misc/app-crash';

import { Toaster, ToastBar } from 'react-hot-toast';
import ToastController from '@/components/toast-controller';

import { createStore } from '@/store';
import { StoreProvider } from 'easy-peasy';
const store = createStore(
    (window as Window & { thData?: string }).thData);

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found.');

ReactDOM.createRoot(root).render(
    <ErrorBoundary fallback={<AppCrash />}>
        <StoreProvider store={store}>
            <Routable />
            <Toaster
                children={(t) => (
                    <ToastBar
                        toast={t}
                        style={{
                            ...t.style,
                            paddingLeft: "1rem",
                        }}
                    />
                )} />
            <ToastController />
        </StoreProvider>
    </ErrorBoundary>
);
