/**
 *
 * Login
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';

import {
  Flex,
  Box,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { useLoginpageSlice } from './slice';
// import { selectUsername } from './slice/selectors';

interface Props {}

const VARIANT_COLOR = '#20cdbb';

export const LoginArea = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box p={4}>
          <Login />
        </Box>
      </Box>
    </Flex>
  );
};

export const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => setShow(!show);

  return (
    <Div>
      <Box my={8} textAlign="center">
        <form>
          <FormControl>
            <FormLabel>Email or Username</FormLabel>
            <Input
              type="email"
              variant="flushed"
              placeholder="Enter your email address"
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                variant="flushed"
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            colorScheme="teal"
            px="12"
            width="full"
            mt={8}
            borderRadius="100px"
          >
            Log In
          </Button>

          <Box mt={4}>
            <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
          </Box>
        </form>
      </Box>
    </Div>
  );
};

const Div = styled.div``;
