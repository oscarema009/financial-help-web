/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos relevantes en tu proyecto
    ],
    theme: {
      extend: {
        fontFamily: {
          fintech: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
