import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  export default function BwCard({ title, image }) {
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
          pos={'relative'}
          zIndex={1}>
          <Box
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
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
              alt={title}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'3xl'} fontFamily={'body'} fontWeight={800} color={'gray.600'}>
              {title}
            </Heading>
          </Stack>
        </Box>
      </Center>
    );
  }