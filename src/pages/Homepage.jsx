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


/*buttons  <Stack direction={'row'}>
<Button
bg={'blue.400'}
rounded={'full'}
color={'white'}
_hover={{ bg: 'blue.500' }}>
Show me more
</Button>
<Button
bg={'whiteAlpha.300'}
rounded={'full'}
color={'white'}
_hover={{ bg: 'whiteAlpha.500' }}>
Show me more
</Button>
</Stack>*/

// backgroundimage ='url(https://static.wixstatic.com/media/c74d60_5edb8885064340c6920d9dc8faacb2fe~mv2.jpg/v1/fill/w_1899,h_773,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c74d60_5edb8885064340c6920d9dc8faacb2fe~mv2.jpg)'


/*const imgURL = "https://static.wixstatic.com/media/c74d60_e241dd8722164bd9808b58e64a8190de~mv2.jpg/v1/fill/w_930,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c74d60_e241dd8722164bd9808b58e64a8190de~mv2.jpg"

const Homepage = () => {
  return(
    <div>
      <h1>Aves de Noronha</h1>
      <img src={imgURL} alt="home" className="page-img" />
    </div>
  )
   
  };
  
  export default Homepage;*/