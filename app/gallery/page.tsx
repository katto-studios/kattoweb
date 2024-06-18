import Image from "next/image";
import path from "path";
import { getSortedPostsData, PostData } from "../../utils/post";
import Link from "next/link";
import { Card } from "../../components/home/card";
import { CardItem } from "../../components/home/3d-card";

export type GalleryPageProps = {
  allPostsData: PostData[];
};

export default async function GalleryPage() {
  const allPostsData = await getSortedPostsData(
    path.join(process.cwd(), "content")
  );
  return (
    <div className="container mx-auto p-8">
      <div className="py-8 space-y-4">
        <h1 className="text-5xl  text-slate-600">gallery</h1>
        <p className="text-lg text-slate-700 font-medium">
          Some projects that we have worked on. Click on a project to learn
          more.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        {allPostsData.map((postData, i) => (
          <Link key={i} href={`gallery/${postData.id}`}>
            <Card>
              <CardItem translateZ="30" className="relative w-full h-56">
                <Image
                  src={postData.image ?? "/img/game.png"}
                  fill
                  className="object-cover rounded-xl shadow-lg"
                  alt={"game"}
                />
              </CardItem>
              <CardItem translateZ="50">
                <h1 className="text-3xl">{postData.title}</h1>
                <p>{postData.description}</p>
              </CardItem>
              <CardItem
                translateZ="10"
                className="w-full flex flex-row gap-3 text-sm"
              >
                {postData.tags?.map((tag, i) => (
                  <div key={i}>
                    <b>{tag}</b>
                  </div>
                ))}
              </CardItem>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
