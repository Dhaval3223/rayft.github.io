/**
 *
 * LoginPage
 *
 */
import { NavLink } from 'react-router-dom';
import React, { useState, memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { InputFiled } from '../../components/InputFiled/index';
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
import { PageButton } from '../../components/PageButton/index';
import { Title } from '../../components/Title/index';
import { FormsHeader } from '../../components/FormsHeader/index';
//import {selectLogin} from '../../pages/LoginPage/slice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types';

import { useHistory } from 'react-router-dom';
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
  const { t, i18n } = useTranslation();
  const { push } = useHistory();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = React.useState('');
  const [posts, setPosts] = useState<Props[]>([]);
  const [psswrd, setPasswrd] = React.useState('');

  // React.useEffect(() => {
  //   axios
  //     .get('https://private-7957dd-rayft2.apiary-mock.com/users')
  //     .then(res => {
  //       // let arr = JSON.stringify(res);
  //       console.log(res.data[21]);
  //       alert(res);
  //       setPosts(res.data);
  //       console.log(posts);
  //     });
  // }, []);

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
    setEmail(event.target.value);
  };
  const onChngPsswrd = event => {
    console.log(event.target.value);
    event.preventDefault();
    setPasswrd(event.target.value);
  };
  return (
    <>
      {/* <form onSubmit={submit}>
        <label>{errors.email}</label>
        <input type="email" value={email} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form> */}
      <FormsHeader name="Log-in" />
      <Div>
        {t('')}
        {/* <ul>{posts.map(post => (<li >{post.user_name}</li>))}</ul> */}
        <Flex
          flexDirection="column"
          width="100wh"
          height={['30vh', '85vh']}
          justifyContent="center"
          alignItems="center"
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
                <FormControl className="mb-5" isRequired>
                  <InputFiled
                    text="text"
                    label="Email or Username"
                    value={email}
                    onchng={onChngEmail}
                  />
                  <Text color="red">{errors.email}</Text>
                </FormControl>

                <FormControl className="mb-5" isRequired>
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
                <PageButton
                  to={submit}
                  label="Log in"
                  color="#20cdbb"
                  fontcolor="white"
                  size="10em"
                />
                <Link textAlign="center" color="#51a8d1" p="1em 0em 0.8em 0em">
                  Forgot password?
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Flex>

        <Stack mt="1em" textAlign="center">
          <Text color="gray.300">
            Don’t have an account yet?{' '}
            <Link color="#51a8d1" fontWeight="700">
              <NavLink to="/Sign_up/Step_1">Sign Up</NavLink>
            </Link>
          </Text>
        </Stack>

        {/*  {t(...messages.someThing())}  */}
      </Div>
    </>
  );
});

const Div = styled.div``;
