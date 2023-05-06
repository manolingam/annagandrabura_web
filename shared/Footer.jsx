import {
  Flex,
  Text,
  Link as ChakraLink,
  SimpleGrid,
  VStack,
  HStack
} from '@chakra-ui/react';

import Link from 'next/link';

export const Footer = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '2rem' }}
      bg='black'
      color='white'
      alignItems='center'
    >
      <Flex direction='row' mb='2rem'>
        <ChakraLink
          href=''
          target='_blank'
          rel='noopener noreferrer'
          color='blue'
          fontSize='24px'
          mr='10px'
        >
          <i className='fab fa-twitter'></i>
        </ChakraLink>
        <ChakraLink
          target='_blank'
          rel='noopener noreferrer'
          color='blue'
          fontSize='24px'
          mr='10px'
        >
          <i className='fa-brands fa-facebook'></i>
        </ChakraLink>
        <ChakraLink
          target='_blank'
          rel='noopener noreferrer'
          color='blue'
          fontSize='24px'
          mr='10px'
        >
          <i className='fab fa-instagram'></i>
        </ChakraLink>
        <ChakraLink
          target='_blank'
          rel='noopener noreferrer'
          color='blue'
          fontSize='24px'
        >
          <i className='fab fa-youtube'></i>
        </ChakraLink>
      </Flex>
      <Text color='#6B728E' fontStyle='italic'>
        A lot of people are afraid to say what they want. That's why they don't
        get what they want." - Madonna
      </Text>
    </Flex>
  );
};
