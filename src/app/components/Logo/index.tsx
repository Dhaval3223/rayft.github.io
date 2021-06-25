import { Image, Box } from '@chakra-ui/react';
import React from 'react';

import Logo from '../../Assets/logo/logo.png';

export function MainLogo() {
  return (
    <Box>
      <img src={Logo} />
    </Box>
  );
}
