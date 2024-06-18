import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export type PostData = {
  id: string;
  date?: string;
  title?: string;
  description?: string;
  author?: string;
  tags?: string[];
  image?: string; //url
};

export async function getSortedPostsData(postsDirectory: string) {
  // Get file names under /posts other than template.md
  const fileNames = (await fs.readdir(postsDirectory)).filter(
    (fileName) => !fileName.includes("template.md"),
  );

  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
        tags: matterResult.data.tags.split(", "),
      };
    }),
  );
  // Sort posts by date
  return (allPostsData as any as PostData[]).sort(
    ({ date: a }, { date: b }) => {
      if (!a || !b) return 0;
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    },
  );
}

export async function getFileReadStaticProps(slug: string) {
  const fileName = await fs.readFile(
    path.join(process.cwd() + `/content/${slug}.md`),
    "utf-8",
  );
  const { data, content: rawContent } = matter(fileName);
  const frontmatter = { ...data, tags: data.tags.split(", ") };
  const content = await serialize(rawContent);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
