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
              colors: {},
            boxShadow: {
                xs: '0 0 3px 0 rgb(0 0 0 / 0.05)'
            },
            keyframes: {
                zoomIn: {
                    '0%': { transform: 'scale(0.97)', opacity: '0.7' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                shake: {
                    '0%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(8deg)' },
                    '100%': { transform: 'rotate(0deg)' }
                }
            },
            animation: {
                zoomIn: 'zoomIn .2s ease-out 1',
                shake: 'shake 20s ease-in-out infinite'
            }
        },
    },
    plugins: [forms],
};
