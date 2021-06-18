/**
 *
 * Step1
 *
 */
import {NavLink} from 'react-router-dom';
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { InputFiled } from '../../../components/InputFiled/index';
import {
  Flex,
  Radio,
  Button,
  Stack,
  Text,
  InputRightElement,
  Box,
  Link,
  FormControl,
  InputGroup,
} from '@chakra-ui/react';
import { PageButton } from '../../../components/PageButton/index';
import { Title } from '../../../components/Title/index';

interface Props {}

export const Step1 = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Flex
        flexDirection="column"
        width="100wh"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        marginTop={['1em', '0em']}
      >
        <Title title="Create an account" />

        <Box
          boxShadow={{
            sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
          }}
          borderRadius="4px"
          marginTop="2em"
          width={['fit-content', '410px']}
          className="m-auto"
          p={["1em","0em"]}
        >
          <Stack
            spacing={4}
            padding={{ sm: '1em', md: '3em' }}
            backgroundColor="whiteAlpha.900"
          >
            <Flex>
              <InputGroup mr="2em">
                <InputFiled text="text" label="First name" />
              </InputGroup>
              <InputGroup>
                <InputFiled text="text" label="Last name" />
              </InputGroup>
            </Flex>

            <InputFiled text="text" label="Email or Username" />
            <FormControl className="mb-5">
              <InputFiled text={show ? 'text' : 'password'} label="Password" />
              <InputRightElement height="6em">
                <Button h="1.75rem" size="sm" onClick={handleClick} p="1.5em">
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
              <Text
                fontSize="xs"
                color="gray.300"
                mt="2em"
                fontFamily="sans-serif"
                fontWeight="bold"
              >
                Whats your purpose here?
              </Text>
              <Flex marginTop="2em">
                <Radio
                  size="lg"
                  name="1"
                  colorScheme="blue"
                  pr={["1em","2em"]}
                  defaultChecked
                >
                  Reading
                </Radio>

                <Radio size="lg" name="1" colorScheme="blue" pr={["1em","2em"]}>
                  Writing reports
                </Radio>
              </Flex>
            </FormControl>
            <PageButton
              label="Next"
              color="#20cdbb"
              fontcolor="white"
              size="10em"
              to="/Sign_up/Step_1"
            />
          </Stack>
        </Box>

        <Stack mt="1em" textAlign="center">
          <Text color="gray.300">
            Already have an account?{' '}
            <Link color="#51a8d1" fontWeight="700">
              <NavLink to="/loginpage">
              Log In
              </NavLink>
            </Link>
          </Text>
        </Stack>
      </Flex>
    </Div>
  );
});

const Div = styled.div``;
