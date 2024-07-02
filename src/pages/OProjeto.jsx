

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Image as ChakraImage,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import atoba from '../assets/atoba de pe vermelho 2.png'
import sebito from '../assets/sibito 2.png'
import fonteHeading from '../fonts/Flamante-Round-Bold-FFP.ttf'


import Footer from '../components/Footer'

 


const textos = [
  "Promovendo eventos de capacitação em Observação de Aves para guias e professores;",
  "Produzindo material gráfico e audiovisual para difusão de conhecimento e conservação sobre as aves;",
  "Realizando pesquisas científicas que possam fomentar ações de conservação;",
  "Articulando demandas e ações junto a stakeholders e poder público.",
];

export default function OProjeto() {

  return (
    <Box position="relative" >
      
      
   
      <Container maxW={'6xl'}>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align={'start'} spacing={6} mt={{ base: 4, md: 15 }} >
          <Heading color={'gray.600'} fontSize={'3xl'} fontFamily={'body'} fontWeight={800}  >Missões e Objetivos</Heading>
            <Text color={'gray.600'} fontSize={'l'} textAlign="left">
              Atuamos para que o Turismo em Fernando de Noronha seja direcionado para fomentar a Conservação das aves marinhas do arquipélago. E que ações sistêmicas de Conservação fomentem o Turismo, por meio de Pesquisa, Ciência Cidadã, Educação Ambiental, Capacitação Profissional e Economia Local.
            </Text>
            <Text color={'gray.600'} fontSize={'l'} fontFamily={'body'} textAlign="left">
              Para tornar isso realidade, estamos:
            </Text>
            {textos.map((texto, index) => (
              <HStack key={index} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <Text color={'gray.600'} fontSize={'l'} fontFamily={'body'}>{texto}</Text>
              </HStack>
            ))}
             {/* <img src={sebito} alt="sebito" width='20%' style={{ marginTop: '-640px', marginLeft: '1000px' }}/> */}
          </VStack>
          <Box position="relative" display="flex" justifyContent="flex-end">
            
            <Box
              position="absolute"
              top={35} 
              left={170} 
              width="calc(50% + 40px)" 
              height="calc(80% + 40px)" 
              bg="blue.400"
              zIndex={-1}
              
            />
            
            <Box
              position="relative"
              marginLeft="auto" 
              width="70%" 
              top={-15} 
              left={-20}
              zIndex={0}
              
              
            >
              <Box
                
              />
              <ChakraImage
                src="https://static.wixstatic.com/media/c74d60_7aa94f54b18f4c3886b1ea831343cc8b~mv2.jpg/v1/crop/x_576,y_0,w_3328,h_6720/fill/w_394,h_798,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0E8A6107.jpg"
                alt="Pessoasbinoculos"
                objectFit="cover"
                width="80%"
                maxHeight="100%"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.9)"
                
                
               
              />
             
            </Box>
          </Box>
        </SimpleGrid>
        
      </Container>
      
      
    </Box>
  );

  
           }