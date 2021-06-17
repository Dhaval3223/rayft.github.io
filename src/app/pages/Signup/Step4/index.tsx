/**
 *
 * Step4
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import {
  Stack,
  Flex,
  Box,
  HStack,
  Tag,
  TagLabel,
  Grid,
  Button,
  Divider,
} from '@chakra-ui/react';
import { PageButton } from '../../../components/PageButton/index';
import { Title } from '../../../components/Title/index';
import { TextFiled } from '../../../components/TextFiled/index';

interface Props {}

export const Step4 = memo((props: Props) => {
  return (
    <Div>
      <Flex
        flexDirection="column"
        width="100wh"
        height={['100vh']}
        justifyContent={['normal', 'center']}
        alignItems="center"
        marginTop={['1em', '0em']}
      >
        <Stack>
          <Title title="You want to write about" />

          <Box
            boxShadow={{
              sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
            }}
            borderRadius="4px"
      
            w={['100%', '410px']}
            margin="auto"
            mt="2em"
          >
            <Stack
              spacing={4}
              padding={{ sm: '1em', md: '2.5em' }}
              m={['1.3em', '0em']}
              backgroundColor="whiteAlpha.900"
            >
              <TextFiled label="Work experience" />
              <Grid
                templateColumns={['repeat(2, 1fr)']}
                gap={4}
                justifyContent="center"
                alignItems="center"
              >
                <Tag
                  size="lg"
                  borderRadius="full"
                  border="1px solid"
                  colorScheme="whiteAlpha"
                  color="#242a41"
                  justifyContent="center"
                >
                  <TagLabel textAlign="center" pl="0.5em" pr="0.5em">
                    Business
                  </TagLabel>
                </Tag>

                <Tag
                  size="lg"
                  borderRadius="full"
                  border="1px solid"
                  colorScheme="whiteAlpha"
                  color="#242a41"
                  justifyContent="center"
                  onClick={() => alert('hello')}
                >
                  <TagLabel textAlign="center" pl="0.5em" pr="0.5em">
                    Financal market
                  </TagLabel>
                </Tag>
              </Grid>
              <Tag
                size="lg"
                borderRadius="full"
                width="8em"
                bg="white"
                border="1px "
                borderStyle="dashed"
                justifyContent="center"
                onClick={() => alert('hello')}
              >
                <TagLabel textAlign="center">Add tag</TagLabel>
              </Tag>
              <Divider />
              <TextFiled label="Suggested tags" />
              <Grid
                templateColumns={['repeat(2, 1fr)']}
                gap={4}
                justifyContent="center"
                alignItems="center"
              >
                <Tag
                  size="lg"
                  borderRadius="full"
                  // width="fit-content"
                  border="1px solid"
                  colorScheme="whiteAlpha"
                  color="#242a41"
                  opacity="0.3"
                  justifyContent="center"
                >
                  <TagLabel textAlign="center" pl="0.5em" pr="0.5em">
                    Business
                  </TagLabel>
                </Tag>

                <Tag
                  size="lg"
                  // width="fit-content"
                  borderRadius="full"
                  border="1px solid"
                  colorScheme="whiteAlpha"
                  color="#242a41"
                  justifyContent="center"
                  opacity="0.3"
                  onClick={() => alert('hello')}
                >
                  <TagLabel pl="0.5em" pr="0.5em">
                    Opinions
                  </TagLabel>
                </Tag>
              </Grid>
              <Stack pt="8em">
              <PageButton
              label="Get started"
              color="#20cdbb"
              fontcolor="white"
              size="10em"
            />
              </Stack>
          
            </Stack>
        
          </Box>
        </Stack>
      </Flex>
    </Div>
  );
});

const Div = styled.div``;
