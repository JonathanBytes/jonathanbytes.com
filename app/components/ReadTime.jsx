import rawPosts from '@/data/rawPosts.json'
import { Clock } from './Icons'

const ReadTime = ({ title }) => {
  const post = rawPosts.filter(item => item.title === title)[0]
  const readTime = post.readTime.text
  const words = post.readTime.words
  return (
    <>
      <p title={`${words} palabras`}>
        <Clock />
        {readTime}
      </p >
    </>
  )
}

export default ReadTime
