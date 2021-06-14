/**
 *
 * WalletTopUp
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Checkbox,
  WrapItem,
  Button,
} from '@chakra-ui/react';

interface Props {}

export function WalletTopUp(props: Props) {
  return (
    <>
      <Heading as="h2" fontSize="28px" textAlign="center" fontWeight="700">
        Top up your wallet
      </Heading>
      <Box
        backgroundColor="#fff"
        width="410px"
        height="341px"
        margin="40px 435px 131px"
        padding="35px 54px 35px 55px"
        borderRadius="4px"
        boxShadow="0 2px 5px 0 rgba(0, 0, 0, 0.2)"
        // fontFamily="NunitoSans"
        fontColor="#242a41"
      >
        <FormControl>
          <FormLabel fontSize="12px" opacity="0.3" fontWeight="bold">
            Amount you want to add in your wallet
          </FormLabel>
          <Input
            variant="flushed"
            placeholder="Enter an amount…"
            size="md"
            padding="0"
            font-size="16px"
          ></Input>
        </FormControl>
        <br />
        <FormControl>
          <FormLabel fontSize="12px" opacity="0.3" fontWeight="bold">
            Select payment method
          </FormLabel>
        </FormControl>

        <WrapItem>
          <Checkbox
            size="lg"
            borderRadius="100%"
            defaultIsChecked
            backgroundColor="#20cdbb"
          ></Checkbox>
          <Input variant="flushed"></Input>
        </WrapItem>
        <br />
        <WrapItem>
          <Checkbox size="lg" borderRadius="50%"></Checkbox>
          <Input variant="unstyled"></Input>
        </WrapItem>
        <Button
          backgroundColor="#20cdbb"
          px="12"
          width="full"
          mt={8}
          borderRadius="100px"
          colorScheme="#fff"
        >
          Proceed to pay
        </Button>
      </Box>
    </>
  );
}

const Div = styled.div``;

//top up 1
