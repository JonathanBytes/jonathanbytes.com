import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { readingTime } from 'reading-time-estimator';

const process = require('process')
const mainPath = path.join(process.cwd(), 'app', 'post');

export const getFiles = () => {
  // Return an array with all post paths
  const postFiles = fs.readdirSync(mainPath)
    .filter(file => fs.statSync(path.join(mainPath, file)).isDirectory())

  return postFiles
    .map(file => path.join(mainPath, file, 'page.mdx'));
}

export const getAllFilesMetadata = () => {
  // Return an array of objects with all post metadata
  const files = getFiles()
  return files.reduce((allPosts, postSlug) => {
    const folderName = path.parse(postSlug).dir.split('/').pop();
    if (folderName === '[slug]') { return allPosts }
    const mdxSource = fs.readFileSync(postSlug, 'utf-8')
    const { content, data } = matter(mdxSource)
    const readTime = readingTime(content, 300, 'es')

    allPosts.push({ ...data, readTime, slug: folderName })
    return allPosts
  }, []);
}
