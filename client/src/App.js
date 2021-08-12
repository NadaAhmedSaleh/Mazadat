import React, { useState, useEffect } from 'react';
import Product from './components/Product/Product'
import laptop from './trial images/laptop.png'

const App = () => {

  return (
 <div>
   <Product productPhoto={laptop} productName="nada ndaa nada nada" productLeftItems="3" productPrice="50" productDescription="
   Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."/>
   
   <Product productPhoto={laptop} productName="nada ndaa nada nada" productLeftItems="3" productPrice="50" productDescription="
   Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."/>
  
 </div>
  );
};

export default App;
