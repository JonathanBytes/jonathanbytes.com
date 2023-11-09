import styles from './postBanner.module.css'

function PostBanner({ image }) {
  return (
    <img className={styles.postBanner} src={image.src} alt={image.alt} />
  )
}

export default PostBanner
