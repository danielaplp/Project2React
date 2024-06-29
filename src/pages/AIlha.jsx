
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

  import fotonoronha from '../assets/noronha1.jpg'
  import atoba from '../assets/atoba de pe vermelho 2.png'
  import ceu from '../assets/ceu.jpg.jpg'
  
  const textos = [
    "Promovendo eventos de capacitação em Observação de Aves para guias e professores;",
    "Produzindo material gráfico e audiovisual para difusão de conhecimento e conservação sobre as aves;",
    "Realizando pesquisas científicas que possam fomentar ações de conservação;",
    "Articulando demandas e ações junto a stakeholders e poder público.",
  ];
  
  export default function OProjeto() {
   
  
    return (
        
      <Box p={4} >
        <Container maxW={'6xl'}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align={'start'} spacing={6} mt={{ base: 4, md: 15 }} >
            
 

            <Heading fontSize={'2xl'} fontFamily={'Open sans'} fontWeight={500} >Fernando de Noronha</Heading>
              <Text color={'gray.600'} fontSize={'l'} textAlign="left"></Text>
              <Text color={'gray.600'} fontSize={'l'} textAlign="left"> 
              Arquipélago brasileiro, formado por 21 ilhas, ilhotas e rochedos de origem vulcânica, ocupa uma área total de 26 km² — dos quais 17 km² são da ilha principal — e se situa no Oceano Atlântico a nordeste do Brasil continental.
              </Text>
              <Text color={'gray.600'} fontSize={'l'} textAlign="left">
             Fernando de Noronha abriga a maior diversidade de aves marinha do país. Ao todo, são quase 90 espécies de aves registradas que usam a ilha para descanso, alimentação e reprodução.
              </Text>
              <Text color={'gray.600'} fontSize={'l'} textAlign="left">
              Algumas espécies podem ser vistas o ano inteiro, como as endêmicas sebito-de-noronha (Vireo gracilirostris) e cocoruta (Elaenia ridleyana), além do rabo-de-junco-de-bico-amarelo (Phaethon lepturus) – espécie símbolo do Parque Nacional Marinho – a noivinha (Gygis alba), a viuvinha (Anous minutus) e o mumbebo-de-pé-vermelho (Sula sula).
              </Text>
              <Text color={'gray.600'} fontSize={'l'} textAlign="left">
              Além das aves, as 21 ilhas do arquipélago abrigam répteis únicos como a mabuia (Trachylepis atlantica) e a anfisbênia (Amphisbaena ridleyi), que só podem ser observadas em Noronha, além das tartarugas-verdes (Chelonia mydas), tartarugas-de-pente (Eretmochelys imbricata) e várias outras espécies de tartarugas marinhas. Quando falamos em mamíferos aquáticos, o primeiro que vem a nossa mente são os exibidos golfinhos-rotadores (Stenella longirostris), que todos os dias se aproximam da ilha em grupo para descansar.
              </Text>
              
              <img src={atoba} alt="atoba" width="50%" style={{ marginTop: '-240px', marginLeft: '1010px' }}  />
              
            </VStack>
            <Box position="relative" display="flex" justifyContent="flex-end">
              
              <Box
                position="absolute"
                top={35} 
                left={250} 
                width="calc(50% + 40px)" 
                height="calc(80% + 40px)" 
                bg="blue.400"
                zIndex={-1}
                
              />
              
              <Box
                position="relative"
                marginLeft="auto" 
                width="200%" 
                top={55} 
                left={20}    
              >
                <Box />

                

                <ChakraImage
                  src={fotonoronha}
                  alt="Pessoasbinoculos"
                  objectFit="cover"
                  width="100%"
                  maxHeight="150%"  
                  boxShadow="0 4px 8px rgba(0, 0, 0, 0.9)"   
                />
                

              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    );
}

/* const AIlha = () => {

    

    return (
        

    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
         
            <h1 >Fernando de Noronha</h1>
            
           
            <p>
            O Arquipélago de Fernando de Noronha abriga a maior diversidade de aves marinha do país. Ao todo, são quase 90 espécies de aves registradas que usam a ilha para descanso, alimentação e reprodução.
            </p>
            <p>Algumas espécies podem ser vistas o ano inteiro, como as endêmicas sebito-de-noronha (Vireo gracilirostris) e cocoruta (Elaenia ridleyana), além do rabo-de-junco-de-bico-amarelo (Phaethon lepturus) – espécie símbolo do Parque Nacional Marinho – a noivinha (Gygis alba), a viuvinha (Anous minutus) e o mumbebo-de-pé-vermelho (Sula sula).</p>
            <p>Além das aves, as 21 ilhas do arquipélago abrigam répteis únicos como a mabuia (Trachylepis atlantica) e a anfisbênia (Amphisbaena ridleyi), que só podem ser observadas em Noronha, além das tartarugas-verdes (Chelonia mydas), tartarugas-de-pente (Eretmochelys imbricata) e várias outras espécies de tartarugas marinhas. Quando falamos em mamíferos aquáticos, o primeiro que vem a nossa mente são os exibidos golfinhos-rotadores (Stenella longirostris), que todos os dias se aproximam da ilha em grupo para descansar.</p>

            <img src="/src/assets/fernando-de-noronha.jpg" alt="FNphoto" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
            
           
        </div>



    );
};

export default AIlha;

 */
//<img src="/src/assets/fernando-de-noronha.jpg" alt="FNphoto" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />

//'https://cf.bstatic.com/xdata/images/hotel/max1280x900/493840642.jpg?k=f4b09eda9005d4cd7816ae36a8b6a678671455b677164614858ed8f32f250ef7&o=&hp=1',
//'https://portalnorte.com.br/wp-content/uploads/2022/09/8d4f961a394d6c4cb53e65376c7a62eb.jpg',
//'https://www.tamar.org.br/fotos/pente01.jpg',
//'https://golfinhorotador.org.br/wp-content/uploads/2017/03/estrategia.jpg'