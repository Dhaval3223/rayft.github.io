/**
 *
 * LoginPage
 *
 */
 import {NavLink} from 'react-router-dom';
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
import {FormsHeader} from '../../components/FormsHeader/index';
//import {selectLogin} from '../../pages/LoginPage/slice/selectors';
import {useDispatch,useSelector} from "react-redux";
import {RootState} from "../../../types";
import {validateEmailAddress,initialState,useLoginSlice} from './slice/index';

interface Props {
  id: number;
  user_name: string;
  body: string;
  title: string;
}

export const LoginPage = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [posts, setPosts] = useState<Props[]>([]);
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

  const { errors } = useSelector((state: RootState) => state?.login || initialState);
  const {actions} = useLoginSlice();
  const dispatch = useDispatch();
  const handleChange = (event) =>
  {
    event.preventDefault();
    dispatch(actions.validateEmailAddress(event.target.value));
  }
  return (
    <>
    <form onSubmit={handleChange}></form>
    <label>{errors.email}</label>
    <input type="email" onChange={handleChange}/>
    <button type="submit">Submit</button>
    <FormsHeader name="Log-in"/>
    <Div>
      {t('')}
      {/* <ul>{posts.map(post => (<li >{post.user_name}</li>))}</ul> */}
      <Flex
        flexDirection="column"
        width="100wh"
        
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
              <InputFiled text="text" label="Email or Username" />
              <FormControl className="mb-5">
                <InputFiled
                  text={show ? 'text' : 'password'}
                  label="PassWord"
                />
                <InputRightElement height="6em">
                  <Button h="1.75rem" size="sm" onClick={handleClick} p="1.5em">
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </FormControl>
              <PageButton
                to="/loginpage"
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
              <NavLink to="/Sign_up/Step_1">
              Sign Up
              </NavLink>
            </Link>
          </Text>
        </Stack>

      {/*  {t(...messages.someThing())}  */}
    </Div>
    </>
  );
});

const Div = styled.div``;
