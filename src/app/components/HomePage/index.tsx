import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Flex, Box, Text, Spacer } from '@chakra-ui/react';
import rectangle from './rectangle.png';
import HomePageCardBadge from './HomePageCardBadge';
import HomePageCardBookmark from './HomePageCardBookmark';
import HomePageCardMore from './HomePageCardMore';
import HomePageCardCaption from './HomePageCardCaption';
import HomePageCardImage from './HomePageCardImage';
import HomePageCardText from './HomePageCardText';
import Header from './Header';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md="6">
            <Flex
              direction="column"
              rounded={'md'}
              boxShadow={'md'}
              onClick={() => alert('hello')}
              cursor="pointer"
              bg="white"
              m="1em"
            >
              <Box
                position={'relative'}
                overflow={'hidden'}
                mx={['0.3rem', '0.5rem']}
                my={['0.3rem', '0.5rem']}
              >
                <HomePageCardBookmark />
                <HomePageCardMore />
                <HomePageCardBadge />

                <HomePageCardImage minH="200px" minW="300px" src={rectangle} />
              </Box>
              <Box p={2}>
                <HomePageCardCaption
                  as="h5"
                  size="md"
                  label="These tips could help you get more financial aid for college"
                />
              </Box>
              <Flex px={2} pb={0}>
                <HomePageCardText label="Floyd West" fontWeight="bold" />
                <Spacer />
                <HomePageCardText
                  label="23 Mar &bull; 4 min read"
                  fontWeight="bold"
                />
              </Flex>
            </Flex>
          </Col>
          <Col md="6">
            <Flex
              direction="column"
              rounded={'md'}
              boxShadow={'md'}
              bg="white"
              m="1em"
            >
              <Box
                position={'relative'}
                overflow={'hidden'}
                mx={['0.3rem', '0.5rem']}
                my={['0.3rem', '0.5rem']}
              >
                <HomePageCardBookmark />
                <HomePageCardMore />
                <HomePageCardBadge />

                <HomePageCardImage minH="200px" minW="300px" src={rectangle} />
              </Box>
              <Box p={2}>
                <HomePageCardCaption
                  as="h5"
                  size="md"
                  label="These tips could help you get more financial aid for college"
                />
              </Box>
              <Flex px={2} pb={0}>
                <HomePageCardText label="Floyd West" fontWeight="bold" />
                <Spacer />
                <HomePageCardText
                  label="23 Mar &bull; 4 min read"
                  fontWeight="bold"
                />
              </Flex>
            </Flex>
          </Col>
          <Col md="4">
            <Flex
              direction="column"
              rounded={'md'}
              boxShadow={'md'}
              bg="white"
              m="1em"
            >
              <Box
                position={'relative'}
                overflow={'hidden'}
                mx={['0.3rem', '0.5rem']}
                my={['0.3rem', '0.5rem']}
              >
                <HomePageCardBookmark />
                <HomePageCardMore />
                <HomePageCardBadge />

                <HomePageCardImage minH="200px" minW="300px" src={rectangle} />
              </Box>
              <Box p={2}>
                <HomePageCardCaption
                  as="h5"
                  size="md"
                  label="These tips could help you get more financial aid for college"
                />
              </Box>
              <Flex px={2} pb={0}>
                <HomePageCardText label="Floyd West" fontWeight="bold" />
                <Spacer />
                <HomePageCardText
                  label="23 Mar &bull; 4 min read"
                  fontWeight="bold"
                />
              </Flex>
            </Flex>
          </Col>
        </Row>
      </Container>
    </>
  );
}
