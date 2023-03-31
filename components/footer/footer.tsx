import { Box, Container, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <Box p={10} background="gray.100">
      <Container maxW="container.xl">
        <Stack gap={5}>
          <Stack>
            <Link href={"/"}>
              <Text>Home</Text>
            </Link>
            <Link href={"/gallery"}>
              <Text>Gallery</Text>
            </Link>
            <Link href={"/contact"}>
              <Text>Contact</Text>
            </Link>
          </Stack>
          <Stack>
            <Image src="/logo-black.png" alt="logo" width={90} height={90} />
            <Text fontSize="xs">© Copyright Katto Studios 2023</Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
