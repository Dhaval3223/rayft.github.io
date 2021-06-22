/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { LoginPage } from './pages/LoginPage/index';
import { useTranslation } from 'react-i18next';
import { Transactions } from './pages/Wallte/Transactions/index';
import { Step1 } from './pages/Signup/Step1/index';
import { Step3 } from './pages/Signup/Step3/index';
import { Step2 } from './pages/Signup/Step2/index';
import { Step_2 } from './pages/Signup/Reader/Step2';
import { LandingPage } from './pages/LandingPage/index';
import { Step4 } from './pages/Signup/Step4';
import { RootState } from '../types/index';
import { FormsHeader } from './components/FormsHeader/index';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/loginpage" component={LoginPage} />
        <Route exact path="/All_Transactions" component={Transactions} />
        <Route exact path="/Sign_up/Step_1" component={Step1} />
        <Route exact path="/Sign_up/Step_2" component={Step2} />
        <Route exact path="/Sign_up/Step_3" component={Step3} />
        <Route exact path="/Sign_up/Step_2/R" component={Step_2} />
        <Route exact path="/Sign_up/Step_4" component={Step4} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
