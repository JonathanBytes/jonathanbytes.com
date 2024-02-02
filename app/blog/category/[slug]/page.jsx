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
import SelectMenu from '@/app/components/SelectMenu/SelectMenu';
import { Search } from '@/app/components/Search/Search';
import BlogCard from '@/app/components/BlogCard/BlogCard';


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
      <div className="w-full flex justify-end mb-4 gap-2 items-center" >
        <Search />
        <SelectMenu onSortingChange={setSortBy} />
      </div>
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
