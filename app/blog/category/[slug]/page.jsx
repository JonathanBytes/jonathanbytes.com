"use client";

import { useEffect, useMemo, useState } from "react";
import rawPosts from "@/data/rawPosts.json";
import categories from "@/data/categories.json";
import {
  filteredPostsByCategory,
  recent,
  old,
  titleAscending,
  titleDescending,
  categoriesAscending,
  categoriesDescending,
} from "@/lib/sortPosts";
import SelectMenu from "@/app/components/SelectMenu/SelectMenu";
import { Search } from "@/app/components/Search/Search";
import BlogCard from "@/app/components/BlogCard/BlogCard";

const sortOptions = {
  recent,
  old,
  titleAscending,
  titleDescending,
  categoriesAscending,
  categoriesDescending,
};

const Blog = ({ params }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("recent");

  useEffect(() => {
    params.then((resolvedParams) => {
      setSelectedCategory(resolvedParams.slug);
    });
  }, [params]);

  const initialPosts = useMemo(
    () =>
      selectedCategory
        ? filteredPostsByCategory(selectedCategory, rawPosts)
        : rawPosts,
    [selectedCategory],
  );

  const sortedPosts = useMemo(
    () => (sortBy ? sortOptions[sortBy](initialPosts) : initialPosts),
    [sortBy, initialPosts],
  );

  if (!selectedCategory) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Posts sobre {categories[selectedCategory].display.toLowerCase()}</h1>
      <div className="w-full flex justify-end mb-4 gap-2 items-center">
        <Search />
        <SelectMenu onSortingChange={setSortBy} />
      </div>
      <ul className="blog-list" style={{ paddingLeft: 0 }}>
        {sortedPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={`/post/${post.slug}`}
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
