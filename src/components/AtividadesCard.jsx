import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
  } from '@chakra-ui/react'
   import { Link } from 'react-router-dom'
   
  
  
  
  export default function AtividadesCard(props) {
   
  
   
  
    return (
      <Center py={12}>
                    <Link to={`/acoes/${props.atividades.id}`}>

        <Box
          role={'group'}
          p={6}
          m={4}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            // rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${props.atividades.image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              // rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={props.atividades.image}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontFamily={'body'} fontSize={'sm'}   >
              {props.atividades.text}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={700} color={'gray.600'}>
               {props.atividades.name}
            </Heading>
          
           
            <Stack direction={'row'} align={'center'}>
  
            <Box
                mt={4}
                display={'none'}
                _groupHover={{ display: 'block' }}
              >
                <Text  color={'gray.500'} fontFamily={'body'} fontSize={'sm'}>{props.atividades.detailedInfo}</Text>
            
                </Box>
    
            </Stack>
          </Stack>
        </Box>
        
</Link>
      </Center>
    )
  }