/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        foreground: 'var(--color-foreground)',
        background: 'var(--color-background)',
        altbg: 'var(--color-altbg)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        base00: 'var(--base00)',
        base01: 'var(--base01)',
        base02: 'var(--base02)',
        base03: 'var(--base03)',
        base04: 'var(--base04)',
        base05: 'var(--base05)',
        base06: 'var(--base06)',
        base07: 'var(--base07)',
        base08: 'var(--base08)',
        base09: 'var(--base09)',
        base0A: 'var(--base0A)',
        base0B: 'var(--base0B)',
        base0C: 'var(--base0C)',
        base0D: 'var(--base0D)',
        base0E: 'var(--base0E)',
        base0F: 'var(--base0F)',
      },
      fontFamily: {
        mono: ['var(--font-ibm)'],
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-yeseva-one)'],
      },
      screens: {
        md: '820px',
      },
    },
  },
  plugins: [],
}
