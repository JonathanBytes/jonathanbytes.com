/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'text': 'var(--text)',
      'background': 'var(--background)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'accent': 'var(--accent)',
    },
    extend: {
      fontFamily: {
        mono: ['var(--font-ibm)'],
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-yeseva-one)'],
      },
      screens: {
        'md': '820px',
      },
    },
  },
  plugins: [],
}

