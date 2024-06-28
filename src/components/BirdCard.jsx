import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button, 
  Switch
} from '@chakra-ui/react'
 import { Link } from 'react-router-dom'
 import ReactAudioPlayer from 'react-audio-player'
 import { useState, useEffect } from 'react';



export default function BirdCard(props) {
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    
    const savedToggleState = localStorage.getItem(`toggleState_${props.birds.id}`);
    if (savedToggleState !== null) {
      setToggleState(JSON.parse(savedToggleState));
    }
  }, [props.birds.id]);

  const playSound = () => {
    const audio = new Audio(props.birds.song);
    audio.play();
    console.error('Erro ao reproduzir o som:');
  }

  const handleToggle = () => {
    const newState = !toggleState;
    setToggleState(newState);
    
    localStorage.setItem(`toggleState_${props.birds.id}`, JSON.stringify(newState));
  }

 

  return (
    <Center py={12}>
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
          rounded={'lg'}
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
            backgroundImage: `url(${props.birds.image1})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={props.birds.image1}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'lowercase'} fontStyle={'italic'} >
            {props.birds.scientificName}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {props.birds.name}
          </Heading>
        
          <ReactAudioPlayer controls src={props.birds.song} />
          <Stack direction={'row'} align={'center'}>

          <Button onClick={() => props.deleteHandler(props.birds.id)}>Excluir</Button>
         
          
          {toggleState ? <Text color="red" fontFamily={'body'}>Risco de Extinção</Text> : null}
            <Switch size="md" colorScheme={toggleState ? "red" : "green"} isChecked={toggleState} onChange={handleToggle} />
  
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}