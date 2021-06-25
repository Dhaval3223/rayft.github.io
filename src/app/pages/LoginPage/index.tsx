/**
 *
 * LoginPage
 *
 */
import { NavLink } from 'react-router-dom';
import React, { useState, memo, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { InputFiled } from '../../components/InputFiled/index';
import { useHistory } from 'react-router-dom';
import {useToast} from '@chakra-ui/react';

import {
  Button,
  Stack,
  Text,
  InputRightElement,
  Box,
  Link,
  FormControl,
  Flex,
} from '@chakra-ui/react';
import { Title } from '../../components/Title/index';
import { FormsHeader } from '../../components/FormsHeader/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import {
  validateEmailAddress,
  Password,
  initialState,
  useLoginSlice,
} from './slice/index';
// import { pushd } from 'shelljs';

interface Props {
  id: number;
  user_name: string;
  body: string;
  title: string;
}

export const LoginPage = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toast = useToast();
  const { t, i18n } = useTranslation();
  const { push } = useHistory();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = React.useState('');
  const [psswrd, setPasswrd] = React.useState('');
  const [data, setData] = React.useState<any[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .post(
        'https://private-16b8d3-rayftnew.apiary-mock.com/login',
        {
          user: {
            email: email,
            password: psswrd,
          },
        },
        {
          withCredentials: true,
        },
      )
      .then(response => {
        console.log(response);
        // const result = JSON.parse(response.data);
        setData(response.data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const { errors } = useSelector(
    (state: RootState) => state?.login || initialState,
  );
  const { actions } = useLoginSlice();
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(actions.validateEmailAddress(email));
    dispatch(actions.Password(psswrd));
    // push('/homepage')
  };

  const onChngEmail = event => {
    console.log(event.target.value);
    event.preventDefault();
    dispatch(actions.validateEmailAddress(email));
    setEmail(event.target.value);
  };

  const onChngPsswrd = event => {
    console.log(event.target.value);
    event.preventDefault();
    dispatch(actions.Password(psswrd));
    setPasswrd(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !psswrd) {
      dispatch(actions.validateForm());
    } else {
      if (email === 'abc@gmail.com' && psswrd === 'Abc@123abc') {
        dispatch(
          actions.login({
            email: email,
            password: psswrd,
          }),
        );
        toast({
          position:"top-right",
          title: "Login Successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
        })
        history.push('/homepage');
      }
      else
      {
        toast({
          position:"top-right",
          title: "Wrong email or password",
          status: "error",
          duration: 4000,
          isClosable: true,
        })
      }
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <FormsHeader name="Log-in" />
      <div>
        {t('')}
        <Flex
          flexDirection="column"
          width="100wh"
          height={['95vh']}
          justifyContent="center"
          alignItems="center"
          // bg={["white","#f7f8fa"]}
          // marginTop={{sm:'3em',md:'0',lg:'0'}}
        >
          <Stack>
            <Title title="Let’s get started" />

            <Box
              boxShadow={{
                sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
              }}
              borderRadius="4px"
              width={['300px', '410px']}
              m="auto"
            >
              <Stack
                spacing={4}
                padding={{ sm: '1em', lg: '2em' }}
                backgroundColor="whiteAlpha.900"
              >
                <FormControl className="mb-5">
                  <InputFiled
                    text="text"
                    label="Email or Username"
                    value={email}
                    onchng={onChngEmail}
                  />
                  <Text color="red">{errors.email}</Text>
                </FormControl>

                <FormControl className="mb-5">
                  <InputFiled
                    text={show ? 'text' : 'password'}
                    label="PassWord"
                    value={psswrd}
                    onchng={onChngPsswrd}
                  />
                  <Text color="red">{errors.password}</Text>
                  <InputRightElement height="6em">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                      p="1.5em"
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </FormControl>
                <Button
                  my="4"
                  bg="#20cdbb"
                  p="1.5em"
                  color="white"
                  borderRadius="22.5px"
                  minW="20em"
                  fontWeight="700"
                  fontSize="1em"
                  letterSpacing="1px"
                  type="submit"
                >
                  Log in
                </Button>
                <Link textAlign="center" color="#51a8d1" p="1em 0em 0.8em 0em">
                  Forgot password?
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Flex>

        <Stack mt={['2em', '0em']} textAlign="center">
          <Text color="gray.300">
            Don’t have an account yet?{' '}
            <Link color="#51a8d1" fontWeight="700">
              <NavLink to="/Sign_up/Step_1">Sign Up</NavLink>
            </Link>
          </Text>
        </Stack>
      </div>
    </form>
  );
});

const Div = styled.div``;
