import PostBanner from './PostBanner/PostBanner.jsx'
import { PillCategories } from './Pill/Pill.jsx'
import ReadTime from './ReadTime.jsx'

const PostHead = ({ frontmatter }) => {
  return (
    <>
      <PostBanner image={frontmatter.image} />
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <blockquote>
            {frontmatter.date}
          </blockquote>
          <PillCategories categories={frontmatter.categories} />
        </div>
        <div>
          <ReadTime title={frontmatter.title} />
        </div>
      </div>
      <h1>{frontmatter.title}</h1>
    </>
  )
}

export default PostHead
