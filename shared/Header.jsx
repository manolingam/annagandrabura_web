import { Flex, Image, Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      h={{ lg: '100px', sm: '75px' }}
      w='100%'
      alignItems='center'
      justifyContent='left'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '2rem' }}
      mb='2rem'
    >
      <Image
        src='/profile_pic.png'
        w='50px'
        borderRadius='50%'
        alt='profile picture'
        mr='1rem'
      />
      <Text>Anna Gandrabura</Text>
    </Flex>
  );
};
