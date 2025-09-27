import fs from "node:fs";
import { getAllFilesMetadata } from "./mdxFrontmatter.js";

const jsonData = getAllFilesMetadata();

fs.writeFile(
  "./data/rawPosts.json",
  JSON.stringify(jsonData),
  "utf8",
  (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  },
);
