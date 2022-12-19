import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  ring,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { navLinks } from './nav-links';

export type NavBarProps = {};

export default function NavBar(props: NavBarProps) {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const onOpen = () => {
    setIsDrawerOpen(true);
  };

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box position="fixed" w="100vw">
      <Container maxW="container.xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Image src="/logo-black.png" alt="logo" width={90} height={90} />
          <IconButton aria-label={'menu'} mr={3} onClick={onOpen}>
            <HamburgerIcon />
          </IconButton>
        </Box>
      </Container>
      <Drawer isOpen={isDrawerOpen} placement={'right'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Stack>
              {navLinks.map((navLink, i) => (
                <Button
                  onClick={() => router.push(navLink.url)}
                  key={i}
                  variant={router.asPath === navLink.url ? 'solid' : 'ghost'}>
                  {navLink.label}
                </Button>
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Text fontSize="xs">© Copyright Katto Studios 2022</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
