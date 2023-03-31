import { Box, Center, Container, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export type ContactPageProps = {};

export default function ContactPage(props: ContactPageProps) {
  return (
    <Box minH="90vh">
      <Container maxW="container.xl">
        <Center h="90vh" gap={10}>
          <Image src="/logo-black.png" alt="logo" width={140} height={90} />
          <Stack>
            <Link href={"mailto:contact@katto.studio"}>
              <Text>
                email us at <b>contact@katto.studio</b>
              </Text>
            </Link>
            <Text>address: we are fully remote 🚀 (for now)</Text>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
}
