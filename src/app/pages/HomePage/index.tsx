/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthorTrending } from '../../components/AuthorTrending/index';

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
