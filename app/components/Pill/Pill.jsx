import styles from './pill.module.css'
import Link from 'next/link'

export default function Pill(props) {
  const categories = {
    Senderismo: "blue",
    Code: "green",
    Astronomía: "purple",
    Música: "yellow"
  }
  return (
    <Link href={'/post/' + props.category}>
      <div className={styles.container} style={{ backgroundColor: "var(--" + categories[props.category] + ")" }}>
        {props.category}
      </div >
    </ Link>
  )
}
