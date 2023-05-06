import { Flex, Text } from '@chakra-ui/react';

export const Seven = () => {
  return (
    <Flex
      direction='column'
      my='4rem'
      boxShadow='inset 5px 5px 10px #e0e0e0,
      inset -5px -5px 10px #ffffff'
      color='blue'
      mx={{ base: '2rem', lg: '5rem' }}
      p='2rem'
    >
      <Text fontSize={{ lg: '32px', sm: '28px' }} fontWeight='bold'>
        Speaking At Conferences.
      </Text>

      <Flex direction='column' fontSize='18px' mt='1rem'>
        <Text>
          I speak on the future of education, technology, blockchain technology,
          the Metaverse, entrepreneurship, and women's empowerment. Feel free to
          reach out if you'd like me to speak at your event. When you book me as
          a speaker, I promote your event in my 57k+ blog and my community.
        </Text>
      </Flex>
    </Flex>
  );
};
