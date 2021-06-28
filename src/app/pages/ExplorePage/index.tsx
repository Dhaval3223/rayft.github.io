import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Explore } from '../../components/ExplorePage/index'
import { Header } from '../../components/Header/index';

export function ExplorePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <Explore/> 
    </>
  );
}
