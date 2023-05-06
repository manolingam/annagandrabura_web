import { Flex, Text } from '@chakra-ui/react';

export const Eight = () => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      mb='4rem'
      bg='orange'
      color='white'
      p='2rem'
    >
      <Text
        fontSize={{ lg: '32px', sm: '24px' }}
        textAlign='center'
        fontStyle='italic'
        maxW='70%'
      >
        "Choose a job you love and you'll never have to work a day in your life"
        – Confucius.
      </Text>
    </Flex>
  );
};
