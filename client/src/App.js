import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header  from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import CreatePost from './pages/CreatePosts/CreatePosts';
import Cart from './pages/Cart/Cart';
import WatchList from './pages/WatchList/WatchList';
import User from './pages/User/User';
import { AppStateProvider } from './AppGlobalState';

const App = () => {

  return (
    <AppStateProvider>
    <BrowserRouter>
 <Header/>
 <Switch>
 <Route component={LoginPage} path="/" exact />
 <Route component={HomePage} path="/homepage" exact />
 <Route component={CreatePost} path="/createposts" exact />
 <Route component={Cart} path="/cart" exact />
 <Route component={User} path="/user" exact />
 <Route component={WatchList} path="/watchlist" exact />
 </Switch>
 </BrowserRouter>
 </AppStateProvider>
  );
};

export default App;


