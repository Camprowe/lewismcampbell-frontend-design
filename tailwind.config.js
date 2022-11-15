/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#FF4500',
      'primary-tint': '#FF5C20',
      'secondary': '#00BAFF',
      'secondary-tint': '#20C3FF',
      'dark': '#1B2430',
      'light': '#F9F9F9',
      'camprowe': '#FF0A0A'
    },
    extend: {
      fontFamily: {
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
