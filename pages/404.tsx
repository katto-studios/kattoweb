import { Center, Text } from '@chakra-ui/react';

export type NotFoundProps = {};

export default function NotFound(props: NotFoundProps) {
  return (
    <Center h="100vh">
      <Text>Not found</Text>
    </Center>
  );
}
