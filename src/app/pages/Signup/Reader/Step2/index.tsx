/**
 *
 * Step2
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Stack, Box, Flex, Button, SimpleGrid, Text } from '@chakra-ui/react';
import { PageButton } from '../../../../components/PageButton/index';
import { Title } from '../../../../components/Title/index';
import { NavLink } from 'react-router-dom';
import { FormsHeader } from '../../../../components/FormsHeader/index';

interface Props {}

export const Step_2 = memo((props: Props) => {
  let btns: string[] = [
    'Business',
    'Financal market',
    'Market analysis',
    'Interviews',
    'Economy',
    'Polity and market ',
    'Business',
    'Financal market',
    'Market analysis',
    'Interviews',
    'Bloomberg',
    'Stocks & coins',
    'IPO',
  ];
  return (
    <Div>
      <FormsHeader name="Sign Up" />
      <Flex
        flexDirection="column"
        width="100wh"
        minH="100vh"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
      >
        <Stack m="1em" mb="5em">
          <Title title="What topics are you interested in?" />

          <Box
            boxShadow={{
              sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
            }}
            width={['fit-content', '550px', '716px']}
            margin="auto"
            borderRadius="4px"
          >
            <Stack
              spacing={4}
              padding={{ sm: '1em', md: '3em' }}
              className="pb-0"
              backgroundColor="whiteAlpha.900"
              margin="auto"
            >
              <SimpleGrid columns={[2, 3]} spacing={5} justifyContent="center">
                {btns.map(list => (
                  <Button
                    bg="white"
                    color="gray.300"
                    border=" 1px solid "
                    borderRadius="10em"
                    minW="fit-content"
                    _hover={{ background: 'white' }}
                  >
                    {list}
                  </Button>
                ))}
              </SimpleGrid>
              <Stack m="2em" pb="2em">
                <PageButton
                  label="Next"
                  color="#20cdbb"
                  fontcolor="white"
                  size="10em"
                  to="/Sign_up/Step_3"
                />
              </Stack>
            </Stack>
          </Box>
          <Text color="gray.300" textAlign="center">
            <NavLink to="/homepage">Skip this step</NavLink>
          </Text>
        </Stack>
      </Flex>
    </Div>
  );
});

const Div = styled.div``;
