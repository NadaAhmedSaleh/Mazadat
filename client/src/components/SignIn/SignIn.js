import { Link } from "@material-ui/core";
import React, { Component, useState, useContext } from "react";
import'./SignIn.css'
import {signIn} from '../../Api/auth'
import { useHistory } from "react-router-dom";

import { AppStateContext } from "../../AppGlobalState";

const SignIn = (props) => {
    const { loginIn,setLogin,setUserId } = useContext(AppStateContext);
    const[user,setUser] = useState({  mobile:'',password: ''})
    let history = useHistory();

    const handleSubmit= async (e)=>{
        e.preventDefault();
       var x = await  signIn(user)

       try{setUserId(x.result._id)}
       catch{setUserId('')}
        setUser({...user,   mobile:'',password: ''})


        history.push("/homepage")
       
        
    }





    return (
        <form className="form-style"  onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            
      <div className="one-input-style">
        <label >Mobile:</label>
        <input  type='text'  onChange={(e) =>setUser ({ ...user, mobile: e.target.value })} />
      </div>
      <div className="one-input-style">
        <label  >Password:</label>
        <input  type='password' onChange={(e) =>setUser ({ ...user, password: e.target.value })} />
      </div>
        <div>
          <button className='submitStyle' type="submit">Submit</button>
        </div>
        <Link onClick={e=>setLogin(!loginIn)} >Don't have an account</Link>
      </form>
      
    );
  
}

export default SignIn;