

import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/AdN_azul_padrão.png'; 
import logoblack from '../assets/logo aves de noronha PRETA vasada.png'

const Logo = (props) => {
  return (
    <Box
      as="img"
      src={logoblack}
      alt="Logo"
      h="auto"
      w="40px"  
    />
  );
}

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.a
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      href={href}
      target="_blank" 
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.a>
  );
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.40', 'gray.600')}
      color={useColorModeValue('gray.600', 'gray.600')}
      mt="auto"
      py={0.5}
      >
        
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Text>© Projeto Aves de Noronha </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/avesdenoronha/'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}