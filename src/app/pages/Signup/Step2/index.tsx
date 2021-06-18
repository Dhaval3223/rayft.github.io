/**
 *
 * Step2
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Stack, Image, Box, Link, Input, Flex, Text } from '@chakra-ui/react';
import { PageButton } from '../../../components/PageButton/index';
import { Title } from '../../../components/Title/index';
import upload from '../../../../../src/upload.png';

interface Props {}

export const Step2 = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      <Flex
        flexDirection="column"
        width="100wh"
        height={['100vh']}
        justifyContent="center"
        alignItems="center"
        marginTop={['1em', '0em']}
      >
        <Stack>
          <Title title="Tell us more about yourself" />

          <Box
            boxShadow={{
              sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
            }}
            borderRadius="4px"
            pb="2em"
            width={['fit-content', '410px']}
            className="m-auto"
            p={['1em', '0em']}
          >
            <Stack
              spacing={4}
              padding={{ sm: '1em', md: '3em' }}
              className="pb-0"
              backgroundColor="whiteAlpha.900"
              justifyContent="center"
              alignItems="center"
            >
              <Input
                type="file"
                opacity="0"
                position="relative"
                top={['0']}
                w="8em"
                h="7em"
                borderRadius="50%"
              />

              <Image
                boxSize="120px"
                src={upload}
                alt="Segun Adebayo"
                position="absolute"
                top={['9em', '10em', '10em', '10em', '13em']}
              />  
              <Stack marginTop="3em">
                <Text opacity="0.3" fontSize="0.8em" color="#242a41">
                  <b>Bio</b>
                </Text>
                <Text fontSize="1em" color="#242a41" textAlign="justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut ipsum dolor sit
                </Text>
              </Stack>
            </Stack>
            <Stack m="2em">
              <PageButton
                label="Next"
                color="#20cdbb"
                fontcolor="white"
                size="10em"
                to="/Sign_up/Step_2"
              />
            </Stack>
          </Box>
        </Stack>
      </Flex>
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
});

const Div = styled.div``;
