import { Box, Container, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <Box p={10} background="gray.100">
      <Container maxW="container.xl">
        <Stack>
          <Link href={"mailto:contact@katto.studio"}>
            <Text fontSize="sm">email: contact@katto.studio</Text>
          </Link>
          <Text fontSize="xs" pt={5}>
            © Copyright Katto Studios 2022
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
