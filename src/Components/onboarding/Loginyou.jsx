import React, { useState } from 'react'
import './login.css';
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios";
import * as yup from 'yup'

const Login = () =>{
  const navigate = useNavigate()

  const [showpassword, setShowPassword] = useState(false)
  const [loading, setLoading]=useState(false)
  const [error, setError]= useState({type: false, message: ""})

  const schema = yup.object().shape({
    email: yup.string().email().required("Your email is Required"),
    password: yup.string().min(8).max(20).required("Password must be a minimum of 8 Characters"),
})
const { register, 
  handleSubmit,
  formState: { errors },
} = useForm({
   resolver: yupResolver(schema),
   });

   const onSubmit = async (data) => {

    try {
        setLoading(true);
        const res = await axios.post(
            "https://rapid-stock-control-osqb.onrender.com/api/login",
             data
        );
        // console.log(res)
       const userInformation =res.data.data
        localStorage.setItem("userInformation", JSON.stringify(userInformation))
      
            navigate("/main")
    //   console.log(userInformation)
        setLoading(false)
    } catch (err) {
        // console.log("err message", err)
        setError({type: true, message: err.response.data.message})
        // setError(err.response.data.message, "err message")
        setLoading(false)
    }

};

  

  const handleChange =()=>{
     navigate("/SignUp")
  }

  return (

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className='Contain'>
          <div className='rightLog'>
              <div className='Words'>
                  <h3>Hey Hello!</h3>
                  <h5>Enter the information you entered </h5>
                  <h5>while registering.</h5>
              </div>
              <div className='forInputLog'>
                <p>Email</p>
                <input type='email' {...register("email")}/>
              </div>
              {
                errors.email?<p className='error'>{errors.email.message}</p>:null
              }
              

              <div className='forInputLog log2x' id='a2xlog'>
                <p>Password</p>
                <div id="passdiv">
                  <input type={showpassword?"text":'password'} {...register("password")}/>
                  {
                    showpassword?<IoMdEye className='eyes' onClick={()=>setShowPassword(!showpassword)}/>:<IoIosEyeOff className='eyes' onClick={()=>setShowPassword(!showpassword)}/> 
                  }
                  
                </div>
                <span className='cLog' onClick={()=>navigate("/forget")}>Forgot Password?</span>
              </div>
                {
                  errors.password?<p className='error'>{errors.password?.message}</p>:null
                }
                {
                error.type?<p className='error'>{error.message}</p>: null
              }

              <div className='forButtonLog'>
              <button>
                {
                  loading?<BeatLoader color='white'/>: "Login"
                }
              </button>
              </div>
              <div className='text'><h6>If you don't have an account click here <span className='Tx2' onClick={handleChange}>SIGN-UP</span></h6></div>
          </div>
        </div>
      </form>
      
  )
}

export default Login