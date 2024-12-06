import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/scripts")
        }
    },
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/scripts/index.tsx'
            ],
            refresh: true,
        }),
    ],
});
