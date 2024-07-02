import { useState } from 'react'
import { useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from 'axios';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    
  } from '@chakra-ui/react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const AddNewBird = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [scientificName, setScientificName] = useState("");
  const navigate = useNavigate()
 

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleScientificName = (event) => {
    setScientificName(event.target.value);
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
        const newBird ={
            name, image1: image, scientificName
        }

      await axios.post("https://project2-server.vercel.app/birds", newBird)

      //once the project is created 
      //redirect the user to the list of the projects
      //link externo ao site = navigate

      navigate("/especies")
      
      
        
    } catch (error) {
        console.log('error creating the bird', error)
    }
}


return (
    <Flex
    
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign={'center'} fontFamily={'body'} color={'gray.600'}>
          Adicionar Espécie
        </Heading>
       
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="name" isRequired>
                <FormLabel color={'gray.600'} fontFamily={'body'}>Name</FormLabel>
                <Input value={name} type="text" onChange={handleName}/>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="image">
                <FormLabel color={'gray.600'} fontFamily={'body'}>Image</FormLabel>
                <Input type="text" value={image} onChange={handleImage} />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="sName" isRequired>
            <FormLabel color={'gray.600'} fontFamily={'body'}>Scientific Name</FormLabel>
            <Input type="text" value={scientificName} onChange={handleScientificName}/>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
                onClick={handleSubmit}
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              fontFamily={'body'}>
             Adicionar
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box  color={'blue.600'} textAlign="center">
          <Link to='/especies' color={'blue.400'} fontFamily={'body'}>
            Voltar para Espécies
          </Link>
        </Box>
    </Stack>
  </Flex>


  );
};

export default AddNewBird;