import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import fs from 'fs/promises';
import path from 'path';

import BlogCard from '../components/BlogCard/BlogCard';

export const meta = () => {
  return [
    { title: 'Blog' },
    { description: 'Landing page for JonathanBytes blog' },
  ];
};

async function getPostFiles() {
  const routesPath = path.join(process.cwd(), 'app', 'routes');

  try {
    const files = await fs.readdir(routesPath);
    return files.filter((file) => file.endsWith('.mdx'));
  } catch (error) {
    console.error('Error reading files from routes directory:', error);
    return [];
  }
}

function postFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes,
  };
}

async function loadPosts() {
  const postFiles = await getPostFiles();

  const postPromises = postFiles.map(async (fileName) => {
    const modulePath = `../app/routes/${fileName}`;
    const mod = await import(modulePath);
    return postFromModule(mod);
  });

  return Promise.all(postPromises);
}

export async function loader() {
  return json(await loadPosts());
}

export default function BlogIndex() {
  const posts = useLoaderData();
  return (
    <>
      <h1>Post del blog</h1>
      <ul className="blog-list" style={{ paddingLeft: 0 }}>
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.description}
            categories={post.categories}
          />
        ))}
      </ul>
    </>
  );
}
