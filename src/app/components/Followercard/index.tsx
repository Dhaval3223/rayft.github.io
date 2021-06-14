/**
 *
 * Followercard
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Box, Flex, Avatar, Text, Button } from '@chakra-ui/react';

export interface Props {
  name: string;
  color: string;
  followers: string;
}

export function Followercard(props: Props) {
  const { name, followers } = props;

  return (
    <>
      <Box
        maxW="xs"
        width="262px"
        height="265px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        backgroundColor="#fff"
        // margin="0 24px 0 0"
        padding="24px 0 24px 0"
        font-family="NunitoSans"
        textAlign="center"
      >
        <Avatar
          size="xl"
          name="Christian Nwamba"
          src="https://bit.ly/code-beast"
        />
        <br />
        <Text
          fontSize="20px"
          opacity="0.9"
          color="#242a41"
          font-family="NunitoSans"
          font-weight="bold"
        >
          {name}Mildred Grant
        </Text>
        <Text
          margin="0 0 0 7px"
          opacity="0.3"
          font-size="14px"
          font-family="NunitoSans"
          color="#242a41"
        >
          {followers} 5.3k followers . 43 followings
        </Text>
        <br />
        <Button
          size="sm"
          variant="outline"
          p="12px 30px 11px 30px"
          borderRadius="full"
          color="#51a8d1"
          borderColor="#51a8d1"
        >
          Follow
        </Button>
      </Box>
    </>
  );
}

const Div = styled.div``;

//props kese send karu??
