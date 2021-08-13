import React, { useState, useEffect,useContext } from 'react';
import './Product.css'
import { AiOutlineShoppingCart,AiOutlineHeart } from 'react-icons/ai';
import{getCategory} from '../../Api/categories.js'
import{addWatchItemByid, deleteWatchItem,getWatchItemsByuserid}from '../../Api/watchlist.js'
import { AppStateContext } from "../../AppGlobalState";

const Product = (props) => {
    const [ category,setCategory] = useState({})
    const[liked,setLiked] = useState(false)
    const [likedItems,setLikedItems] = useState([])
    const { userId } = useContext(AppStateContext);
    useEffect(async() => {
        var tempCategory = await getCategory(props.productCategory)
        setCategory(tempCategory)
        var likedItems = await getWatchItemsByuserid(userId)
        var m = likedItems.map((l)=>l.productId)
        console.log(m)
        setLikedItems(m)
        
        
      }, []);


      useEffect(async() => {
          console.log(likedItems)
          console.log(props.productid)
        if(likedItems.includes(props.productid)){
        setLiked(true)
        console.log("hellp")
        }
        else
        setLiked(false)
          
        }, [likedItems]);

      const returnButtonColor=(liked)=>{
          if (liked) 
          return "#879eb6"
          else
          return "white"

      }
      const onCLickLike=()=>{
        console.log(userId)
          if(liked){
            deleteWatchItem(userId,props.productid)
          }
          else{
              
            addWatchItemByid(userId,props.productid)
          }
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
