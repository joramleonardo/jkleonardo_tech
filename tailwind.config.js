import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Figtree', ...defaultTheme.fontFamily.sans],
                display: ['"Space Grotesk"', '"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
                mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                obsidian: {
                    950: '#06050c',
                    900: '#0b0917',
                    800: '#120f24',
                    700: '#1b1635',
                },
            },
            animation: {
                'aurora-1': 'aurora1 18s ease-in-out infinite alternate',
                'aurora-2': 'aurora2 22s ease-in-out infinite alternate',
                'float-slow': 'floatSlow 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                'marquee': 'marquee 32s linear infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
            },
            keyframes: {
                aurora1: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '50%': { transform: 'translate(40px, -30px) scale(1.08)' },
                    '100%': { transform: 'translate(-25px, 25px) scale(0.95)' },
                },
                aurora2: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '50%': { transform: 'translate(-45px, 35px) scale(1.1)' },
                    '100%': { transform: 'translate(30px, -20px) scale(0.94)' },
                },
                floatSlow: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
                    '50%': { opacity: '0.9', transform: 'scale(1.05)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },

    plugins: [forms],
};
