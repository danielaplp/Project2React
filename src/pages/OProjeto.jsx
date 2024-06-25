/* import { Box, Heading, Text, Image } from '@chakra-ui/react';


const OProjeto = () => {

    return (

      

        <Box maxW="1200px" mx="auto" p="20px">
        <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
          <Box flex={{ base: 1, md: '1 1 45%' }} textAlign="center" paddingBottom={{ base: 8, md: 0 }}>
            <Box marginTop={{ base: '20px', md: '80px' }}>
              <Heading fontSize="3xl" marginBottom="40px">Missões e Objetivos</Heading>
              
            </Box>
            <Text marginBottom="40px">
            Atuamos para que o Turismo em Fernando de Noronha seja direcionado para fomentar a Conservação das aves marinhas do arquipélago. E que ações sistêmicas de Conservação fomentem o Turismo, por meio de Pesquisa, Ciência Cidadã, Educação Ambiental, Capacitação Profissional e Economia Local.
            </Text>
            <Text mb="20px">
            Para tornar isso realidade, estamos:
            </Text>
            <Text mb="20px">
            1. Implementando o turismo de observação de aves no Arquipélago de Fernando de Noronha;
            </Text>
            <Text mb="20px">
            2. Promovendo eventos de capacitação em Observação de Aves para guias e professores;
            </Text>
            <Text mb="20px">
            3. Produzindo material gráfico e audiovisual para difusão de conhecimento e conservação sobre as aves;
            </Text>
            <Text mb="20px">
            4. Realizando pesquisas científicas que possam fomentar ações de conservação;
            </Text>
            <Text mb="20px">
            5. Articulando demandas e ações junto a stakeholders e poder público.
            </Text>
          </Box>
          <Box flexShrink={0} margin="auto" marginLeft={{ base: 0, md: 4 }} maxHeight="800px">            <Image
              src="https://static.wixstatic.com/media/c74d60_7aa94f54b18f4c3886b1ea831343cc8b~mv2.jpg/v1/crop/x_576,y_0,w_3328,h_6720/fill/w_394,h_798,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0E8A6107.jpg"
              alt="Aves de Noronha"
              maxH="100%"
              w="auto"
            />
          </Box>
        </Box>
      </Box>

    );



};

export default OProjeto;
 */

'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp, IoAddCircleOutline,  IoAdd, IoAddOutline, IoAddSharp } from 'react-icons/io5'
import { ReactElement } from 'react';




const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function OProjeto() {
  return (
    <Container maxW={'5xl'} py={12} centerContent>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}maxW={{ base: 'unset', md: '2xl' }}>
        
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} >Missões e Objetivos</Heading>
          <Text fontFamily={'body'} color={'gray.500'} fontSize={'lg'}>
          Atuamos para que o Turismo em Fernando de Noronha seja direcionado para fomentar a Conservação das aves marinhas do arquipélago. E que ações sistêmicas de Conservação fomentem o Turismo, por meio de Pesquisa, Ciência Cidadã, Educação Ambiental, Capacitação Profissional e Economia Local.
          </Text>
          <Text color={'gray.500'} fontSize={'lg'} fontFamily={'body'}>
          Para tornar isso realidade, estamos:
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
       
            
            <Feature
              icon={<Icon as={ IoAddSharp} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={
                <Text color={'gray.500'} fontSize={'lg'} fontFamily={'body'} fontWeight={400}>
                  Promovendo eventos de capacitação em Observação de Aves para guias e professores;
                </Text>
              }
            />
            <Feature
              icon={<Icon as={IoAddSharp} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={<Text color={'gray.500'} fontSize={'lg'} fontFamily={'body'} fontWeight={400}>
              Produzindo material gráfico e audiovisual para difusão de conhecimento e conservação sobre as aves;
              </Text>}
              
            />
            <Feature
              icon={<Icon as={IoAddSharp} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={<Text color={'gray.500'} fontSize={'lg'} fontFamily={'body'} fontWeight={400}>
                Realizando pesquisas científicas que possam fomentar ações de conservação;'
                </Text>}
            />
            <Feature
              icon={<Icon as={IoAddSharp} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={<Text color={'gray.500'} fontSize={'lg'} fontFamily={'body'} fontWeight={400}>
                Articulando demandas e ações junto a stakeholders e poder público.
                </Text>}
            />
            
          </Stack>
        </Stack>
        <Flex justify={'center'}>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://static.wixstatic.com/media/c74d60_7aa94f54b18f4c3886b1ea831343cc8b~mv2.jpg/v1/crop/x_576,y_0,w_3328,h_6720/fill/w_394,h_798,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0E8A6107.jpg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}



