import styles from './pill.module.css'
import Link from 'next/link'
import categories from '@/data/categories.json'

export default function Pill(props) {
  return (
    <Link href={'/blog/category/' + props.category}>
      <div className={styles.container} style={{ backgroundColor: "var(--" + (categories[props.category]?.color || 'default-color') + ")" }}>
        {categories[props.category]?.display}
      </div >
    </ Link>
  )
}
