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
      colors: {
        foreground: 'rgb(from var(--color-foreground) r g b / <alpha-value>)',
        background: 'rgb(from var(--color-background) r g b / <alpha-value>)',
        primary: 'rgb(from var(--color-primary) r g b / <alpha-value>)',
        secondary: 'rgb(from var(--color-secondary) r g b / <alpha-value>)',
        accent: 'rgb(from var(--color-accent) r g b / <alpha-value>)',
      }
    },
  },
  darkMode: "selector",
  plugins: [],
}
