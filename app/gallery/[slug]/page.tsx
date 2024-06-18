import Image from "next/image";
import { getFileReadStaticProps, PostData } from "../../../utils/post";
import { MDXRemote } from "../../../components/mdx/remote";

const components: any = {
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
    <div className="container mx-auto p-8 space-y-4">
      {title && <h1 className="text-7xl font-light text-slate-700">{title}</h1>}
      {description && <p>{description}</p>}
      {tags && (
        <div className="flex flex-row gap-3">
          {tags.map((tag, i) => (
            <div key={i}>
              <b>{tag}</b>
            </div>
          ))}
        </div>
      )}
      <section className="mdx-area">
        <MDXRemote {...content} components={components} />
      </section>
    </div>
  );
}
