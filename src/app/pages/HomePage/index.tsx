import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthorTrending } from '../../components/AuthorTrending/index';
import {
  Flex,
  Box,
  Spacer,
  Center,
  Divider,
  Grid,
  GridItem,
  SimpleGrid
} from '@chakra-ui/react';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
 
      <span>HomePage container</span>
      <AuthorTrending />
    </>
  );
}
