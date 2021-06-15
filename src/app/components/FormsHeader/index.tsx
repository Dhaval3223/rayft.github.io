import { Box, Flex, Image, Center } from '@chakra-ui/react';
import React from 'react';

import Logo from '../../Assets/logo/logo.png';

export interface Props {
  name: string;
}

export function FormsHeader(props: Props) {
  return (
    <Box w="100%" h="44px" bg="#183380">
      <Flex>
        <Box margin="12px 470.6px  0 80px" width="65.9px" height="23px">
          <Image src={Logo} />
        </Box>
        <Box
          margin="12px 470.6px  0 80px"
          width="65.9px"
          height="23px"
          color="#ffffff"
          textAlign="center"
          fontFamily="NunitoSans"
          font-size="16px"
          font-weight="800"
        >
          {props.name}
        </Box>
      </Flex>
    </Box>
  );
}
