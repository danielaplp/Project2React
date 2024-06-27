'use client'
import logo from '../assets/AdN_azul_padrão.png';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'

const Logo = (props) => {
  return (
    <Box
    as="img"
    src={logo}
    alt="Logo"
    h="auto"
    w="50px"  
  />
  )
}

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (

    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
    
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
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
          
       
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/avesdenoronha/'} target="_blank">
            
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}