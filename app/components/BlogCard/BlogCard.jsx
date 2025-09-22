import { PillCategories } from '../Pill/Pill'
import Link from "next/link";
import Image from 'next/image';
import ReadTime from '../ReadTime';

function BlogCard({ slug, title, description, image, date, categories }) {
  const currentCategory = categories === undefined ? [''] : categories
  return (
    <li>
      <div>
        <div>
          <PillCategories categories={currentCategory} />
        </div>
        <Link href={slug}>
          <Image src={image.src} alt={image.alt} width='500' height='250' />
        </Link>
      </div>
      <Link href={slug}>
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
          <ReadTime title={title} />
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
}

export default BlogCard;
