import React,{useState,useEffect} from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import axios from 'axios';
import {Container} from 'react-bootstrap';
import {Flex,Box,Spacer,SimpleGrid} from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.css'
import rectangle from '../HomePage/rectangle.png';
import shape from './shape@2x.png';
import HomePageCardBadge from '../HomePage/HomePageCardBadge';
import HomePageCardBookmark from '../HomePage/HomePageCardBookmark';
import HomePageCardMore from '../HomePage/HomePageCardMore';
import HomePageCardCaption from '../HomePage/HomePageCardCaption';
import HomePageCardImage from '../HomePage/HomePageCardImage';
import HomePageCardText from '../HomePage/HomePageCardText';


export function Explore()
{
    const [data,setData]=useState<any[]>([]);
    useEffect(() => {
        axios
          .get('https://private-16b8d3-rayftnew.apiary-mock.com/articles', {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => {
            // const result = JSON.parse(response.data);
            setData(response.data);
          })
          .catch(err => {
            console.log(err);
          });
      }, []);
    return(
        <Tabs py="12">
            <TabList color="teal" justifyContent="center" alignItems="center">
                <Tab fontWeight="bold">Trending</Tab>
                <Tab fontWeight="bold">Rayft Choice</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                <Container>
        <SimpleGrid columns={{md:2,lg:2,sm:1}} spacing="5px">
            {data.map((data) => {
                return(
                    <Box
                rounded={'md'}
                boxShadow={'md'}
                flexDirection="row">
                
                <Box
                    position={'relative'}
                    mx={["0.3rem","0.5rem"]}
                    my={["0.3rem","0.5rem"]}>

                    <HomePageCardBookmark id={data.id}/>
                    <HomePageCardMore/>
                    <HomePageCardBadge/>

                    <HomePageCardImage
                        src={rectangle}
                    />
                 </Box>   
                <Box p={2}>
                    <HomePageCardCaption as="h4" size="sm" label={data.title}/>
                </Box>
                <Flex px={2} pb={0}>
                    <HomePageCardText label={data.author} fontWeight="bold"/>
                    <Spacer/>
                    <HomePageCardText label={data.date + " \u25CF 4 min read"} fontWeight="bold"/>
                </Flex>
            </Box>
                )
            })}
            </SimpleGrid>
        </Container> 

                </TabPanel>

                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}