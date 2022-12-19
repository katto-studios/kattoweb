import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { servicesData } from './services-data';

export type ServicesProps = {};

export default function Services(props: ServicesProps) {
  const router = useRouter();
  return (
    <Container maxW="container.xl">
      <Heading size="md" mb={5} color="GrayText">
        Our Services
      </Heading>
      <SimpleGrid
        spacing={4}
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3, 1fr)' }}>
        {servicesData.map((serviceData, i) => (
          <Card key={i} variant="outline">
            <CardHeader>
              <Center h={250}>
                <Image
                  src={serviceData.img}
                  width={200}
                  height={200}
                  alt="game"
                />
              </Center>
            </CardHeader>
            <CardBody>
              <Heading size="md">{serviceData.header}</Heading>
              <Text>{serviceData.body}</Text>
            </CardBody>
            <CardFooter>
              <Button onClick={() => router.push(serviceData.link)}>
                View projects
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
