import styles from './blogCard.module.css'
import Pill from '../Pill/Pill'
import { Link } from '@remix-run/react'

function BlogCard({ slug, title, description, image, date }) {
  return (
    <li className={styles.blogCard}>
      <Link to={slug} className={styles.cardImgA}>
        <img className={styles.cardImg} src={image.src} alt={image.alt} />
      </ Link>
      <Pill className={styles.Pill}>Categoría</Pill>
      <Link to={slug} >
        <div className={styles.blogCardContent}>
          <div className={styles.blogCardTitle}>{title}</div>
          <p className={styles.blogCardDate}>{date}</p>
          <p className={styles.blogCardP}>{description}</p>
        </div>
      </ Link>
    </li>
  )
}

export default BlogCard
