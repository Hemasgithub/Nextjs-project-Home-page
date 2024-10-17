/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}', // Check for class names in app directory
    './src/components/**/*.{js,jsx,ts,tsx}', // Check for class names in components directory (if you add one)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

