import Image from "next/image";
import { getFileReadStaticProps, PostData } from "../../../utils/post";
import { MDXRemote } from "../../../components/mdx/remote";

export const components: any = {
  Image,
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const {
    props: { frontmatter: frontMatter, content },
  } = await getFileReadStaticProps(params.slug);

  const { title, description, tags } = frontMatter as PostData;

  return (
    <div>
      <div>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
        {tags && (
          <div>
            {tags.map((tag, i) => (
              <div key={i}>
                <b>{tag}</b>
              </div>
            ))}
          </div>
        )}
        <MDXRemote {...content} components={components} />
      </div>
    </div>
  );
}
