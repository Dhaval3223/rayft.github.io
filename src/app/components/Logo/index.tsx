import React from 'react';
import { Image, Box } from '@chakra-ui/react';

import Logo from '../../Assets/logo/logo.png';

export function MainLogo() {
  return (
    <Box>
      <Image src={Logo} />
    </Box>
  );
}
