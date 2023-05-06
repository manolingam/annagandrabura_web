import { Flex, Text, Image } from '@chakra-ui/react';

export const One = () => {
  return (
    <Flex
      direction={{ lg: 'row', sm: 'column-reverse' }}
      alignItems='center'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '5rem' }}
    >
      <Flex direction='column'>
        <Text fontSize={{ lg: '36px', sm: '28px' }} fontWeight='bold'>
          Anna Gandrabura
        </Text>
        <Text color='#6B728E'>
          Educator| Tech Entrepreneur| Influencer| Mentor| Author
        </Text>
        <Text mt='1rem' fontSize='20px' maxW={{ lg: '70%', sm: '100%' }}>
          We learn best when we hear other people's stories. That's why I'm
          excited to tell you my story! Buckle up and scroll down for read about
          my journey.
        </Text>
      </Flex>
      <Image
        src='/profile_pic.png'
        w={{ lg: '300px', sm: '150px' }}
        borderRadius='50%'
        alt='profile picture'
        mb={{ sm: '2rem', lg: 0 }}
      />
    </Flex>
  );
};
