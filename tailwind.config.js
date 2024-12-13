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
            'backgroundImage': {
                'primary-image': 'radial-gradient(50.00% 50.00% at 50.00% 0.00%, #7EC7FA 0%, #2B9BEB 90%)',
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
