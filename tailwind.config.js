/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-ibm)'],
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-yeseva-one)'],
      },
    },
  },
  plugins: [],
}
