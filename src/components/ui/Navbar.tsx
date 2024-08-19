import React from 'react';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

type Props = {
  children: React.ReactNode;
};

const Links = ['Dashboard', 'Projects', 'Team'];

function Nlink(props: Props): JSX.Element {
  const { children } = props;

  return (
    <Box
      as={NavLink}
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      to="/"
    >
      {children}
    </Box>
  );
}

export default function NavBar(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} boxShadow="dark-lg">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>Logo</Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NavLink to="/">Главна страница</NavLink>
            <NavLink to="/bio">Био</NavLink>
            <NavLink to="/experience">Опыт</NavLink>
            <NavLink to="/portfolio">Портфолио</NavLink>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Menu>
            <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
          
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <Nlink key={link}>{link}</Nlink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
