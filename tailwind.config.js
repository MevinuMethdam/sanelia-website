export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'soft-pink': '#fdf0f0',
                'rose-gold': '#b76e79',
                'blush': '#f4d8d8',
            },
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}