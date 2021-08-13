import React, { useState, useEffect,useContext } from 'react';

import { AppStateContext } from "../../AppGlobalState";
import { useHistory } from "react-router-dom";
import './User.css'




const User = () => {
  const[user,setUser] = useState({  mobile:'',password: '', username:'' })
  const { loginIn,setLogin,setUserId } = useContext(AppStateContext);
  let history = useHistory();

  const logout= async (e)=>{
  setUserId('')

      history.push("/")
     
      
  }

  return (
 <div>
   <button onClick={logout}>LogOut</button>
 </div>
  );
};




    
export default User;