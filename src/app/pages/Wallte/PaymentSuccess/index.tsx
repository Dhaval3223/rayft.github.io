/**
 *
 * PaymentSuccess
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Stack, Text, Image, Box, Link } from '@chakra-ui/react';
import { PageButton } from '../../../components/PageButton/index';
import { Title } from '../../../components/Title/index';
import success from '../../../../img/success.png';

interface Props {}

export const PaymentSuccess = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <div className="row justify-content-center ">
        <div className="col-12 m-3 ">
          <Title title="Top-up successful!" />
        </div>
        <div className="col-sm-5 col-md-6 col-lg-6 col-xl-4  m-3 ">
          <Box
            boxShadow={{
              sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
            }}
            borderRadius="4px"
          >
            <Stack
              spacing={4}
              padding={{ sm: '1em', md: '3em' }}
              backgroundColor="whiteAlpha.900"
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
        </div>
      </div>
    </Div>
  );
});

const Div = styled.div``;
