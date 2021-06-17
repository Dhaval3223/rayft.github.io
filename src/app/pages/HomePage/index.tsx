/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { HomePageMain } from '../../components/HomePage/Loadable'
=======
import { AuthorTrending } from '../../components/AuthorTrending/index';

>>>>>>> ec030afe75f27b20aa603492791cbaa7c8672c8d
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
