import React, { useState } from "react";
import './signup.css'
// import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
// import {  } from "react-icons/io";

const SignUp = ()=>{

  const [showpassword, setShowpassword] = useState(false)
  const [showpassword2, setShowpassword2] = useState(false)

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
              <input type='text' placeholder="bussiness name"/>
            </div>

            <div className='forInput'>
              <label>Phone Number</label>
              <input type='text' placeholder="phone number"/>
            </div>
            
            
            <div className='forInput'>
              <label>Email</label>
              <input type='text' placeholder="bussiness email"/>
            </div>

            
            <div className='forInput'>
              <label>Password</label>
              <aside className="pass">
                <input type={showpassword? "text" : "password"} id="passwordwr"/>
                {
                  showpassword?<IoMdEye onClick={()=>setShowpassword(!showpassword)}/>:<IoIosEyeOff onClick={()=>setShowpassword(!showpassword)}/>
                }
              </aside>
                  
            </div>

            
            <div className='forInput'>
              <label>Confirm Password</label>
              <aside className="pass">
                <input type={showpassword2? "text" : "password"} id="passwordwr"/>
                {
                  showpassword2?<IoMdEye onClick={()=>setShowpassword2(!showpassword2)}/>:<IoIosEyeOff onClick={()=>setShowpassword2(!showpassword2)}/>
                }
              </aside>
                  
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