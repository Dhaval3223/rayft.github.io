import React from 'react';
import {Badge} from '@chakra-ui/react';

const HomePageCardBadge = () =>
{
    return(
        <Badge 
          position="absolute"
          borderRadius="full" 
          px={["2","4"]}
          py="1" 
          bg="transparent"
          color="white"
          borderWidth="1px"
          bottom="4%"
          right="2%">
          $0.45
          </Badge>
    )
}

export default HomePageCardBadge;