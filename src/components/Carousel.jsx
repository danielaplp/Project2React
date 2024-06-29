import { useState } from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      // title: 'Birdwatching em Noronha',
      // text: "Programe sua expedição",
      // image:'https://static.wixstatic.com/media/c74d60_edc7c07f8c1e474fa36fa9e23d0e2f97~mv2.jpg',
      image:'https://scontent.flis3-1.fna.fbcdn.net/v/t39.30808-6/399070937_18234737095220374_4051097102641429162_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZVxPdpn6lhYQ7kNvgF7dFNj&_nc_ht=scontent.flis3-1.fna&oh=00_AYCyHNy8Nj8q0FTqWVAHYkkPUqaHe-NTpDfZZG3hip_9pA&oe=6685E50E',
    },
    {
      title: '',
      text: "",
      image: 'https://www.wikiaves.com.br/img/hero-bg.jpg',
    },
    {
      title: '',
      text: "",
      image: 'https://static.wixstatic.com/media/c74d60_7e17373497fc483f8e31855f9bafebec~mv2.jpg',
    },
 
    {
      title: '',
      text: "",
      image:
        'https://scontent.flis3-1.fna.fbcdn.net/v/t39.30808-6/404994154_18233862349220374_6216807857202879285_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ovbx175VlkwQ7kNvgFEf7qe&_nc_ht=scontent.flis3-1.fna&oh=00_AYA2q8g596BdtMWSUMcgm1K-KV71PLKYiaWKRLVHD8nzow&oe=6685D6AD',
    },
 /*   {
      title: '',
      text: "",
      image: 'https://s3.amazonaws.com/media.wikiaves.com.br/images/1674/4761887g_c42caaa0629eeee12f6b50e13af4ea4b.jpg',
    }, */
    
    
  ]

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'9xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
            
            >
              
            
            <Container size="container.lg" height="600px" position="relative">
              {/* <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading color={'white'}fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text color={'white'} fontSize={{ base: 'md', lg: 'lg' }}>
                  {card.text}
                </Text>
              </Stack> */}
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

