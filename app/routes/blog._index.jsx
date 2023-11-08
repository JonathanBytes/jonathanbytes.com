import { json } from '@remix-run/node' // or cloudflare/deno
import { useLoaderData } from '@remix-run/react'
import fs from 'fs'
import path from 'path'
import process from 'process'

import blogCardCSS from '../styles/blogCard.css'
export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: blogCardCSS
    }
  ]
}

import BlogCard from '../components/BlogCard'

export const meta = () => {
  return [
    { title: 'Blog' },
    { description: 'Landing page for JonathanBytes blog' }
  ]
}

const routesPath = path.join(process.cwd(), 'app', 'routes');
const postFiles = fs.readdirSync(routesPath).filter((file) => file.includes('post') && file.endsWith('.mdx'));
console.log(postFiles)
const postsPath = postFiles.map((poster) => (

  console.log(path.join(routesPath, poster))
))

// Import all your posts from the app/routes/posts directory. Since these are
// regular route modules, they will all be available for individual viewing
// at /posts/a, for example.
import * as postA from './post.first.mdx'
import * as postB from './post.second.mdx'
import * as postC from './post.third.mdx'
import * as postD from './post.fourth.mdx'
import * as postE from './post.nuevopost.mdx'

function postFromModule(mod) {
  const { meta, ...rest } = mod.attributes; // Extraemos 'meta' y el resto de propiedades
  const post = {
    slug: mod.filename.replace(/\.mdx?$/, '').replace('.', '/').replace('post', '/post'),
    ...rest, // Incluimos las propiedades que no son 'meta'
  };

  // Ahora, recorremos el array 'meta' y añadimos cada propiedad al objeto 'post'
  for (const item of meta) {
    for (const key in item) {
      post[key] = item[key];
    }
  }

  return post;
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
  return (
    <>
      <h1>Post del blog</h1>
      <ul className='blog-list'>

        {posts.map((post) => (
          <BlogCard slug={post.slug} image={post.image} date={post.date} title={post.title} description={post.description} />
        ))}
      </ul>
    </>
  )
}
