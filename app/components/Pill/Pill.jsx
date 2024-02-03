import Link from 'next/link'
import categories from '@/data/categories.json'

export default function Pill(props) {
  const categoryColor = categories[props.category]?.color
  return (
    <Link href={'/blog/category/' + props.category}>
      <div
        className='dark:text-background text-text text-xs shadow-md ml-2 px-2.5 py-1 rounded-full'
        style={{ backgroundColor: "var(--" + (categoryColor || 'default-color') + ")" }}
      >
        {categories[props.category]?.display}
      </div >
    </ Link >
  )
}
