# JonathanBytes.com source code 💾

This is the source code of my personal website [JonathanBytes.com](https://jonathanbytes.com).

The website is built using Next.js and features a blog, projects, and a gallery section. The blog posts are written in Markdown and rendered using MDX, Rehype and Remark plugins. The blog also features a search bar powered by Algolia DocSearch.

Also, the website supports dark mode and colorthemes for the entire website including code blocks. (Gruvbox and Catppuccin dark and light) With the ability to save the preference as a cookie.

## TODO

- [ ] Migrate All CSS To Tailwind
- [ ] Projects Page
- [ ] Scroll To Top Arrow
- [ ] Noise/Paper Texture Background
- [ ] Gallery Page
- [ ] Sitemap
- [ ] Rework Landing Page Add Latest Post Overview, Favorite and latest Project Overview, Etc...
- [ ] Sync The Mobile And Desktop ThemeSwitch
- [ ] Comments Section On Blog Posts (maybe Using Disqus)
- [ ] Contact Page
- [ ] OpenGraph Protocol For The Entire Web (landing, Projects, Gallery, Blog, And Posts)
- [x] [Dark mode](https://sreetamdas.com/blog/the-perfect-dark-mode)
  - [x] Make colors as CSS vars
  - [x] Make a way to select the theme
    - [x] Mobile
    - [x] Desktop
  - [x] Save selection on localStorage
  - [x] Fix bug when first open show UI before loading colors (defer or category='beforeInteract' doesn't work)
  - [x] 404 page image
- [x] Fix codeblocks changing wrong colors when switching themes
- [x] Fix bad colors on footer
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