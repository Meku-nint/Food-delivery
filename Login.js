import React from 'react'
import { useState } from 'react'
import { assets } from './admin/assets'
import './login.css'
const Login = ({set_show_login}) => {
    const [currentState,setCurrrentState]=useState("Sign up")
  return (
       <div className='login'>
        <form className='login-form'>
            <div className="login-title">
                <h2>{currentState}</h2>
           {<img onClick={()=>{set_show_login(false)}}src={assets.cross_icon} alt=''/>}
            </div>
            <div className='login-input'>
                
            {currentState==="Login"?<></>:<input type ='text' placeholder="your name "required/>}
          <input type ='email' placeholder="your email "required/>
          <input type ='password' placeholder="your password "required/>
        </div>
        <button >{currentState==="Sign up"?"Create account":"Login"}</button>
        <div className='login-condition'>
            <input type="checkbox" required/>
            <p>by continuing agree the term and privacy policy</p>

        </div>
        {
            currentState==="Login"?
            <p className='pp'>Create new account ?<span className='sign-up'onClick={()=>setCurrrentState("Sign up")}>Click here</span></p>
            :<p className='pp'>Already have an account ?<span className='sign-up' onClick={()=>setCurrrentState("Login")}>login here</span></p>
        }
        </form>
       </div>
  )
}

export default Login;