import BlogCard from '../components/BlogCard/BlogCard';
import { getAllFilesMetadata } from '@/lib/mdxFrontmatter';
import SelectMenu from '../components/SelectMenu/SelectMenu';

const filesMetadata = getAllFilesMetadata()

export const metadata = () => {
  return {
    title: 'Blog',
    description: 'JonathanBytes\'s blog'
  }
}

export default function Blog() {
  return (
    <>
      <h1>Posts del blog</h1>
      <SelectMenu />
      <ul className="blog-list" style={{ paddingLeft: 0 }}> {filesMetadata.map((post) => (
        <BlogCard
          key={post.slug}
          slug={'/post/' + post.slug}
          image={post.image}
          date={post.date}
          title={post.title}
          description={post.description}
          categories={post.categories}
        />
      ))}
      </ul>
    </>
  )
}

