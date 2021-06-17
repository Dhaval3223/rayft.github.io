import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { HomePageMain } from '../../components/HomePage/Loadable'
import { Header } from '../../components/Header/index';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <HomePageMain/> 
    </>
  );
}
