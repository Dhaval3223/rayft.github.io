/**
 *
 * PaymentSuccess
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Stack, Text, Image, Box, Link, Flex } from '@chakra-ui/react';
import { PageButton } from '../../../components/PageButton/index';
import { Title } from '../../../components/Title/index';
import success from '../../../../img/success.png';
import { Header } from '../../../components/Header/index';

interface Props {}

export const PaymentSuccess = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      <Header />
      <Flex
        flexDirection="column"
        width="100wh"
        minH="100vh"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        backgroundColor={['#f7f8fa']}
      >
        <Box bg="white" mt="2.5em" w="100vw" p="0.8em" textAlign="center">
          {' '}
          <Text fontSize="12px" opacity="0.3">
            You tried to pay $ 20.55 using your card.
          </Text>
        </Box>
        <Stack mb="5em">
          <Title title="Top-up successful!" />

          <Box
            boxShadow={{
              sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
            }}
            borderRadius="4px"
            p="1em"
          >
            <Stack
              spacing={4}
              padding={{ sm: '1em', md: '3em' }}
              backgroundColor={['#f7f8fa', 'whiteAlpha.900']}
              textAlign="center"
            >
              <Stack alignItems="center">
                <Image boxSize="120px" src={success} />
              </Stack>
              <Text fontSize="5xl" color="#242a41">
                <b>$ 20.55</b>
              </Text>
              <Text
                fontSize="md"
                color="#242a41"
                fontFamily="cursive"
                lineHeight="1.44"
              >
                Thank you! You have successfully topup your wallet.
              </Text>

              <PageButton
                label="Go to wallet"
                color="#20cdbb"
                fontcolor="white"
                size="10em"
                to=""
              />
              <Link fontSize="1em" color="#20cdbb ">
                <b>Start reading</b>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Div>
  );
});

const Div = styled.div``;
