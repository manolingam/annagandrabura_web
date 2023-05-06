import { SimpleGrid, Skeleton } from '@chakra-ui/react';

export const Four = () => {
  return (
    <SimpleGrid
      columns={{ lg: 3, sm: 1 }}
      my='4rem'
      placeItems='center'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '1rem' }}
      gap='5'
    >
      <Skeleton w='250px' h='250px' backgroundColor='blackAlpha.500'></Skeleton>
      <Skeleton w='250px' h='250px' backgroundColor='blackAlpha.500'></Skeleton>
      <Skeleton w='250px' h='250px' backgroundColor='blackAlpha.500'></Skeleton>
    </SimpleGrid>
  );
};
