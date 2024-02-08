import rawPosts from '@/data/rawPosts.json'
import { Clock } from './Icons'

const ReadTime = ({ title }) => {
  const post = rawPosts.filter(item => item.title === title)[0]
  const readTime = post.readTime.text
  const words = post.readTime.words
  return (
    <>
      <p className='text-sm opacity-50 m-0 inline-flex items-center gap-1 text-left h-4' title={`${words} palabras`}>
        <Clock className='w-4' />
        {readTime}
      </p >
    </>
  )
}

export default ReadTime
