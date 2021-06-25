/**
 *
 * Transactions
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { WalletCard } from '../../../components/WalletCard/index';
import { Box, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { PageButton } from '../../../components/PageButton/index';
import { Header } from '../../../components/Header/index';

interface Props {}

export const Transactions = memo((props: Props) => {
  return (
    <Div>
      <Header />
      <Stack bg="#f7f8fa" justifyContent="center" alignItems="center">
        <Stack bg="white" w="100vw">
          <Wrap p="1.5em" mt="1em">
            <WrapItem>
              <Box mt="1.3em">
                <Text
                  ml={['0', '0', '1em', '2em']}
                  opacity="0.3"
                  fontSize="0.8em"
                  textAlign="center"
                >
                  Your current balance
                </Text>
                <Text ml={['0', '0', '0.3em', '1em']} fontSize="1.8em">
                  <b>$ 23.55</b>
                </Text>{' '}
              </Box>

              <Box w="21em" d={['none', 'none', 'block']}></Box>
            </WrapItem>
            <WrapItem>
              <Box mt={['1em', '0em']}>
                <PageButton
                  color="#20cdbb"
                  fontcolor="white"
                  label="Add money"
                  size="10em"
                  to=""
                />
              </Box>
            </WrapItem>
          </Wrap>
        </Stack>

        <WalletCard title="All transactions" />
        <WalletCard title="  " />
      </Stack>
    </Div>
  );
});

const Div = styled.div``;
