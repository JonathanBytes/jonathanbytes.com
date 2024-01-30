import fs from 'fs';
import { getAllFilesMetadata } from "@/lib/mdxFrontmatter";

const jsonData = getAllFilesMetadata()

fs.writeFile("./data/rawPosts.json", JSON.stringify(jsonData), 'utf8', function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
