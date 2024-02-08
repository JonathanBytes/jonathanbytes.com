import nextMdx from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypePrism from 'rehype-prism-plus'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import rehypeCodeTitles from 'rehype-code-titles'

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkGfm,
      remarkGemoji,
      [remarkToc,
        {
          heading: 'Contenido',
          skip: 'Contenido'
        }],
    ],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypePrism,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behaviour: 'append',
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            className: 'hash-link'
          }
        }
      ]
    ]
  },
})

// export default nextMdx(nextConfig)({
export default withMdx({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
})
