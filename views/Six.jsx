import {
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  OrderedList,
  ListItem
} from '@chakra-ui/react';

export const Six = () => {
  return (
    <Flex
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '2rem' }}
    >
      <Text fontSize={{ lg: '32px', sm: '28px' }} fontWeight='bold' mb='1rem'>
        Areas Of Expertise
      </Text>
      <Accordion allowMultiple allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='18px'>
                Technology
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='#6B728E' fontSize='14px'>
            Reach out to me if you want to become a tech entrepreneur In my
            career, I have successfully built two technology products--one using
            blockchain and the other powered by AI--both of which are currently
            trending. The first product was a platform built to issue
            blockchain-verified certificates of accomplishment using NFT and
            Polygon technologies. When a user successfully completes one of the
            English For IT courses, they can mint their own NFT certificate and
            show it off to potential employers on LinkedIn. Check it out at
            www.certificates.english4it.online. The second product was
            co-founded by me, and is a learning management system (LMS) for
            online courses powered by AI. With Hiretool, English teachers can
            create and host their online course, save time with the AI-powered
            feedback feature, and enjoy a sleek, intuitive, and innovative
            design. Having used many third-party LMS options in the past for my
            own online English courses, I created Hiretool to be the ultimate
            solution. Learn more and try it out at www.hiretool.io. Both of
            these tech products launched in 2022, making me a tech entrepreneur.
            When I put my mind to something, I accomplish it quickly. That's
            just the way I roll.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='18px'>
                Web3, Metaverse, VR
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='#6B728E' fontSize='14px'>
            I am a lifelong learner. I love leveraging future tech for my
            projects. My journey into Web3, Metaverse, and VR began with the
            idea to build Techville, a virtual city that offers a platform for
            people to learn soft skills (currently offers in-person and virtual
            workforce development training). With this concept in mind, I sought
            out a community of like-minded individuals and found a new home in
            Miami, USA in 2021. During the latter half of 2021 and the first
            half of 2022, I focused on learning about Web3, Metaverse, and VR.
            Later in 2022, I was ready to share my knowledge and bring people
            onboard into the world of Web3. It usually takes six months to a
            year to acquire the necessary skills to the point where you can
            confidently share your knowledge. If you're interested in changing
            your career, the Web3 space offers numerous opportunities for both
            tech and non-tech roles. In 2022, I co-founded The Chain Miami, an
            insider guide to Web3 events, and was appointed co-president of
            VRARA, a global industry organization for Virtual and Augmented
            Reality.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='18px'>
                Community
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='#6B728E' fontSize='14px'>
            Community is the new business currency I have been a community
            builder pretty much since the beginning of my career. If you or your
            business doesn't have a community, you better start building one as
            soon as possible. Only businesses and leaders backed by a community
            will have a chance to get ahead of the game. Adapt to the new
            reality quickly, or risk being left behind. Join my communities:
            Web3 Miami: https://bit.ly/m/jointhechain Tech ESL Global:
            https://t.me/eng4it ESL Global:
            https://instagram.com/english_with_annglish
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='18px'>
                Mentorship
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='#6B728E' fontSize='14px'>
            If you want to find a job or do business - it might be better to
            talk to people you barely know, rather than close friends. I mentor
            beginner entrepreneurs, tech professionals, startup founders, ELS
            teachers launching their online courses, and career switchers
            breaking into tech or web3 industries. Fun fact: According to
            research, it may be more beneficial to network with acquaintances
            rather than close friends when searching for a job or business
            opportunities. Do you want me to be your mentor?
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='18px'>
                Social media Personal brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='#6B728E' fontSize='14px'>
            Do you have a personal brand on social media? If not, you definitely
            should! Whether you are a founder or a professional, social media
            presence will always offer perks in your career and life. Throughout
            life, you may change the company you work for, or exit your startup,
            but you'll never change "you". Your personal brand will be with you
            for life. I have built blogs on Instagram, TikTok, LinkedIn, and
            Facebook with an 800k+ following. I am happy to share how I did it
            and mentor you to build your personal brand online. Do you need help
            growing your Instagram, TikTok, or Linkedin?
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Text mt='3rem' fontSize='18px'>
        If you have read all of the above and think it's a lot, it is. But, keep
        this in mind – to juggle many projects and wear many hats successfully,
        I follow a few principles.
      </Text>
      <OrderedList
        mx='auto'
        ml={{ sm: '2rem', lg: 0 }}
        mt='2rem'
        fontSize='18px'
      >
        <ListItem>I love what I do and do what I love.</ListItem>
        <ListItem>I prioritize effective time management.</ListItem>
        <ListItem>Work within intersecting industries.</ListItem>
        <ListItem>I make sure I enjoy my work.</ListItem>
      </OrderedList>
    </Flex>
  );
};
