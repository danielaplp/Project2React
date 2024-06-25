import { useState } from 'react'
import { useNavigate} from "react-router-dom";
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
    Link,
  } from '@chakra-ui/react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

  const FormBw = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [mounth, setMounth] = useState("");
    const [phone, setPhone] = useState("");
  
  const navigate = useNavigate()
 
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleMounth = (event) => {
    setMounth(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault()

    
    try {
      const newPerson ={
        name,
        email,
        city,
        phone
      }


    navigate("/expedicao")
    
    
      
  } catch (error) {
      console.log('error creating the bird', error)
  }


   
  };



return (
    <Flex
    
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
       
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
          Birdwatching em Noronha
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
                <FormLabel>Nome</FormLabel>
                <Input value={name} type="text" onChange={handleName}/>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="image">
                <FormLabel>Email</FormLabel>
                <Input type="text" value={email} onChange={handleEmail} />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="image">
                <FormLabel>Mês da expedição</FormLabel>
                <Input type="text" value={mounth} onChange={handleMounth} />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="image">
                <FormLabel>Telefone</FormLabel>
                <Input type="text" value={phone} onChange={handlePhone} />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="sName" isRequired>
            <FormLabel>Cidade</FormLabel>
            <Input type="text" value={city} onChange={handleCity}/>
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
              }}>
             Submeter
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>


  );
};

export default FormBw;






/*import { useState } from 'react'

const FormBw = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mounth, setMounth] = useState("");
  const [phone, setPhone] = useState("");


  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleMounth = (event) => {
    setMounth(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name,
      email,
      city,
      phone
    };

    addPersonHandler(newPerson);

    // Para limpar o formulário depois do usuário preencher e submeter
    setName("");
    setEmail("");
    setCity("");
    setPhone("");
  };

  return (
    <div>
      <h2>Agende sua Expedição</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        
        <label>Email</label>
        <input type="text" name="image" value={email} onChange={handleEmail} />

        <label>Cidade</label>
        <input type="text" name="calories" value={city} onChange={handleCity} />

        <label>Mês da Expedição</label>
        <input type="text" name="calories" value={mounth} onChange={handleMounth} />

        <label>Telefone</label>
        <input type="text" name="servings" value={phone} onChange={handlePhone} />

        <button type="submit">Submeter</button>
      </form>
    </div>
  );
};

export default FormBw;*/