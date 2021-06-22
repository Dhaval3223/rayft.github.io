import { Box, Flex, Center, Spacer } from '@chakra-ui/react';
import React from 'react';

import { IconsPanel } from '../IconsPanel/index';
import { Inputsearch } from '../InputSearch/index';
import { BurgerMenu } from '../BurgerMenu/index';
import { MainLogo } from '../Logo/index';

export interface Props {}

export function Header(props: Props) {
  return (
    <Box position="fixed">
      <Box bg="#183380" height="44px">
        <Flex>
          <Center m={2}>
            <Box display={['block', 'block', 'block', 'none', 'none', 'none']}>
              <BurgerMenu />
            </Box>
          </Center>
          <Center>
            <Box
              mt="0.4em"
              mr="1em"
              display={['none', 'none', 'none', 'block']}
            >
              <MainLogo />
            </Box>
          </Center>
          <Box mt={1.5} display={['none', 'none', 'none', 'block']}>
            <Inputsearch />
          </Box>
          <Spacer />
          <Box display={['none', 'none', 'none', 'block']} mr="84px">
            <IconsPanel />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
