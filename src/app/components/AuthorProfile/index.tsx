import React from 'react';
import ProfileTitle from './ProfileTitle';
import ProfileHeader from './ProfileHeader';
import ProfileButton from './ProfileButton';
import {Stack,Box,Flex,SimpleGrid,Divider} from '@chakra-ui/react';

export function AuthorProfile()
{
    return(
        <Stack m={['0.6em', '1em']}>
        <Box w={['fit-content', 'fit-content', 'fit-content','40em']} m="auto">
          <Flex>
            <Box>
              <ProfileTitle color="gray.500" label="PROFILE TITLE" />
            </Box>
          </Flex>
          <Flex>
            <Box py="4">
              <ProfileHeader label="About an author" as="h5" size="sm" />
            </Box>
          </Flex>
  
          <SimpleGrid columns={[1, 2]} spacing={1}>
            <Stack>
              <ProfileTitle color="gray.500" label="Bio" />
            </Stack>
            <Stack textAlign="justify">
              <ProfileTitle
                color="gray.500"
                label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. nostrud exercitation ullamco laboris nisi ut ipsum dolor sit"
              />
            </Stack>
          </SimpleGrid>
  
          <Flex>
            <Box py="4">
              <ProfileHeader
                label="Auhtor likes to write about"
                as="h5"
                size="sm"
              />
            </Box>
          </Flex>
  
          <SimpleGrid columns={[1, 2]} spacing={[5, 0]}>
            <ProfileTitle color="gray.500" label="Area of expertise" />
  
            <Box>
              <ProfileButton variant="outline" label="Business" />
              <ProfileButton variant="outline" label="Financal market" />
            </Box>
          </SimpleGrid>
  
          <Flex>
            <Box py="4">
              <ProfileHeader label="Author experience" as="h5" size="sm" />
            </Box>
          </Flex>
          <SimpleGrid columns={[1, 2]} spacing={5} mb="2em">
            <ProfileTitle color="gray.500" label="Work experience" />
  
            <Box>
              <ProfileTitle color="gray.500" label="Manager at IBM" />
              <Divider />
              <ProfileTitle
                color="gray.500"
                label="Market analyst in Bloomberg"
              />
            </Box>
          </SimpleGrid>
  
          <SimpleGrid columns={[1, 2]} spacing={5}>
            <ProfileTitle color="gray.500" label="Education" />
  
            <Box>
              <ProfileTitle
                color="gray.500"
                label="MBA form california university"
              />
              <Divider />
              <ProfileTitle color="gray.500" label="BBA from UGCA college" />
            </Box>
          </SimpleGrid>
        </Box>
      </Stack>
  
        /* <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
        >
            <GridItem rowSpan={1} colSpan={1}></GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <ProfileTitle color="gray.500" label="PROFILE TITLE"/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}></GridItem>

            <GridItem rowSpan={1} colSpan={1}></GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <ProfileHeader label="About an author" as="h5" size="sm"/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}></GridItem>

            <GridItem rowSpan={1} colSpan={1}></GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <ProfileTitle color="gray.500" label="Bio"/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
                <ProfileTitle color="gray.500" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. nostrud exercitation ullamco laboris nisi ut ipsum dolor sit"/>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}></GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <ProfileHeader label="Auhtor likes to write about" as="h5" size="sm"/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}></GridItem>

            <GridItem rowSpan={1} colSpan={1}></GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <ProfileTitle color="gray.500" label="Area of expertise"/> 
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
                <ProfileButton variant="outline" label="Business"/>
                <ProfileButton variant="outline" label="Financal market"/>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}></GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <ProfileHeader label="Author experience" as="h5" size="sm"/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
                    <ProfileTitle color="gray.500" label="Manager at IBM"/>
                    <Divider/>
                    <ProfileTitle color="gray.500" label="Market analyst in Bloomberg"/>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}></GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <ProfileHeader label="Education" as="h5" size="sm"/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
                    <ProfileTitle color="gray.500" label="MBA form california university"/>
                    <Divider/>
                    <ProfileTitle color="gray.500" label="BBA from UGCA college"/>
            </GridItem>
        </Grid>
 */    )
}