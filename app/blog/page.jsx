'use client'

import Link from "next/link"
import { useState } from 'react';
import posts from '../../data/rawPosts.json'
import * as sortFunctions from '@/lib/sortPosts'
import SelectMenu from '../components/SelectMenu/SelectMenu';
import BlogCard from '../components/BlogCard/BlogCard';
import { Search } from "../components/Search/Search";

const Blog = () => {

  const [sortBy, setSortBy] = useState('recent');
  const sortedPosts = sortBy ? sortFunctions[sortBy](posts) : posts

  return (
    <>
      <h1>Posts del blog</h1>
      <div>
        <Search />
        <SelectMenu onSortingChange={setSortBy} />
      </div>
      <ul>
        {sortedPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={'/post/' + post.slug}
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.description}
            categories={post.categories}
            readTime={post.readTime.text}
          />

        ))}
      </ul>
      <p />
      < Link href="/" className='btn' > Volver</Link >
      <p />
    </>
  );
};

export default Blog;
