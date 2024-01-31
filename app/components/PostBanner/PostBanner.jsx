import styles from './postBanner.module.css'

export default function PostBanner({ image }) {
  return (
    <img className={styles.postBanner} src={image.src} alt={image.alt} />
  )
}
