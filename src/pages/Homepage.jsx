'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import logotext from '../assets/LOGO TEXTO 1.png'
import logotextblack from '../assets/LOGO TEXTO PRETA VAZADA(1).png'
import noronhaphoto from '../assets/fernando-de-noronha.jpg'


export default function Homepage() {
  const handleDonateClick = () => {
    
    window.open('https://www.paypal.com/donate/?hosted_button_id=HXBVYMHRLUVML', '_blank');
  };

  return (

    
    <Flex
      w="full"
      h="100vh"
      backgroundImage={noronhaphoto}
      backgroundSize="cover"
      backgroundPosition="center"
      align="center"
      justify="center"
      >
       <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        //    
        spacing={6}
        zIndex={1}> 
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6} >
        
        
                
      <img src={logotextblack} alt="logotext" width="70%" style={{ marginTop: '-300px', marginLeft: '100px' }}  />
         
          
        </Stack>
       </VStack> 
       <a href="https://seulinkdedoacao.com" target="_blank" rel="noopener noreferrer"></a>
        <Button
          onClick={handleDonateClick}
          position='absolute'
          top="55vh"
          left="50%"
          bg="transparent"
          color="black"
          borderRadius="full"
          _hover={{ bg: 'white', color: 'black' }}
          border="1px solid black"
        >
        Doar
      </Button>  
       
    </Flex>
    
  )
}


