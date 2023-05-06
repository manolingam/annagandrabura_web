import { Flex, Text } from '@chakra-ui/react';

export const Two = () => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      my='2rem'
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
        “Be the change you wish to see in the world" — Mahatma Gandhi
      </Text>
    </Flex>
  );
};
