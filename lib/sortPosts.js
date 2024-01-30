import posts from "../data/rawPosts.json"
import moment from 'moment';

export const sortedFilesByRecent = () => {
  // const posts = getAllFilesMetadata()
  const sortedPosts = posts.slice().sort((a, b) => {
    return moment(b.date, 'DD/MM/YYYY') - moment(a.date, 'DD/MM/YYYY');
  });
  return sortedPosts
}

export const sortedFilesByOld = () => {
  const sortedPosts = posts.slice().sort((a, b) => {
    return moment(a.date, 'DD/MM/YYYY') - moment(b.date, 'DD/MM/YYYY');
  });
  return sortedPosts
}
