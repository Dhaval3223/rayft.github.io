/**
 *
 * LandingPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Stack, Box, Flex, Divider, Text, Image } from '@chakra-ui/react';
import { PageButton } from '../../components/PageButton/index';
import logo from '../../../img/logo.png';
import Line from '../../../OR.svg';

interface Props {}

export const LandingPage = memo((props: Props) => {
  return (
    <Div>
      <Flex
        flexDirection="column"
        width="100wh"
        height={['100vh']}
        justifyContent={['normal', 'center']}
        alignItems={['center']}
        bg={['#183380', ' #25439d']}
        padding="1.3em"
      >
        <Stack className="justify-content-center" mt="2em">
          <Image src={logo} width="10.5em" />
        </Stack>
        <Box
          boxShadow={{
            sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
          }}
          borderRadius="4px"
          bg="#183380"
          w={['100%', '410px']}
          mt="2em"
        >
          <Stack
            spacing={4}
            padding={{ sm: '1em', md: '3em' }}
            justifyContent="center"
            alignItems="center"
          >
            <Text
              color="white"
              textAlign="center"
              fontSize="1.4em"
              mt={['2.5em', '1em']}
            >
              <b>
                Quality research reports by top sector analysts one click away
              </b>
            </Text>
            <PageButton
              color="#20cdbb"
              fontcolor="white"
              label="Log In"
              size={['17em', '19em']}
            />

            <Stack direction={['row']} mt="5em">
              <Box
                w={['95px', '130px']}
                h="1px"
                bg="gray.400"
                className="mt-2"
              />
              <Text color="whiteAlpha.300"> OR </Text>
              <Box
                w={['95px', '130px']}
                h="1px"
                bg="gray.400"
                className="mt-2"
              />
            </Stack>

            <Text color="whiteAlpha.500" fontSize="0.9em" pb="0.5em">
              Don’t have an account yet?
            </Text>
            <PageButton
              color="#51a8d1"
              fontcolor="white"
              label="Log In"
              size={['17em', '19em']}
            />
          </Stack>
        </Box>
      </Flex>
    </Div>
  );
});

const Div = styled.div``;
