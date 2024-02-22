import React from "react";
import './signUp.css'
// import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const SignUp = ()=>{


const navigate = useNavigate()

const handleNavigate =()=>{
   navigate("/Login")
}


    return(
        
        <div className='SignUpContain'>
    
        <div className='right'>
          <div className='containForInput2'>
            <div className='words'>
                <h3>Create your bussiness account</h3>
            </div>
            <div className='forInput'>
              <label>Business Name</label>
              <input type='text'/>
            </div>

            <div className='forInput'>
              <label>Phone Number</label>
              <input type='text'/>
            </div>
            
            
            <div className='forInput'>
              <label>Email</label>
              <input type='text'/>
            </div>

            
            <div className='forInput'>
              <label>Password</label>
              <input type='text'/>

            </div>

            
            <div className='forInput'>
              <label>Comfirm Password</label>
              <input type='text'/>
            </div>

            <div className='forButton'>
                <button>SignUp</button>
                <h6>Already have an account? <span className="Tx" onClick={handleNavigate}>Login</span></h6>
            </div>

          </div>
        </div>
      </div>


    )
}
export default SignUp