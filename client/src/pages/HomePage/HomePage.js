import React, { useState, useEffect } from 'react';
import './HomePage.css'
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import Products from '../../components/Products/Products';

const HomePage = () => {

  return (
 <div>
   <HomePageHeader/>
  <Products/>
 </div>
  );
};

export default HomePage;