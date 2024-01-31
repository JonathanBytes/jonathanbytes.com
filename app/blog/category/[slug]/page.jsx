'use client'

import { useState } from 'react';
import rawPosts from '@/data/rawPosts.json'
import categories from '@/data/categories.json'
import {
  sortedFilesByRecent,
  sortedFilesByOld,
  sortedFilesByTitleAscending,
  sortedFilesByTitleDescending,
  sortedFilesByCategoriesAscending,
  sortedFilesByCategoriesDescending,
  filteredPostsByCategory
} from '@/lib/sortPosts';
import SelectMenu from '../../../components/SelectMenu/SelectMenu';
import BlogCard from '../../../components/BlogCard/BlogCard';


const Blog = ({ params }) => {
  const selectedCategory = params.slug
  let posts;

  if (selectedCategory) {
    posts = filteredPostsByCategory(selectedCategory, rawPosts);
  } else {
    posts = sortedPosts;
  }

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

  console.log(categories[selectedCategory].display)
  return (
    <>
      <h1>Posts sobre {categories[selectedCategory].display.toLowerCase()}</h1>
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
    </>
  );
};

export default Blog;
