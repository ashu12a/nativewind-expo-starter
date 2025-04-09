/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,tsx}', './app/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['OpenSans-Regular'],
        'open-sans-medium': ['OpenSans-Medium'],
        'open-sans-semibold': ['OpenSans-SemiBold'],
        'open-sans-bold': ['OpenSans-Bold'],
      },
    },
  },
  plugins: [],
};
