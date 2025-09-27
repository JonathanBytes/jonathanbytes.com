import nextMdx from "@next/mdx";

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [
      "remark-frontmatter",
      "remark-mdx-frontmatter",
      "remark-gfm",
      "remark-gemoji",
      [
        "remark-toc",
        {
          heading: "Contenido",
          skip: "Contenido",
        },
      ],
    ],
    rehypePlugins: [
      "rehype-code-titles",
      "rehype-prism-plus",
      "rehype-slug",
      [
        "rehype-autolink-headings",
        {
          behaviour: "append",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            className: "hash-link",
          },
        },
      ],
    ],
  },
});

export default withMdx({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
