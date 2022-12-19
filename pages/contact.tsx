import { Box, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export type ContactPageProps = {};

export default function ContactPage(props: ContactPageProps) {
  return (
    <Box minH="90vh">
      <Container maxW="container.xl">
        <Center h="90vh">
          <Heading m={5}>contact us</Heading>
          <Stack>
            <Link href={"instragram.com/kattostudios"}>
              <Text>
                instagram: <b>@kattostudios</b>
              </Text>
            </Link>
            <Link href={"mailto:contact@katto.studio"}>
              <Text>
                email: <b>contact@katto.studio</b>
              </Text>
            </Link>
            <Text>address: we are fully remote 🚀</Text>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
}
