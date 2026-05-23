/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                ocean: {
                    50: '#effbfd',
                    100: '#d9f5f6',
                    200: '#b8eaeb',
                    300: '#88dadc',
                    400: '#53c7ca',
                    500: '#26adb1',
                    600: '#188b91',
                    700: '#1b6e73',
                    800: '#1c585c',
                    900: '#1b4a4d',
                },
                sage: {
                    50: '#f4fbf7',
                    100: '#e5f5ea',
                    200: '#c8ead5',
                    300: '#9dd6b0',
                    400: '#6fbd84',
                    500: '#4ca365',
                    600: '#38804d',
                    700: '#316642',
                },
            },
            boxShadow: {
                soft: '0 20px 60px -30px rgba(15, 23, 42, 0.35)',
                glow: '0 18px 60px -24px rgba(38, 173, 177, 0.55)',
            },
            backgroundImage: {
                'hero-radial':
                    'radial-gradient(circle at top left, rgba(38, 173, 177, 0.18), transparent 32%), radial-gradient(circle at 85% 10%, rgba(76, 163, 101, 0.16), transparent 30%), linear-gradient(180deg, #f9feff 0%, #f4fbf7 100%)',
            },
            fontFamily: {
                sans: ['Manrope', 'system-ui', 'sans-serif'],
                display: ['Fraunces', 'serif'],
            },
            keyframes: {
                floaty: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            animation: {
                floaty: 'floaty 6s ease-in-out infinite',
                shimmer: 'shimmer 2.5s linear infinite',
            },
        },
    },
    plugins: [],
}
