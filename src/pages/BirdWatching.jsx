

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
import rabojunco from '../assets/rabo de palha de bico laranja 2.png'
import BwCard from '../components/BwCard';
import bwone from '../assets/bw1.jpg';
import bwtwo from '../assets/bw2.jpg';
import bwthree from '../assets/bw3.jpg';
import bwfour from '../assets/bw4.jpg';

const cards = [
  {
    title: 'Rota do Paraíso',
    image: bwone,
  },
  {
    title: 'Rota dos Tesouros',
    image: bwtwo,
  },
  {
    title: 'Rota das Migratórias',
    image: bwthree,
  },
  {
    title: 'Rota do Mar',
    image: bwfour,
  },
];



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
        
          <Heading fontSize={'2xl'} fontFamily={'Open sans'} fontWeight={500} >Birdwatching em Noronha</Heading>
          <Text color={'gray.600'} fontSize={'l'}>
          Você está procurando uma experiência incrível de observação de aves em Fernando de Noronha? Então você veio ao lugar certo. Na ilha, tudo se torna mais mágico. Além de ter a maior diversidade de aves marinhas do Brasil, aqui você pode tirar fotos incríveis do sebito-de-noronha (Vireo gracilirostris) e da cocoruta (Elaenia ridleyana), aves que só existem no arquipélago.
          </Text>
          <Text color={'gray.500'} fontSize={'l'}>
          Nos mirantes, o rabo-de-junco-de-bico-vermelho (Phaethon aethereus) e o rabo-de-junco-de-bico-amarelo (Phaethon lepturus) fazem um espetáculo de exibição, a noivinha (Gygis alba) por toda a ilha, a viuvinha-preta (Anous minutus) em seus ninhos e o mumbebo-de-pé-vermelho (Sula sula) numa visão única e privilegiada serão lifers inesquecíveis.
          </Text>
          

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
          
      {/* <img src={rabojunco} alt="sebito" width='35%' style={{ marginTop: '-450px', marginLeft: '-230px', transform: 'scaleX(-1)' }}  /> */}

     
        </Stack>
        <Flex>
          <Carousel />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}