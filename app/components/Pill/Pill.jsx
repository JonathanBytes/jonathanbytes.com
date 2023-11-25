import styles from './pill.module.css'

export default function Pill(props) {
  const categories = {
    Senderismo: "blue",
    Code: "green",
    Lifestyle: "purple"
  }
  return (
    <div className={styles.container} style={{ "background-color": "var(--"+ categories[props.category] +")" }}>
      { props.category }
    </div >
  )
}
