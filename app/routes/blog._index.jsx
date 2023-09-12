import { json } from '@remix-run/node' // or cloudflare/deno
import { useLoaderData } from '@remix-run/react'
import blogCardCSS from '~/styles/blogCard.css'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: blogCardCSS
    }
  ]
}
import BlogCard from '../components/BlogCard'

// Import all your posts from the app/routes/posts directory. Since these are
// regular route modules, they will all be available for individual viewing
// at /posts/a, for example.
import * as postA from './post.first.mdx'
import * as postB from './post.second.mdx'
import * as postC from './post.third.mdx'
import * as postD from './post.fourth.mdx'
import * as postE from './post.nuevopost.mdx'

export const meta = () => {
  return [
    { title: 'Blog posts' },
    { description: 'Landing page for JonathanBytes blog' }
  ]
}

function postFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, '').replace('.', '/').replace('post', '/post'),
    ...mod.attributes.meta
  }
}

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json([
    postFromModule(postA),
    postFromModule(postB),
    postFromModule(postC),
    postFromModule(postD),
    postFromModule(postE)
  ])
}

export default function BlogIndex() {
  const posts = useLoaderData()
  console.log(posts)

  return (
    <>
      <h1>Post del blog</h1>
      <ul className='blog-list'>
        {
          posts.map((post) => {
            console.log(post)
          })
        }

        {posts.map((post) => (
          <BlogCard date={post[3].date} image={post[2].image} slug={post.slug} title={post[0].title} description={post[1].description} />
        ))}
      </ul>
    </>
  )
}
