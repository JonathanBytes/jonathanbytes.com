import styles from './pill.module.css'

export default function Pill(props) {
  const categories = {
    Senderismo: "blue",
    Code: "green",
    Astronomía: "purple",
    Música: "yellow"
  }
  return (
    <div className={styles.container} style={{ backgroundColor: "var(--"+ categories[props.category] +")" }}>
      { props.category }
    </div >
  )
}
