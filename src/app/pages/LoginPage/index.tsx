/**
 *
 * LoginPage
 *
 */
import React, { memo } from 'react';
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
} from '@chakra-ui/react';
import { PageButton } from '../../components/PageButton/index';
import { Title } from '../../components/Title/index';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {}

export const LoginPage = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Div>
      {t('')}

      <div className="row justify-content-center ">
        <div className="col-sm-5 col-md-6 col-lg-4  m-3 ">
          <Title title="Let’s get started" />

          <Box
            boxShadow={{
              sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
            }}
            borderRadius="4px"
          >
            <Stack
              spacing={4}
              padding={{ sm: '1em', lg: '2em' }}
              backgroundColor="whiteAlpha.900"
            >
              <InputFiled text="text" label="Email or Username" />
              <FormControl>
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
              <PageButton label="Login in" color="#20cdbb" fontcolor="white" />
              <Link textAlign="center" color="#51a8d1" p="1em 0em 0.8em 0em">
                Forgot password?
              </Link>
            </Stack>
          </Box>
        </div>
      </div>

      <Stack m="1em 0em 0em 0em">
        <Text color="gray.300" className="text-center">
          Don’t have an account yet?{' '}
          <Link color="#51a8d1" fontWeight="700">
            Sign Up
          </Link>
        </Text>
      </Stack>

      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
});

const Div = styled.div``;
