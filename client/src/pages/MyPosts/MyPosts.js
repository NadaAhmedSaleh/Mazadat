import React, { useState, useEffect,useContext } from 'react';
import './MyPosts.css'
import { AppStateContext } from "../../AppGlobalState";
const MyPosts = () => {

    const { userId,setUserId } = useContext(AppStateContext);
  return (
 <div>
  my posts
 </div>
  );
};

export default MyPosts;