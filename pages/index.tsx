import { Box } from '@chakra-ui/react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';

export type HomePageProps = {};

export default function HomePage(props: HomePageProps) {
  return (
    <Box mb={20}>
      <Hero />
      <Services />
    </Box>
  );
}
