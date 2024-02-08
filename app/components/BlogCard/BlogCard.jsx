import styles from './blogCard.module.css'
import { PillCategories } from '../Pill/Pill'
import Link from "next/link";
import Image from 'next/image';
import ReadTime from '../ReadTime';

function BlogCard({ slug, title, description, image, date, categories }) {
  const currentCategory = categories === undefined ? [''] : categories
  return (
    <li className={styles.blogCard}>
      <div className='relative'>
        <div className='absolute bottom-2 z-10 flex justify-end'>
          <PillCategories categories={currentCategory} />
        </div>
        <Link href={slug} className={styles.cardImgA}>
          <Image className={styles.cardImg} src={image.src} alt={image.alt} width='500' height='250' />
        </Link>
      </div>
      <Link href={slug}>
        <div className={styles.blogCardContent}>
          <h2 className={styles.blogCardTitle}>{title}</h2>
          <p className={styles.blogCardDate}>{date}</p>
          <ReadTime title={title} />
          <p className={styles.blogCardP}>{description}</p>
        </div>
      </Link>
    </li>
  );
}

export default BlogCard;
