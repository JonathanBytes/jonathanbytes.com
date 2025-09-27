"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  categoriesAscending,
  categoriesDescending,
  old,
  recent,
  titleAscending,
  titleDescending,
} from "@/lib/sortPosts";
import posts from "../../data/rawPosts.json";
import BlogCard from "../components/BlogCard/BlogCard";
import { Search } from "../components/Search/Search";
import SelectMenu from "../components/SelectMenu/SelectMenu";

const sortOptions = {
  recent,
  old,
  titleAscending,
  titleDescending,
  categoriesAscending,
  categoriesDescending,
};

const Blog = () => {
  const [sortBy, setSortBy] = useState("recent");
  const sortedPosts = useMemo(
    () => (sortBy ? sortOptions[sortBy](posts) : posts),
    [sortBy],
  );

  return (
    <>
      <h1>Posts del blog</h1>
      <div className="w-full flex justify-end mb-4 gap-2 items-center">
        <Search />
        <SelectMenu onSortingChange={setSortBy} />
      </div>
      <ul className="pl-0">
        {sortedPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={`/post/${post.slug}`}
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
      <Link href="/" className="btn">
        {" "}
        Volver
      </Link>
      <p />
    </>
  );
};

export default Blog;
