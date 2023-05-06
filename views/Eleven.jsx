import { Flex, Highlight, Link, Text } from '@chakra-ui/react';

export const Eleven = () => {
  return (
    <Flex
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '2rem' }}
    >
      <Text fontSize={{ lg: '32px', sm: '28px' }} fontWeight='bold' mb='1rem'>
        My projects
      </Text>
      <Text fontSize='18px' mb='1rem'>
        I founded or co-founded these projects,
      </Text>
      <Text fontSize={{ lg: '18px', sm: '14px' }} mb='1rem'>
        <Link href='' color='#6B728E'>
          Techville
        </Link>{' '}
        - Soft skills and professional development training. Help your team
        reach their full potential by practicing the most in-demand soft skills
        in the workplace.
      </Text>
      <Text fontSize={{ lg: '18px', sm: '14px' }} mb='1rem'>
        <Link href='' color='#6B728E'>
          English For IT
        </Link>{' '}
        - English For IT helps remote, international teams understand each other
        better. English For IT helps tech companies realize their ROI by
        investing in their workforce development. English For IT helps you speak
        better English, communicate across cultures, and improve your soft
        skills.
      </Text>
      <Text fontSize={{ lg: '18px', sm: '14px' }} mb='1rem'>
        <Link href='' color='#6B728E'>
          The Chain Miami
        </Link>{' '}
        - Join 300+ Web3 professionals in Miami and receive weekly updates on
        upcoming events, private web3 dinners & more.
      </Text>
      <Text fontSize={{ lg: '18px', sm: '14px' }} mb='1rem'>
        <Link href='' color='#6B728E'>
          Hiretool
        </Link>{' '}
        - Teach English more effectively and efficiently with cutting-edge AI
        technology. Create an online course and start monetizing your expertise
        with Hiretool.
      </Text>
    </Flex>
  );
};
