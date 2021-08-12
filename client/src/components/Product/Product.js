import React, { useState, useEffect } from 'react';
import './Product.css'
import { AiOutlineShoppingCart,AiOutlineHeart } from 'react-icons/ai';
const Product = (props) => {

  return (
      <div className="one-product-container">
          <img className = "product-photo-container"src={props.productPhoto} alt="No img found" />
          <div className="one-product-info-container">
         
         <h2 className="product-header-text">{props.productName}</h2>
         <h3 className="number-items-container">{"Only "+props.productLeftItems+" items left"}</h3>
          
          <h2 className="price-container">{props.productPrice+" $"}</h2>
          <p>{props.productDescription}</p>
          <div className="one-product-buttons-container">
              <button className="add-to-cart-button"> <AiOutlineShoppingCart size="2em" style={{marginTop:"5px",marginRight:"5px"}}/>
              <p>Add To Cart</p></button>

              <button className="add-to-cart-button" ><AiOutlineHeart size="1em" /></button>
          </div>

          </div>
      </div>
 
  );
};



export default Product;
