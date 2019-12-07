/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavigationContainer from "../NavigationContainer/Loadable";
import ArticlesListContainer from "../ArticlesListContainer/Loadable";

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
        <NavigationContainer/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={"/topics/:tag"} component={ArticlesListContainer} />
        <Route path={"/topics"} component={ArticlesListContainer}/>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
