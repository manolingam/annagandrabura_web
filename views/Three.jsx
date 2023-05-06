import { Flex, Text, SimpleGrid } from '@chakra-ui/react';

export const Three = () => {
  return (
    <Flex
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '1rem' }}
    >
      <Text fontSize={{ lg: '32px', sm: '28px' }} fontWeight='bold'>
        Education
      </Text>
      <Text mt='1rem' fontSize='20px' maxW={{ lg: '70%', sm: '100%' }}>
        The first thing to know about me is that I'm an avid learner. The number
        of courses, workshops, coaching sessions I have taken in my life is hard
        to count. Among the many I'd like to highlight
      </Text>

      <SimpleGrid columns='2' gap='3' mt='2rem'>
        <Text bg='#C4D7F2' padding='12px'>
          Odesa National University, Ukraine
        </Text>
        <Text bg='#C4D7F2' padding='12px'>
          University Of Oregon, USA
        </Text>
        <Text bg='#C4D7F2' padding='12px'>
          CELTA certification at Teaching House NYC, USA
        </Text>
        <Text bg='#C4D7F2' padding='12px'>
          Stanford University, USA
        </Text>
      </SimpleGrid>
    </Flex>
  );
};
