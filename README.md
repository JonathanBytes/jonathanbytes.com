# JonathanBytes.com source code 💾

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## TODO

- [x] Dynamic metadata for blog posts
- [ ] OpenGraph protocol for the entire web (landing, projects, gallery, blog and posts)
- [ ] Migrate all CSS to Tailwind
- [ ] [Dark mode](https://sreetamdas.com/blog/the-perfect-dark-mode)
    - [x] Make colors as CSS vars
    - [x] Make a way to select the theme
        - [x] Mobile
        - [x] Desktop
    - [x] Save selection on localStorage
    - [ ] Fix bug when first open show UI before loading colors (defer or category='beforeInteract' doesn't work)
- [x] Switch code blocks color scheme
- [ ] Search bar for blog post (DocSearch x Algolia)
    - [x] Implement it
    - [ ] Style it
- [ ] Rework landing page, add latest post overview, latest project overview, etc...
- [ ] Posts table of contents (TOC)
    - [x] Implement it
    - [ ] Style it
- [ ] Sitemap
- [ ] Scroll app Arrow
- [ ] Readtime for blog posts
- [ ] Refine the profile pic
- [ ] Contact page
- [ ] Projects page
- [ ] Gallery page

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Yeseva One, Montserrat and IBM Plex Mono, custom Google Fonts.
