'use client'

import Link from "next/link"
import { useState } from 'react';
import posts from '../../data/rawPosts.json'
import {
  sortedFilesByRecent,
  sortedFilesByOld,
  sortedFilesByTitleAscending,
  sortedFilesByTitleDescending,
  sortedFilesByCategoriesAscending,
  sortedFilesByCategoriesDescending,
  filteredPostsByCategory
} from '@/lib/sortPosts';
import SelectMenu from '../components/SelectMenu/SelectMenu';
import BlogCard from '../components/BlogCard/BlogCard';

const Blog = () => {

  const [sortBy, setSortBy] = useState('recent');

  const sortedPosts =
    sortBy === 'recent'
      ? sortedFilesByRecent(posts)
      : sortBy === 'old'
        ? sortedFilesByOld(posts)
        : sortBy === 'titleAscending'
          ? sortedFilesByTitleAscending(posts)
          : sortBy === 'titleDescending'
            ? sortedFilesByTitleDescending(posts)
            : sortBy === 'categoriesAscending'
              ? sortedFilesByCategoriesAscending(posts)
              : sortBy === 'categoriesDescending'
                ? sortedFilesByCategoriesDescending(posts)
                : [];

  return (
    <>
      <h1>Posts del blog</h1>
      <SelectMenu onSortingChange={setSortBy} />
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
      <p />
      < Link href="/" className='btn' > Volver</Link >
      <p />
    </>
  );
};

export default Blog;
