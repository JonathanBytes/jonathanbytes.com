import styles from './blogCard.module.css'
import Pill from '../Pill/Pill'
import Link from "next/link";

function BlogCard({ slug, title, description, image, date, categories }) {
  const currentCategory = categories === undefined ? [''] : categories
  return (
    <li className={styles.blogCard}>
      <div className='relative'>
        <div className='absolute bottom-2 z-10 flex justify-end'>
          {
            currentCategory.map((category) => (
              <Pill key={category} className={styles.Pill} category={category} />
            ))
          }
        </div>
        <Link href={slug} className={styles.cardImgA}>
          <img className={styles.cardImg} src={image.src} alt={image.alt} />
        </Link>
      </div>
      <Link href={slug}>
        <div className={styles.blogCardContent}>
          <h2 className={styles.blogCardTitle}>{title}</h2>
          <p className={styles.blogCardDate}>{date}</p>
          <p className={styles.blogCardP}>{description}</p>
        </div>
      </Link>
    </li>
  );
}

export default BlogCard;
