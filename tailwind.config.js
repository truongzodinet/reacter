/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            a: {
                color: "inherit",
                opacity: 0.75,
                fontWeight: "500",
                textDecoration: "underline",
                "&:hover": {
                    opacity: 1,
                    color: 'green["500"]',
                },
            },
        },
    },
    plugins: [],
    safelist: [...Array.from({ length: 4 }, (_, i) => `p-${i + 1}`)],
    attributify: true,
}
