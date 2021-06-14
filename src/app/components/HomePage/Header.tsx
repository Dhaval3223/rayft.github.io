import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Flex,Box,Text,Spacer,Stack} from '@chakra-ui/react';
import HeadingText from './HeadingText';
import HomePageCardText from './HomePageCardText';

export default function Header()
{ 
    return(
        <Container>
        <Stack>
      <Flex my="8" mb="2">
        <Box>
          <HeadingText label="Hi, Fannie" as='h4' size='md'/> 
        </Box>  
        <Spacer/>
        <Box>
          <HomePageCardText label="suggested by your personal interest" fontWeight="bold"/>
        </Box>
      </Flex>
      <Flex py="2">
        <Box>
          <HomePageCardText label="You are intrested to read…" fontWeight="bold"/>
        </Box>
      </Flex>   
      </Stack>
      </Container>
      )
}