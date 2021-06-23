import { Box, Flex, Image, Spacer, Center } from '@chakra-ui/react';
import React from 'react';

import Logo from '../../Assets/logo/logo.png';

export interface Props {
  name: string;
}

export function FormsHeader(props: Props) {
  return (
    <Flex h="44px" bg="#183380">
      <Box mt="12px" ml={['20px', '80px']}>
        <Image src={Logo} />
      </Box>
      <Box
        mt="11px"
        width="80%"
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
  );
}
