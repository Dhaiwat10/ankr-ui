/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.tsx', './src/components/**/*.stories.tsx'],
  theme: {
    extend: {
      colors: {
        'ankr-blue': '#356DF3',
      },
    },
  },
  plugins: [],
};
