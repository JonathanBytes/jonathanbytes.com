import PostBanner from './PostBanner/PostBanner.jsx'
import { PillCategories } from './Pill/Pill.jsx'

const PostHead = ({ frontmatter }) => {
  return (
    <>
      <PostBanner image={frontmatter.image} />
      <blockquote>
        {frontmatter.date}
      </blockquote>
      <PillCategories categories={frontmatter.categories} />
      <h1>{frontmatter.title}</h1>
    </>
  )
}

export default PostHead
