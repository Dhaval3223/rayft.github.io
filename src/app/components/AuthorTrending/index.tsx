import React from 'react';
import { Profile } from './Profile';
import {
  Image,
  Button,
  Heading,
  Text,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import group from './group-7.png';
import styled from 'styled-components/macro';
import AuthorProfile from '../AuthorProfile/Loadable';
import { Header } from '../Header/index';

export function AuthorTrending() {
  return (
    <>
      <Profile>
        <Image src={group} px={2}/>
        <ProfileContent>
          <Heading size="lg" as="h4" pt={8} textAlign="center">
            Mildred Grant
          </Heading>
          <Text textAlign="center" opacity="50%" justifyContent="center" alignItems="center" px={2}>
            5.3k followers &bull; 43 followings{' '}
          </Text>
        </ProfileContent>
        <Button
          borderRadius={'full'}
          h="25px"
          colorScheme="teal"
          variant="outline"
          m={2}
        >
          Follow
        </Button>
      </Profile>
      <ProfileContent>
        <Text
          mt={1}
          mx={2}
          alignItems="center"
          justifyContent="center"
          display="flex"
          fontSize="xs"
          fontWeight="thin"
          opacity="65%"
          textAlign="center"
          maxW="660px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis exercitation ullamco laboris nisi ut ali
        </Text>
      </ProfileContent>
      <Tabs p={4}>
        <TabList color="teal" justifyContent="center" alignItems="center">
          <Tab fontWeight="bold" p={['1','4']}>Trending</Tab>
          <Tab fontWeight="bold" p={['1','4']}>Latests</Tab>
          <Tab fontWeight="bold" p={['1','4']}>Profile</Tab>
          <Tab fontWeight="bold" p={['1','4']}>Followers</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>

          <TabPanel>
            <p>two!</p>
          </TabPanel>

          <TabPanel>
            <AuthorProfile />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  word-wrap: break-word;
`;
