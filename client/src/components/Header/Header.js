import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Header.css'
import logo from '../../assets/mazadat-logo.png'
import { AiOutlineShoppingCart,AiOutlineHeart } from 'react-icons/ai';
import {HiUserCircle} from 'react-icons/hi';
import {AiOutlineHome} from 'react-icons/ai'  
import{GrAdd} from 'react-icons/gr'
const Header = (props) => {

    let history = useHistory();


    return (
     <div className="header-container">
         <img  className="header-img-container" src={logo}/>
         <div className="header-buttons-container">
         <button className="header-buttons">
             <p>My Cart</p>
             <AiOutlineShoppingCart size="2em"/>
             <p className="header-cart-items-num">10</p>
         </button>
         <button className="header-buttons" onClick={e=>history.push("/userposts")}>
             <p>Create Post</p>
             <GrAdd className="header-cart-items-num" size="3em"/>
         </button>
         <button className="header-buttons">
         <AiOutlineHeart size="1em"/>
             <p style={{marginRight:"10px"}}>Watchlist</p>  
         </button>
         <button className="header-buttons"  onClick={e=>history.push("/homepage")}>
         <AiOutlineHome size="2em"/>
             <p style={{marginRight:"10px"}}>Home</p>  
         </button>
         
         <HiUserCircle className="user-profile-icon" size="2em"/>
         </div>
     </div>
    );
};



export default Header;

