export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Ensures all your source files are scanned
    ],
    theme: {
        extend: {
            fontFamily: {
                // Defines 'font-roboto' utility class
                roboto: ['Roboto', 'sans-serif'],
                // Defines 'font-poppins' utility class (assuming you use this elsewhere)
                sans: ['Poppins', 'sans-serif'],

            },
            // You can keep your existing color extensions here if you have them
            // For example, if you had 'sky' and 'teal' defined:
            colors: {
                sky: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1', // Used for the main title on Contact Us page
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
                    500: '#14b8a6',
                    600: '#0d9488',
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
        // require('@tailwindcss/forms'), // Uncomment if you use this plugin
    ],
}
