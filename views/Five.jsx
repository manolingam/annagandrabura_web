import { Flex, Text } from '@chakra-ui/react';

export const Five = () => {
  return (
    <Flex
      direction='column'
      my='2rem'
      boxShadow='inset 5px 5px 10px #e0e0e0,
      inset -5px -5px 10px #ffffff'
      color='blue'
      mx={{ base: '2rem', lg: '5rem' }}
      p='2rem'
    >
      <Text fontSize={{ lg: '32px', sm: '28px' }} fontWeight='bold'>
        Publications
      </Text>

      <Flex direction='column' fontSize='18px' mt='1rem'>
        <Text>I have authored a tech ESP textbook "English For Tech" .</Text>
        <Text>
          I have published an interactive workbook, which is titled "So, tell me
          about yourself."
        </Text>
        <Text>
          I have also published a Teacher's Guide to accompany the textbook
          "English For Tech".
        </Text>
      </Flex>
    </Flex>
  );
};
