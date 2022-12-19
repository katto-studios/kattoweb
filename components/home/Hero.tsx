import {
  Box,
  Container,
  Center,
  Heading,
  Text,
  keyframes,
  Code,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export type HeroProps = {};

const animationKeyframes = keyframes`
  0% { transform: rotate(0); }
  100% { transform:  rotate(360deg);  }
`;

const animation = `${animationKeyframes} 10s linear infinite`;

export default function Hero(props: HeroProps) {
  return (
    <Container maxW="container.lg">
      <Box>
        <Center h="100vh" flexDirection="column">
          <Box
            h="fit-content"
            w="fit-content"
            mb={10}
            as={motion.div}
            animation={animation}>
            <Image
              src="/img/dog.png"
              width={200}
              height={200}
              alt="dog in space"
            />
          </Box>
          <Heading size={{ base: 'lg', md: 'xl' }}>
            Artisans of the{' '}
            <Code color="pink.400" fontSize={{ base: 'xl', md: '28' }}>
              &apos;digital&apos;
            </Code>{' '}
            age
          </Heading>
          <Text>We hand craft user centric digital solutions</Text>
        </Center>
      </Box>
    </Container>
  );
}
