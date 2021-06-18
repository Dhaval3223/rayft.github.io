import React from 'react';
import { Profile } from './Profile';
import { Image, Button, Heading, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import group from './group-7.png';
import styled from 'styled-components/macro';
import AuthorProfile from '../AuthorProfile/Loadable';

export function AuthorTrending()
{
    return(
        <>
            <Profile>
                <Image src={group}/>
                <ProfileContent>
                    <Heading size="lg" as="h3" pt={6}>Mildred Grant</Heading>
                    <Text opacity="50%" justifyContent="center" alignItems="center" p={2}>5.3k followers &bull; 43 followings </Text>
                </ProfileContent>
                <Button borderRadius={'full'} h='25px' colorScheme="teal" variant="outline">Follow</Button>
            </Profile>
            <ProfileContent>
            <Text mt={1}
                alignItems="center"
                justifyContent="center"
                display="flex"
                fontSize="xs"
                fontWeight="thin"
                opacity="65%"
                textAlign="center"
                maxW="660px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisi ut ali
            </Text>
            </ProfileContent>
            <Tabs p="4">
                <TabList color="teal" justifyContent="center" alignItems="center">
                    <Tab fontWeight="bold">Trending</Tab>
                    <Tab fontWeight="bold">Latests</Tab>
                    <Tab fontWeight="bold">Profile</Tab>
                    <Tab fontWeight="bold">Followers</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    
                    <TabPanel>
                    <AuthorProfile/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}
export const ProfileContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding:10px;
word-wrap: break-word;
`;
