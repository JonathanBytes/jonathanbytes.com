# JonathanBytes.com source code 💾

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## TODO

- [ ] [Dark mode](https://sreetamdas.com/blog/the-perfect-dark-mode)
  - [x] Make colors as CSS vars
  - [x] Make a way to select the theme
    - [x] Mobile
    - [x] Desktop
  - [x] Save selection on localStorage
  - [ ] Fix bug when first open show UI before loading colors (defer or category='beforeInteract' doesn't work)
  - [ ] 404 page image
- [ ] Fix codeblocks changing wrong colors when switching themes
- [ ] OpenGraph protocol for the entire web (landing, projects, gallery, blog and posts)
- [ ] Migrate all CSS to Tailwind
- [ ] Rework landing page, add latest post overview, latest project overview, etc...
- [ ] Sitemap
- [ ] Scroll to top Arrow
- [ ] Comments section on blog posts (maybe using Disqus)
- [ ] Noise/Paper texture background
- [ ] Contact page
- [ ] Projects page
- [ ] Gallery page
- [x] Refine the profile pic
- [x] Posts table of contents (TOC)
  - [x] Implement it
  - [x] Style it
- [x] Dynamic metadata for blog posts
- [x] Switch code blocks color scheme
- [x] Search bar for blog post (DocSearch x Algolia)
  - [x] Implement it
  - [x] Style it
- [x] Readtime for blog posts

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
