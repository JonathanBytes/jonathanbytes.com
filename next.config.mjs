import nextMdx from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter
    ],
    rehypePlugins: [rehypeHighlight]
  },
})

// export default nextMdx(nextConfig)({
export default withMdx({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
})
