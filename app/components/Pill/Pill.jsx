import Link from 'next/link'
import categories from '@/data/categories.json'

function Pill(props) {
  const categoryColor = categories[props.category]?.color
  return (
    <div
      className='dark:text-background text-text text-xs font-sans shadow-md ml-2 px-2.5 py-1 w-fit rounded-full inline-flex'
      id='pill'
      style={{ backgroundColor: "var(--" + (categoryColor || 'default-color') + ")" }}
    >
      <Link href={'/blog/category/' + props.category}>
        {categories[props.category]?.display}
      </ Link >
    </div >
  )
}

export const PillCategories = ({ categories }) => {
  return (
    categories.map((category) => (
      <Pill key={category} category={category} />
    ))
  )
}
