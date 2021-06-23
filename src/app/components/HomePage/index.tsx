import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Flex,Box,Text,Spacer,SimpleGrid,Wrap,WrapItem} from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.css'
import rectangle from './rectangle.png';
import shape from './shape@2x.png';
import HomePageCardBadge from './HomePageCardBadge';
import HomePageCardBookmark from './HomePageCardBookmark';
import HomePageCardMore from './HomePageCardMore';
import HomePageCardCaption from './HomePageCardCaption';
import HomePageCardImage from './HomePageCardImage';
import HomePageCardText from './HomePageCardText';
import Header from './Header';
import axios from "axios";

export function Home()
{
    const [data,setData]=useState<any[]>([]);
    const [isBookmark,setBookmark] = useState<any[]>([]);
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

      console.log(data);
      const handleSubmit = (event) =>{
            event.preventDefault();
            console.log(event.target.id);
      }
    return(
    <>
        <Header/>
        {/*<Container>
            <Row>
                <Col >
                    <Flex direction="column"
                    rounded={'md'}
                    boxShadow={'md'}
                    onClick={()=>alert("hello")}
                    cursor="pointer"
                    >
                <Box
                    position={'relative'}
                    
                    mx={["0.3rem","0.5rem"]}
                    my={["0.3rem","0.5rem"]}>

                <HomePageCardImage minH="200px" minW="300px" src={rectangle} />
              </Box>
              <Box p={2}>
                <HomePageCardCaption
                  as="h5"
                  size="md"
                  label="These tips could help you get more financial aid for college"
                />
              </Box>
              <Flex px={2} pb={0}>
                <HomePageCardText label="Floyd West" fontWeight="bold" />
                <Spacer />
                <HomePageCardText
                  label="23 Mar &bull; 4 min read"
                  fontWeight="bold"
                />
              </Flex>
            </Flex>
          </Col>
          <Col>
            <Flex direction="column" rounded={'md'} boxShadow={'md'}>
              <Box
                position={'relative'}
                overflow={'hidden'}
                mx={['0.3rem', '0.5rem']}
                my={['0.3rem', '0.5rem']}
              >
                <HomePageCardBookmark />
                <HomePageCardMore />
                <HomePageCardBadge />

                    <HomePageCardImage
                        
                        src={rectangle}
                    />
                    </Box>
                    <Box p={2}>
                        <HomePageCardCaption as="h5" size="md" label="These tips could help you get more financial aid for college"/>
                    </Box>
                    <Flex px={2} pb={0}>
                        <HomePageCardText label="Floyd West" fontWeight="bold"/>
                        <Spacer/>
                        <HomePageCardText label="23 Mar &bull; 4 min read" fontWeight="bold"/>
                    </Flex>
                    </Flex>
                </Col>
                <Col >
                <Flex direction="column"
                    rounded={'md'}
                    boxShadow={'md'}
                    >
                <Box
                    position={'relative'}
                    overflow={'hidden'}
                    mx={["0.3rem","0.5rem"]}
                    my={["0.3rem","0.5rem"]}>

                    <HomePageCardBookmark/>
                    <HomePageCardMore/>
                    <HomePageCardBadge/>

                    <HomePageCardImage
                       
                        src={rectangle}
                    />
                    </Box>
                    <Box p={2}>
                        <HomePageCardCaption as="h5" size="md" label="These tips could help you get more financial aid for college"/>
                    </Box>
                    <Flex px={2} pb={0}>
                        <HomePageCardText label="Floyd West" fontWeight="bold"/>
                        <Spacer/>
                        <HomePageCardText label="23 Mar &bull; 4 min read" fontWeight="bold"/>
                    </Flex>
                    </Flex>
                </Col>
                <Col >
                    <Flex direction="column"
                    rounded={'md'}
                    boxShadow={'md'}
                    >
                <Box
                    position={'relative'}
                    overflow={'hidden'}
                    mx={["0.3rem","0.5rem"]}
                    my={["0.3rem","0.5rem"]}>

                    <HomePageCardBookmark/>
                    <HomePageCardMore/>
                    <HomePageCardBadge/>

                    <HomePageCardImage
                        
                        src={rectangle}
                    />
                    </Box>
                    <Box p={2}>
                        <HomePageCardCaption as="h5" size="md" label="These tips could help you get more financial aid for college"/>
                    </Box>
                    <Flex px={2} pb={0}>
                        <HomePageCardText label="Floyd West" fontWeight="bold"/>
                        <Spacer/>
                        <HomePageCardText label="23 Mar &bull; 4 min read" fontWeight="bold"/>
                    </Flex>
                    </Flex>
                </Col>
            </Row>
        </Container> */}
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
       </>
    );
}
