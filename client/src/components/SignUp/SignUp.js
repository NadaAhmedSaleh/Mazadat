import { Link } from "@material-ui/core";
import React, { Component, useState,useContext } from "react";
import'./SignUp.css'

import {signUp} from '../../Api/auth'
import { AppStateContext } from "../../AppGlobalState";

import { useHistory } from "react-router-dom";
 

const SignUp = (props) => {

    const[user,setUser] = useState({  mobile:'',password: '', username:'' })
    const { loginIn,setLogin,setUserId } = useContext(AppStateContext);
    let history = useHistory();

    const handleSubmit= async (e)=>{
        e.preventDefault();
       var x = await  signUp(user)

       try{setUserId(x.result._id)}
       catch{setUserId('')}
        setUser({...user,   mobile:'',password: '', username:'' })


        history.push("/homepage")
       
        
    }
    
    return (
        <form className="form-style" onSubmit={handleSubmit} >
            <h2>Sign Up</h2>
            <div className="one-input-style" >
        <label >Username:</label>
        <input  type='text'placeholder={user.username}  onChange={(e) =>setUser ({ ...user, username: e.target.value })} />
      </div>
      <div className="one-input-style">
        <label >Mobile:</label>
        <input  type='text' placeholder={user.mobile}  onChange={(e) =>setUser ({ ...user, mobile: e.target.value })} />
      </div>
      <div className="one-input-style">
        <label  >Password:</label>
        <input  type='password'placeholder={user.password}  onChange={(e) =>setUser ({ ...user, password: e.target.value })} />
      </div>
        <div>
          <button className='submitStyle' type="submit">Submit</button>
        </div>
        <Link onClick={e=>setLogin(!loginIn)}>Already have an account</Link>
      </form>
      
    );
  
}

export default SignUp;