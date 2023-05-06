import {
  Flex,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Heading,
  Button,
  CardFooter
} from '@chakra-ui/react';

export const Nine = () => {
  return (
    <Flex
      direction='column'
      px={{ base: '1rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '2rem' }}
    >
      <Text fontSize={{ lg: '32px', sm: '28px' }} fontWeight='bold' mb='2rem'>
        How can I help?
      </Text>

      <SimpleGrid columns={{ lg: 2, sm: 1 }} gap='5'>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          alignItems='center'
          p='2rem'
        >
          <Text fontSize='32px' mb='2rem'>
            <i class='fa-solid fa-1'></i>
          </Text>

          <CardBody>
            <Heading size='md' fontFamily='pathway'>
              Workforce Development Training{' '}
            </Heading>
            <Text py='2' color='#6B728E'>
              If you have an international team and you want to bridge the
              communication gap to increase productivity, check out the
              following resources: For US-based teams: www.mytechville.com for
              cross-cultural communication and soft skills training. For
              offshore teams: www.english4it.online for English language
              training.
            </Text>
          </CardBody>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          alignItems='center'
          p='2rem'
        >
          <Text fontSize='32px' mb='2rem'>
            <i class='fa-solid fa-2'></i>
          </Text>

          <CardBody>
            <Heading size='md' fontFamily='pathway'>
              Launch an Online Course{' '}
            </Heading>
            <Text py='2' color='#6B728E'>
              If you need help launching an online course from scratch or want
              to make changes to an existing one, book a 1-on-1 session.
            </Text>
          </CardBody>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          alignItems='center'
          p='2rem'
        >
          <Text fontSize='32px' mb='2rem'>
            <i class='fa-solid fa-3'></i>
          </Text>

          <CardBody>
            <Heading size='md' fontFamily='pathway'>
              Build a Personal Brand Online{' '}
            </Heading>
            <Text py='2' color='#6B728E'>
              If you need advice on how to build your personal brand and online
              presence, book a 1-on-1 session.
            </Text>
          </CardBody>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          alignItems='center'
          p='2rem'
        >
          <Text fontSize='32px' mb='2rem'>
            <i class='fa-solid fa-4'></i>
          </Text>

          <CardBody>
            <Heading size='md' fontFamily='pathway'>
              {' '}
              Learn about Web3{' '}
            </Heading>
            <Text py='2' color='#6B728E'>
              If you're in Web3 and want to learn about Web3 events in Miami and
              connect with the Web3 community, visit www.theChain.miami.
            </Text>
          </CardBody>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          alignItems='center'
          p='2rem'
        >
          <Text fontSize='32px' mb='2rem'>
            <i class='fa-solid fa-5'></i>
          </Text>

          <CardBody>
            <Heading size='md' fontFamily='pathway'>
              Join the VR/AR Community{' '}
            </Heading>
            <Text py='2' color='#6B728E'>
              If you have a VR/AR startup or company and want to join a network
              of thousands of other VR/AR companies globally, go to
              www.theVRARA.com.
            </Text>
          </CardBody>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          alignItems='center'
          p='2rem'
        >
          <Text fontSize='32px' mb='2rem'>
            <i class='fa-solid fa-6'></i>
          </Text>

          <CardBody>
            <Heading size='md' fontFamily='pathway'>
              I Will Be Your Mentor{' '}
            </Heading>
            <Text py='2' color='#6B728E'>
              If you're a startup incubator/accelerator or a coding boot camp
              and looking for a mentor to help your participants succeed, book a
              1-on-1 session.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
};
