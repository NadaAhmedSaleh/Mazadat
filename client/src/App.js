import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header  from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MyPosts from './pages/MyPosts/MyPosts';
import { AppStateProvider } from './AppGlobalState';

const App = () => {

  return (
    <AppStateProvider>
    <BrowserRouter>
 <Header/>
 <Switch>
 <Route component={HomePage} path="/homepage" exact />
 <Route component={MyPosts} path="/userposts" exact />
 </Switch>
 </BrowserRouter>
 </AppStateProvider>
  );
};

export default App;


