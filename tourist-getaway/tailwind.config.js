// tailwind.config.js
module.exports = {
    darkMode: 'class', // This line is essential!
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Make sure this path covers all your component files
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            // Your color extensions from the previous step, e.g., sky, teal
            colors: {
                sky: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9', // Primary sky
                    600: '#0284c7', // Darker sky for hover/active
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                teal: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6', // Primary teal
                    600: '#0d9488', // Darker teal for hover/active
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                    950: '#042f2e',
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        // require('@tailwindcss/forms'), // If you are using this
    ],
}