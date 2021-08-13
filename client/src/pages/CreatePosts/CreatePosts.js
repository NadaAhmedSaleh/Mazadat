import React, { useState, useEffect,useContext } from 'react';
import './CreatePosts.css'
import { AppStateContext } from "../../AppGlobalState";
import  NewProductForm from '../../components/NewProductForm/NewProductForm'
const MyPosts = () => {

    const { userId,setUserId } = useContext(AppStateContext);
  return (
 <div>
  <NewProductForm userId={userId}/>
 </div>
  );
};

export default MyPosts;