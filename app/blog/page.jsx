'use client'

import BlogCard from '../components/BlogCard/BlogCard';
import SelectMenu from '../components/SelectMenu/SelectMenu';
import { sortedFilesByRecent, sortedFilesByOld } from '@/lib/sortPosts';
import { useState } from 'react';

const Blog = () => {
  const [sortingMethod, setSortingMethod] = useState('recent');

  const sortedPosts =
    sortingMethod === 'recent'
      ? sortedFilesByRecent()
      : sortedFilesByOld();

  return (
    <>
      <h1>Posts del blog</h1>
      <SelectMenu onSortingChange={setSortingMethod} />
      <ul className="blog-list" style={{ paddingLeft: 0 }}>
        {sortedPosts.map((post) => (
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
  );
};

export default Blog;
