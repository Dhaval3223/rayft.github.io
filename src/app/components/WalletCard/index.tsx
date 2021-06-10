/**
 *
 * WalletCard
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Box, Image, Badge, Stack, Text, Flex } from '@chakra-ui/react';

interface Props {
  title: string;
}

export const WalletCard = memo((props: Props) => {
  const { title } = props;
  return (
    <Div>
      <Stack pl={['1.9em']} pt={['0em', '1em']} >
        <Text color="#242a41" opacity="0.3">
          <b>{title}</b>
        </Text>
        <Text color="#242a41" opacity="0.3" pb={5}>
          Sep 2018
        </Text>
      </Stack>

      <Box bg="white" minWidth={['100%', '50%']} p={4} m={['0', '3']} >
        <div className="row pt-3">
          <div className="col">
            <Text textAlign="left" color="#242a41" >
              <b> Credited to wallet</b>
            </Text>
          </div>
          <div className="col-auto">
            <Text textAlign="right"  color='#20cdbb'><b> + $ 20.00</b></Text>
          </div>
        </div>
        <Text pt="0.5em" pb="1em">
          17 Sep.11:39 PM
        </Text>
        <Stack borderBottom="1px solid" opacity="0.05" />

        <div className="row pt-3">
          <div className="col">
            <Text textAlign="left" color="#242a41">
              <b>For reading an article </b>- These tips could help you get more
              financial aid for college
            </Text>
          </div>
          <div className="col-auto">
            <Text textAlign="right">- $ 0.45</Text>
          </div>
        </div>
        <Text pt="0.5em" pb="1em">
          12 Sep.11:39 PM
        </Text>
        <Stack borderBottom="1px solid" opacity="0.05" />

        <div className="row pt-3">
          <div className="col">
            <Text textAlign="left" color="#242a41">
              <b>For reading an article </b>- 10 tough practice questions and
              great sample responses
            </Text>
          </div>
          <div className="col-auto">
            <Text textAlign="right">- $ 0.39</Text>
          </div>
        </div>
        <Text pt="0.5em" pb="1em">
          12 Sep.11:39 PM
        </Text>
      </Box>
    </Div>
  );
});

const Div = styled.div``;
