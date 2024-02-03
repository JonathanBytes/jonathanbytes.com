import nextMdx from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkCodeTitle from 'remark-code-title'
import rehypePrism from 'rehype-prism-plus'

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkCodeTitle,
    ],
    rehypePlugins: [rehypePrism]
  },
})

// export default nextMdx(nextConfig)({
export default withMdx({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
})
