/**
 *
 * Transactions
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { WalletCard } from '../../../components/WalletCard/index';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { PageButton } from '../../../components/PageButton/index';

interface Props {}

export const Transactions = memo((props: Props) => {
  return (
    <Div>
      <Stack bg="#f7f8fa" justifyContent="center" alignItems="center">
        <Stack bg="white" w="100%">
          <Box
            bg="white"
            minWidth={['100%', '100%', '95%', '65%', '45%']}
            mb={['2em']}
            p={4}
          >
            <div className="row pt-3 justify-content-center text-center text-sm-left">
              <div className=" col-8 col-sm-12  col-lg-10 col-xl-6 d-sm-flex d-block  align-items-center">
                <div className="col">
                  <div className="row ">
                    <div className="col-12">
                      <Text
                        ml={['0', '0', '1em', '2em']}
                        opacity="0.3"
                        fontSize="0.8em"
                      >
                        Your current balance
                      </Text>
                    </div>
                    <div className="col-12">
                      <Text ml={['0', '0', '0.3em', '1em']} fontSize="1.8em">
                        <b>$ 23.55</b>
                      </Text>{' '}
                    </div>
                  </div>
                </div>
                <div className="col-auto mr-sm-0 mr-md-0 mr-lg-4 mr-xl-4 ">
                  <PageButton
                    color="#20cdbb"
                    fontcolor="white"
                    label="Add money"
                    size="10em"
                  />
                </div>
              </div>
            </div>

            {/* <PageButton
               color="#20cdbb"
               fontcolor="white"
               label="Add money"
             /> */}
          </Box>
        </Stack>

        <WalletCard title="All transactions" />
        <WalletCard title="  " />
      </Stack>
    </Div>
  );
});

const Div = styled.div``;
