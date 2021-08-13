import React, { useState, useEffect } from 'react';
import './Product.css'
import { AiOutlineShoppingCart,AiOutlineHeart } from 'react-icons/ai';
import{getCategory} from '../../Api/categories.js'
const Product = (props) => {
    const [ category,setCategory] = useState({})
    const[liked,setLiked] = useState(false)
    useEffect(async() => {
        var tempCategory = await getCategory(props.productCategory)
        setCategory(tempCategory)
        
      }, []);

      const returnButtonColor=(liked)=>{
          if (liked) 
          return "#879eb6"
          else
          return "white"

      }
      const onCLickLike=()=>{
          setLiked(!liked)
      }

  return (
      <div className="one-product-container">
          <img className = "product-photo-container"src={props.productPhoto} alt="No img found" />
          <div className="one-product-info-container">
         
         <h2 className="product-header-text">{props.productName +"-"+category.name}</h2>
         <h3 className="number-items-container">{"Only "+props.productLeftItems+" items left"}</h3>
          
          <h2 className="price-container">{props.productPrice+" $"}</h2>
          <p>{props.productDescription}</p>
          <div className="one-product-buttons-container">
              <button className="add-to-cart-button"> <AiOutlineShoppingCart size="2em" style={{marginTop:"5px",marginRight:"5px"}}/>
              <p>Add To Cart</p></button>

              <button className="add-to-cart-button" style={{backgroundColor:returnButtonColor(liked)}} onClick={onCLickLike}><AiOutlineHeart size="1em" /></button>
          </div>

          </div>
      </div>
 
  );
};



export default Product;
