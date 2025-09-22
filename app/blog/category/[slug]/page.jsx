'use client'

import { useState } from 'react';
import rawPosts from '@/data/rawPosts.json'
import categories from '@/data/categories.json'
import * as sortFunctions from '@/lib/sortPosts'
import SelectMenu from '@/app/components/SelectMenu/SelectMenu';
import { Search } from '@/app/components/Search/Search';
import BlogCard from '@/app/components/BlogCard/BlogCard';


const Blog = ({ params }) => {

  const selectedCategory = params.slug
  let posts;

  if (selectedCategory) {
    posts = sortFunctions.filteredPostsByCategory(selectedCategory, rawPosts);
  } else {
    posts = sortedPosts;
  }

  const [sortBy, setSortBy] = useState('recent');
  const sortedPosts = sortBy ? sortFunctions[sortBy](posts) : posts

  return (
    <>
      <h1>Posts sobre {categories[selectedCategory].display.toLowerCase()}</h1>
      <div>
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
