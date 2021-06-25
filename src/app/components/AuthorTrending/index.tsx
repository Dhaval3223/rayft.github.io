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
      <Header />
      <Stack bg="white">
        <Profile>
          <SimpleGrid columns={[1, 2]} spacing={[0, 5]}>
            <Image
              src={group}
              mt={['3.5em', '5.5em']}
              justifySelf={['center', 'right']}
            />
            <Stack mt={['0em', '3em']}>
              <ProfileContent>
                <Heading size="lg" as="h3" pt={[1, 6]}>
                  Mildred Grant
                </Heading>
                <Text
                  opacity="50%"
                  justifyContent="center"
                  alignItems="center"
                  pt={2}
                >
                  5.3k followers &bull; 43 followings{' '}
                </Text>
              </ProfileContent>
              <Button
                borderRadius={'full'}
                h="25px"
                colorScheme="teal"
                variant="outline"
              >
                Follow
              </Button>
            </Stack>
          </SimpleGrid>
        </Profile>

        <ProfileContent>
          <Text
            mt={1}
            alignItems="center"
            justifyContent="center"
            display="flex"
            fontSize="13px"
            fontWeight="thin"
            opacity="65%"
            textAlign="center"
            maxW="660px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis exercitation ullamco laboris nisi ut ali
          </Text>
        </ProfileContent>
      </Stack>
      <Tabs bg="white">
        <TabList color="teal" justifyContent="center" alignItems="center">
          <Tab fontWeight="bold" pl={['5px', '20px']}>
            Trending
          </Tab>
          <Tab fontWeight="bold" pl={['5px', '20px']}>
            Latests
          </Tab>
          <Tab fontWeight="bold" pl={['5px', '20px']}>
            Profile
          </Tab>
          <Tab fontWeight="bold" pl={['5px', '20px']}>
            Followers
          </Tab>
        </TabList>

        <TabPanels bg="#f7f8fa">
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
  padding: 10px;
  word-wrap: break-word;
`;
