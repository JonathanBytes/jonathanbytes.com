import Link from 'next/link'
import categories from '@/data/categories.json'

function Pill(props) {
  const categoryColor = categories[props.category]?.color
  return (
    <div
      className="pill"
      id="pill"
      style={{
        backgroundColor: 'var(--' + (categoryColor || 'default-color') + ')',
      }}
    >
      <Link
        title={`Ir a la sección de ${categories[props.category]?.display}`}
        className="pill-link"
        href={'/blog/category/' + props.category}
      >
        {categories[props.category]?.display}
      </Link>
    </div>
  )
}

export const PillCategories = ({ categories }) => {
  return categories.map((category) => (
    <Pill key={category} category={category} />
  ))
}
