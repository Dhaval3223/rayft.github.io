/**
 *
 * Step1
 *
 */
 import {NavLink} from 'react-router-dom';
 import React, { memo } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { RootState } from '../../../../types/index';
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
   Input,
   VStack
 } from '@chakra-ui/react';
 import { PageButton } from '../../../components/PageButton/index';
 import { Title } from '../../../components/Title/index';
 import {
  initialState,
  useSingupSlice,
} from './slice/index';
import { FormsHeader } from '../../../components/FormsHeader/index';

 interface Props {}
 
 export const Step1 = memo((props: Props) => {
  const { errors } = useSelector(
    (state: RootState) => state?.singup || initialState,
  );
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const { t, i18n } = useTranslation();
   const [show, setShow] = React.useState(false);
   const handleClick = () => setShow(!show);
   const [email, setEmail] = React.useState('');
   const [pass, setPass] = React.useState('');
   const [firstName, setFirstName] = React.useState('');
   const [lastName, setLastName] = React.useState('');
 
   const { actions } = useSingupSlice();
   const dispatch = useDispatch();

   const onChngEmail = event => {
    event.preventDefault();
    const newVal = event.target.value;
    setEmail(newVal);
    dispatch(actions.validateEmailAddress(email));
  };
  const onChngPsswrd = event => {
    event.preventDefault();
    setPass(event.target.value);
    dispatch(actions.Password(pass));
  };
   const onChnageFirstName = event => {
    event.preventDefault();
    setFirstName(event.target.value);
    dispatch(actions.FirstName(firstName));
   }
   const onChnageLastName = event => {
    event.preventDefault();
    setLastName(event.target.value);
    dispatch(actions.LastName(lastName));
   }
   const handleSubmit = () =>{
    dispatch(actions.validateForm());
   }
   return (
     <>
     <FormsHeader name="Sign up"/>
     <Div>
       {t('')}

       <Flex
        flexDirection="column"
        width="100wh"
        minH="100vh"
        overflow="hidden"
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
             spacing={2}
             padding={{ sm: '1em', md: '3em' }}
             backgroundColor="whiteAlpha.900"
           >
             <form>
             <Flex>
               <InputGroup mr="2rem">
                 <VStack display="block">
               <Text fontSize="xs" color="gray.300" mt="2em" fontFamily="sans-serif" fontWeight="bold">FirstName</Text>
              <Input
                variant="flushed"
                type="text"
                size="md"
                isRequired
                onChange={onChnageFirstName}
                />
                <Text color="red">{errors.firstname}</Text>
                </VStack>
               </InputGroup>
               <InputGroup>
               <VStack display="block">
               <Text fontSize="xs" color="gray.300" mt="2em" fontFamily="sans-serif" fontWeight="bold">LastName</Text>
              <Input
                variant="flushed"
                type="text"
                size="md"
                isRequired
                onChange={onChnageLastName}
                />
                <Text color="red">{errors.firstname}</Text>
                </VStack>
               </InputGroup>
             </Flex>
 
             <InputFiled text="text" label="Email or Username" onchng={onChngEmail} value={email}/>
             <Text color="red">{errors.email}</Text>
             <FormControl className="mb-5">
               <InputFiled text={show ? 'text' : 'password'} label="Password" onchng={onChngPsswrd } value={pass}/>
               <Text color="red">{errors.password}</Text>
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
              onClick={handleSubmit}
              type="submit"
              >
              Next
              </Button>
            </form>
           </Stack>
         </Box>
 
         <Stack mt="1em" textAlign="center">
           <Text color="gray.300">
             Already have an account?{' '}
               <NavLink to="/loginpage" color="#51a8d1">
               Log In
               </NavLink>
           </Text>
         </Stack>
       </Flex>
     </Div>
     </>
   );
 });
 
 const Div = styled.div``;
 
