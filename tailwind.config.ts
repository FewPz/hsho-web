/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            dark: {
                bg: '#2f0531',
                card: '#4a0062',
                text: '#f3f4f6',
                subtle: '#c0b2d1',
                border: '#6b21a8',
            },
            primary: {
                DEFAULT: '#8b5cf6',
                dark: '#7c3aed',
                light: '#a78bfa',
            },
            accent: {
                DEFAULT: '#f97316',
                dark: '#ea580c',
                light: '#fb923c',
            }
        },
        extend: {
            fontFamily: {
                sans: ['Anuphan', 'system-ui', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}