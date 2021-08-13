import React, { useState, useEffect ,useContext} from 'react';
import './LoginPage.css'
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import { AppStateContext } from "../../AppGlobalState";
const LoginPage = () => {

 
const { loginIn,setLogin } = useContext(AppStateContext);
  return (
 <div>
  {loginIn? <SignIn/>: <SignUp/>}
   
  
 </div>
  );
};

export default LoginPage;