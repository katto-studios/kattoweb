import {
  CSSReset,
  Container,
  Heading,
  Tag,
  Avatar,
  Divider,
  Box,
  Text,
} from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import { ReactNode } from "react";
import {
  getFileReadStaticPaths,
  getFileReadStaticProps,
  PostData,
} from "../../utils/post";

export type BlogPostPageProps = {
  frontmatter: PostData;
  content: MDXRemoteSerializeResult;
};

export const components: any = {
  Image,
};

export default function BlogPostPage({
  frontmatter,
  content,
}: BlogPostPageProps) {
  const { id, date, title, description, author, tags, image } = frontmatter;

  return (
    <Box minH="100vh" p={3} pt={20}>
      <Container maxW="container.lg" p={10} rounded="xl">
        {title && <Heading size="lg">{title}</Heading>}
        {description && <Text>{description}</Text>}
        {tags && (
          <Box mt={3}>
            {tags.map((tag, i) => (
              <Tag key={i} mr={2} mb={2}>
                <b>{tag}</b>
              </Tag>
            ))}
          </Box>
        )}
        <Prose>
          <MDXRemote {...content} components={components} />
        </Prose>
      </Container>
    </Box>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  return getFileReadStaticPaths("content");
}

// Generate the static props for the page
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return await getFileReadStaticProps(slug);
}
