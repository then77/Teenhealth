import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/scripts/**/*.tsx'
    ],

    theme: {
        extend: {
            padding: {
                'view-h-padding':'220px',
                'nm':'30px',
            },
            height: {
                '1.25': '0.325rem',
                '18': '4.5rem',
            },
            backgroundImage: {
                'yellow-gradient':'linear-gradient(90deg, rgba(234,198,68,0.1) 0%, rgba(248,218,67,0.1) 50%, rgba(255,227,90,0.1) 100%)',
                'red-gradient':'linear-gradient(90deg, rgba(213,43,43,0.1) 0%, rgba(255,66,66,0.1) 50%, rgba(255,104,104,0.1) 100%)',
                'green-radient':'linear-gradient(90deg, rgba(50,220,95,0.1) 0%, rgba(86,231,124,0.1) 50%, rgba(124,244,155,0.1) 100%)',
                'blue-radial':'var(--Main, radial-gradient(100% 100% at 50% 0%, #7EC7FA 0%, #2B9BEB 70%))',
            },
            background: {
                'blue-radial':'var(--Main, radial-gradient(100% 100% at 50% 0%, #7EC7FA 0%, #2B9BEB 70%))'
            },
            maxHeight: {
                '18': '4.5rem',
            },
            fontSize: {
                '3.25xl': '1.875rem',
            },
            fontFamily: {
                sans: ['"Circular Std"', "ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
                secured: ['"Secured"']
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                'primary-color': '#2892D7',
            },
            boxShadow: {
                xs: '0 0 3px 0 rgb(0 0 0 / 0.05)'
            },
            keyframes: {
                zoomIn: {
                    '0%': { transform: 'scale(0.97)', opacity: '0.7' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                zoomOut: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(0.97)', opacity: '0' }
                },
                shake: {
                    '0%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(8deg)' },
                    '100%': { transform: 'rotate(0deg)' }
                },
            },
            animation: {
                zoomIn: 'zoomIn .2s ease-out 1',
                zoomOut: 'zoomOut .1s ease-out 1',
                shake: 'shake 20s ease-in-out infinite'
            }
        },
    },
    plugins: [forms],
};
