import styles from './pill.module.css'

export default function Pill(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}
