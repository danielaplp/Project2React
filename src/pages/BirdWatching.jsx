/* import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel';

const BirdWatching = () => {
    return (
        

        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
                <h1>Nosso Roteiro</h1>
                
               
                <p>
                Você está procurando uma experiência incrível de observação de aves em Fernando de Noronha? Então você veio ao lugar certo. Na ilha, tudo se torna mais mágico. Além de ter a maior diversidade de aves marinhas do Brasil, aqui você pode tirar fotos incríveis do sebito-de-noronha (Vireo gracilirostris) e da cocoruta (Elaenia ridleyana), aves que só existem no arquipélago. 
                </p>
                <p>Nos mirantes, o rabo-de-junco-de-bico-vermelho (Phaethon aethereus) e o rabo-de-junco-de-bico-amarelo (Phaethon lepturus) fazem um espetáculo de exibição, a noivinha (Gygis alba) por toda a ilha, a viuvinha-preta (Anous minutus) em seus ninhos e o mumbebo-de-pé-vermelho (Sula sula) numa visão única e privilegiada serão lifers inesquecíveis.</p>
                
                
                <Carousel />

                <Link to="/expedicao">
        <button
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '7px',
            marginTop: '20px'
          }}>
          Agende sua expedição
        </button>
      </Link>

            </div>
    
    
    
        );
}

export default BirdWatching; */


//<img src="/src/assets/fernando-de-noronha.jpg" alt="FNphoto" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />

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
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';



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

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} >Birdwatching em Noronha</Heading>
          <Text color={'gray.600'} fontSize={'l'}>
          Você está procurando uma experiência incrível de observação de aves em Fernando de Noronha? Então você veio ao lugar certo. Na ilha, tudo se torna mais mágico. Além de ter a maior diversidade de aves marinhas do Brasil, aqui você pode tirar fotos incríveis do sebito-de-noronha (Vireo gracilirostris) e da cocoruta (Elaenia ridleyana), aves que só existem no arquipélago.
          </Text>
          <Text color={'gray.500'} fontSize={'l'}>
          Nos mirantes, o rabo-de-junco-de-bico-vermelho (Phaethon aethereus) e o rabo-de-junco-de-bico-amarelo (Phaethon lepturus) fazem um espetáculo de exibição, a noivinha (Gygis alba) por toda a ilha, a viuvinha-preta (Anous minutus) em seus ninhos e o mumbebo-de-pé-vermelho (Sula sula) numa visão única e privilegiada serão lifers inesquecíveis.
          </Text>
          {/* <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            />
          </Stack> */}
          <Link to="/expedicao">
        <button
          style={{
            backgroundColor: '#4299e1',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '7px',
            marginTop: '20px'
          }}>
          Agende sua expedição
        </button>
      </Link>
          


        </Stack>
        <Flex>
        <Carousel />
          
        </Flex>
      </SimpleGrid>
    </Container>
  )
}