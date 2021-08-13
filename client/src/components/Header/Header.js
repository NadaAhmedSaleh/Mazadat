import React, { useState, useEffect,useContext } from 'react';
import { useHistory } from "react-router-dom";
import './Header.css'
import logo from '../../assets/mazadat-logo.png'
import { AiOutlineShoppingCart,AiOutlineHeart } from 'react-icons/ai';
import {HiUserCircle} from 'react-icons/hi';
import {AiOutlineHome} from 'react-icons/ai'  
import{GrAdd} from 'react-icons/gr'

import { AppStateContext } from "../../AppGlobalState";

const Header = (props) => {

    let history = useHistory();

    const { userId } = useContext(AppStateContext);
    return (
     <div className="header-container">
         <img  className="header-img-container" src={logo}/>
         {userId!=''?
         < div className="header-buttons-container">
         <button className="header-button" onClick={e=>history.push("/cart")}>
             <p>My Cart</p>
             <AiOutlineShoppingCart size="2em"/>
             <p className="header-cart-items-num">0</p>
    </button>
         <button className="header-button" onClick={e=>history.push("/createposts")}>
             <p>Create Post</p>
             <GrAdd className="header-cart-items-num" size="3em"  />
         </button>
         <button className="header-button" onClick={e=>history.push("/watchlist")}>
         <AiOutlineHeart size="1em"/>
             <p style={{marginRight:"10px"}}>Watchlist</p>  
         </button>
         <button className="header-button"  onClick={e=>history.push("/homepage")}>
         <AiOutlineHome size="2em"/>
             <p style={{marginRight:"10px"}}>Home</p>  
         </button>
         
         <HiUserCircle className="user-profile-icon" size="2em" onClick={e=>history.push("/user")}/>
         </div>
         :<div/>}
     </div>
    );
};



export default Header;

