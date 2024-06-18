import Image from "next/image";
import { useRouter } from "next/router";
import path from "path";
import { getSortedPostsData, PostData } from "../../utils/post";
import Link from "next/link";

export type GalleryPageProps = {
  allPostsData: PostData[];
};

export default function GalleryPage() {
  const allPostsData = getSortedPostsData(path.join(process.cwd(), "content"));
  return (
    <div>
      <h1>Gallery</h1>
      <div>
        {allPostsData.map((postData, i) => (
          <Link key={i} href={`gallery/${postData.id}`}>
            <div>
              <div>
                <Image
                  src={postData.image ?? "/img/game.png"}
                  width={100}
                  height={100}
                  alt={"game"}
                />
              </div>
              <h1>{postData.title}</h1>
              <p>{postData.description}</p>
              {postData.tags?.map((tag, i) => (
                <div key={i}>
                  <b>{tag}</b>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData(path.join(process.cwd(), "content"));
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
