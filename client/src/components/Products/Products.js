import React, { useState, useEffect } from 'react';
import './Products.css'
import Product from '../Product/Product';
import {getProducts} from '../../Api/products.js'
import{getCategory} from '../../Api/categories.js'

const Products = (props) => {
    
const[products,SetProducts] = useState([])
    
    useEffect(async() => {
        var tempProducts = await getProducts()
        SetProducts(tempProducts)
        console.log(products)
        
      }, []);

    return (
     <div className="all-products-container">
         {products.map((p)=>{
             
             return(
            <Product productPhoto={p.imageUrl} productName={p.name} productPrice={p.price} productCategory={p.categoryId} productLeftItems={p.quantity}/>
              ) })}

    
     </div>
    );
};


export default Products;

