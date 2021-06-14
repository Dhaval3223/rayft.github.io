/**
 *
 * WalletCardDetails
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  WrapItem,
  Button,
} from '@chakra-ui/react';

interface Props {}

export function WalletCardDetails(props: Props) {
  const {} = props;
  return (
    <>
      <Heading as="h2" fontSize="28px" textAlign="center" fontWeight="700">
        Enter Your Card Details
      </Heading>
      <Box
        backgroundColor="#fff"
        width="410px"
        height="369px"
        margin="40px 435px 103px"
        padding="35px 55px"
        borderRadius="4px"
        boxShadow="0 2px 5px 0 rgba(0, 0, 0, 0.2)"
        fontColor="#242a41"
        // fontFamily="NunitoSans"
      >
        <FormControl>
          <FormLabel fontSize="12px" opacity="0.3" fontWeight="bold">
            Card number
          </FormLabel>
          <Input
            placeholder="Enter 16 digit card number"
            size="md"
            variant="flushed"
            padding="0"
            font-size="16px"
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel fontSize="12px" opacity="0.3" fontWeight="bold">
            Name on card
          </FormLabel>
          <Input
            placeholder="Enter name"
            size="md"
            variant="flushed"
            padding="0"
            font-size="16px"
          ></Input>
        </FormControl>
        <br />
        <WrapItem>
          <FormControl>
            <FormLabel fontSize="12px" opacity="0.3" fontWeight="bold">
              Expiration date
            </FormLabel>
            <Input
              placeholder="MM/YYYY"
              size="md"
              variant="flushed"
              padding="0"
              width="90%"
              font-size="16px"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel fontSize="12px" opacity="0.3" fontWeight="bold">
              CVV
            </FormLabel>
            <Input
              placeholder="Enter CVV number"
              size="md"
              variant="flushed"
              padding="0"
              font-size="16px"
            ></Input>
          </FormControl>
        </WrapItem>
        <Button
          backgroundColor="#20cdbb"
          px="12"
          width="full"
          mt={8}
          borderRadius="100px"
          colorScheme="#fff"
        >
          Pay securely
        </Button>
      </Box>
    </>
  );
}

const Div = styled.div``;
