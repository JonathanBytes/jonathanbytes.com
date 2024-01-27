import styles from './blogCard.module.css'
import Pill from '../Pill/Pill'
import Link from "next/link";

function BlogCard({ slug, title, description, image, date, categories }) {
  const currentCategory = categories === undefined ? [''] : categories
  return (
    <li className={styles.blogCard}>
      <Link href={slug} className={styles.cardImgA}>
        <img className={styles.cardImg} src={image.src} alt={image.alt} />
        <div className={styles.tagContainer}>
          {
            currentCategory.map((category) => (
              <Pill key={category} className={styles.Pill} category={category} />
            ))
          }
        </div>
      </Link>
      <Link href={slug}>
        <div className={styles.blogCardContent}>
          <div className={styles.blogCardTitle}>{title}</div>
          <p className={styles.blogCardDate}>{date}</p>
          <p className={styles.blogCardP}>{description}</p>
        </div>
      </Link>
    </li>
  );
}

export default BlogCard;
