'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion';

export default function Homepage() {
  const handleDonateClick = () => {
    
    window.open('https://www.paypal.com/donate/?hosted_button_id=HXBVYMHRLUVML', '_blank');
  };

  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage={
        'url(https://s3.amazonaws.com/media.wikiaves.com.br/images/6491/1946414g_d5f2cd94c146e3ce26bebe533dd61483.jpg)'
        
      }
      backgroundSize="cover"
      backgroundPosition="center"
      align="center"
      justify="center"
      >
       <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        spacing={6}
        zIndex={1}> 
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
      
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
           >
            
            <h2>AVES de NORONHA</h2>
            <h4>Pesquisa, turismo e conservação</h4>
          </Text> 
          
        </Stack>
       </VStack> 
       <a href="https://seulinkdedoacao.com" target="_blank" rel="noopener noreferrer"></a>
       <Button
          onClick={handleDonateClick}
          position='absolute'
          top="80vh"
          left="50%"
          bg="transparent"
          color="white"
          borderRadius="full"
          _hover={{ bg: 'white', color: 'black' }}
          border="1px solid white"
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