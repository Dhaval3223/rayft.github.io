/**
 *
 * Step2
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Stack, Box, Flex, Button, Grid, Text } from '@chakra-ui/react';
import { PageButton } from '../../../../components/PageButton/index';
import { Title } from '../../../../components/Title/index';
import { NavLink } from 'react-router-dom';

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
      <Flex
        flexDirection="column"
        width="100wh"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        marginTop={['1em', '0em']}
      >
        <Stack>
          <Title title="What topics are you interested in?" />

          <Box
            boxShadow={{
              sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
            }}
            width={['300px', '716px']}
            className="m-auto"
            borderRadius="4px"
            pb="2em"
          >
            <Stack
              spacing={4}
              padding={{ sm: '1em', md: '3em' }}
              className="pb-0"
              backgroundColor="whiteAlpha.900"
            >
              <Grid
                templateColumns={[
                  'repeat(2, 1fr)',
                  'repeat(3, 1fr)',
                  'repeat(4, 1fr)',
                ]}
                gap={4}
                justifyItems="center"
              >
                {btns.map(list => (
                  <Button
                    bg="white"
                    color="gray.300"
                    border=" 1px solid "
                    borderRadius="10em"
                    minW="5em"
                    _hover={{ background: 'white' }}
                  >
                    {list}
                  </Button>
                ))}
              </Grid>
              <Stack m="2em">
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
