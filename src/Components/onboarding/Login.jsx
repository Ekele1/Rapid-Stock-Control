import React from 'react'
import './login.css';
import { useNavigate } from "react-router-dom";

const Login = () =>{


  const change = useNavigate()

  const handleChange =()=>{
     change("/SignUp")
  }

  return (

      <div className='Contain'>
        <div className='rightLog'>
            <div className='Words'>
                <h3>Hey Hello!</h3>
                <h5>Enter the information you entered while registering.</h5>
            </div>
            <div className='forInputLog'>
              <label>Email</label>
              <input type='text'/>
            </div>

            <div className='forInputLog2'>
              <label>Password</label>
              <input type='text'/>
              <span className='cLog'>Forgot Password?</span>
            </div>

            <div className='forButtonLog'>
            <button>Login</button>
         
            <div className='text'><h6>If you don't have an account click here <span className='Tx2' onClick={handleChange}>SIGN-UP</span></h6></div>
            </div>
        </div>
      </div>
      
  )
}

export default Login