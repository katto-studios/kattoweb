import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Tag,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import path from "path";
import { getSortedPostsData, PostData } from "../../utils/post";

export type GalleryPageProps = {
  allPostsData: PostData[];
};

export default function GalleryPage({ allPostsData }: GalleryPageProps) {
  const router = useRouter();
  return (
    <Container maxW="container.xl" pt={20}>
      <Heading mt={5}>Gallery</Heading>
      <SimpleGrid minChildWidth="400px" spacing="3" my={10}>
        {allPostsData.map((postData, i) => (
          <Card
            key={i}
            onClick={async () => await router.push("/gallery/" + postData.id)}
            variant="outline"
            _hover={{ transform: "translateY(-5px)" }}
            transition="0.2s"
            cursor="pointer"
          >
            <CardBody>
              <Box h="200" position="relative" mb={5}>
                <Image
                  src={postData.image ?? "/img/game.png"}
                  alt={""}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Heading size="md">{postData.title}</Heading>
              <Text>{postData.description}</Text>
              {postData.tags?.map((tag, i) => (
                <Tag key={i} m={1}>
                  <b>{tag}</b>
                </Tag>
              ))}
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(path.join(process.cwd(), "content"));
  return {
    props: {
      allPostsData,
    },
  };
}
