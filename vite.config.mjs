import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
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
                'resources/scripts/assets/css/app.css',
                'resources/scripts/index.tsx'
            ],
            refresh: true,
        }),
    ],
});
