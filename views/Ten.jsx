import { Flex, Text } from '@chakra-ui/react';

export const Ten = () => {
  return (
    <Flex direction='column' mb='4rem' bg='orange' color='white' p='2rem'>
      <Text
        fontSize={{ lg: '32px', sm: '24px' }}
        textAlign='center'
        fontStyle='italic'
      >
        "Serendipity works only if you do" – Anna Gandrabura
      </Text>
    </Flex>
  );
};
