import { Box, Flex, Image, Spacer, Center } from '@chakra-ui/react';
import React from 'react';

import Logo from '../../Assets/logo/logo.png';

export interface Props {
  name: string;
}

export function FormsHeader(props: Props) {
  return (
    <Box w="100%" h="44px" bg="#183380" position="fixed">
      <Flex color="white">
        <Center w={['8em', '11em']}>
          <Box m="0.8em" justifyContent={['left', 'center']}>
            <Image src={Logo} />
          </Box>
        </Center>

        <Box
          flex="5"
          textAlign={['left', 'center']}
          color="#ffffff"
          font-size="16px"
          mt="0.5em"
        >
          <b>{props.name}</b>
        </Box>
        <Box flex="1"></Box>
      </Flex>
    </Box>
  );
}
