'use client'

import React from 'react'
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

export default function CarouselHome() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Aves de Noronha',
      text: "Pesquisa, turismo e conservação",
      image:'https://s3.amazonaws.com/media.wikiaves.com.br/images/6491/1946414g_d5f2cd94c146e3ce26bebe533dd61483.jpg',
    },
    {
      title: 'Aves de Noronha',
      text: "Pesquisa, turismo e conservação",
      image:'https://static.wixstatic.com/media/c74d60_5edb8885064340c6920d9dc8faacb2fe~mv2.jpg/v1/fill/w_1899,h_773,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c74d60_5edb8885064340c6920d9dc8faacb2fe~mv2.jpg',
    },
    {
      title: 'Aves de Noronha',
      text: "Pesquisa, turismo e conservação",
      image:
        'https://static.wixstatic.com/media/c74d60_70561d93e4b54cf4a664e82a34d2b2ba~mv2.jpg/v1/fill/w_1781,h_730,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c74d60_70561d93e4b54cf4a664e82a34d2b2ba~mv2.jpg',
    },
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
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}