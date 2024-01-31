import moment from 'moment';

const compareByCategoriesAndTitle = (a, b) => {
  const categoriesA = (a.categories || []).join(',').toLowerCase();
  const categoriesB = (b.categories || []).join(',').toLowerCase();

  return categoriesA.localeCompare(categoriesB);
}

const compareByTitle = (a, b) => {
  return a.title.localeCompare(b.title);
}

export const sortedFilesByRecent = (posts) => {
  const sortedPosts = posts.slice().sort((a, b) => {
    return moment(b.date, 'DD/MM/YYYY') - moment(a.date, 'DD/MM/YYYY');
  });
  return sortedPosts
}

export const sortedFilesByOld = (posts) => {
  const sortedPosts = posts.slice().sort((a, b) => {
    return moment(a.date, 'DD/MM/YYYY') - moment(b.date, 'DD/MM/YYYY');
  });
  return sortedPosts
}

export const sortedFilesByTitleAscending = (posts) => {
  const sortedPosts = posts.slice().sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  return sortedPosts;
}

export const sortedFilesByTitleDescending = (posts) => {
  const sortedPosts = posts.slice().sort((a, b) => {
    return b.title.localeCompare(a.title);
  });
  return sortedPosts;
}

export const sortedFilesByCategoriesAscending = (posts) => {
  const postsWithCategories = posts.filter(post => post.categories);
  const postsWithoutCategories = posts.filter(post => !post.categories);

  const sortedPostsWithCategories = postsWithCategories.slice().sort(compareByCategoriesAndTitle);
  const sortedPostsWithoutCategories = postsWithoutCategories.slice().sort(compareByTitle);

  return sortedPostsWithCategories.concat(sortedPostsWithoutCategories);
}

export const sortedFilesByCategoriesDescending = (posts) => {
  const sortedPosts = posts.slice().sort((a, b) => {
    const categoriesA = (a.categories || []).join(',').toLowerCase();
    const categoriesB = (b.categories || []).join(',').toLowerCase();
    return categoriesB.localeCompare(categoriesA);
  });
  return sortedPosts;
}

export const filteredPostsByCategory = (category, posts) => {
  return posts.filter(post => post.categories && post.categories.includes(category));
}
