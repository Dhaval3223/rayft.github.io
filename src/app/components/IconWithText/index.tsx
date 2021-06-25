import * as React from 'react';
import { Box, Icon, Text, Flex, Center, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export interface Props {
  name?: any;
  iconName?: any;
}

export const IconWithText: React.FC<Props> = ({ name, iconName, ...rest }) => {
  return (
    <Flex mt="13px">
      <Icon as={iconName} h="28px" w="28px" color="white" />
      <Box
        h="40px"
        w="100%"
        ml="12px"
        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      >
        {name}
      </Box>
      <ChevronRightIcon />
    </Flex>
  );
};
