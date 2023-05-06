import { Flex } from '@chakra-ui/react';

import { One } from '../views/One';
import { Two } from '../views/Two';
import { Three } from '../views/Three';
import { Four } from '../views/Four';
import { Five } from '../views/Five';
import { Six } from '../views/Six';
import { Seven } from '../views/Seven';
import { Eight } from '../views/Eight';
import { Nine } from '../views/Nine';
import { Ten } from '../views/Ten';
import { Eleven } from '../views/Eleven';

export default function Home() {
  return (
    <Flex direction='column'>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Ten />
      <Eleven />
    </Flex>
  );
}
