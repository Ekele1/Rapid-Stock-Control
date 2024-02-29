import React, { useState } from 'react'
import './ForgetPassword.css'
import { FaLock } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { BeatLoader } from "react-spinners";
import axios from 'axios';
import * as yup from 'yup'

const PasswordForget = ()=> {
  const [loading, setLoading]= useState(false)
  const [message, setMessage]= useState({state: false, mssg: ""})
  const schema = yup.object().shape({
    email: yup.string().email().required("Your email is Required"),
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
            "https://rapid-stock-control-osqb.onrender.com/api/forgot",
             data
        );
        console.log(res)
        setMessage({state: true, mssg: res.data.message})
      //  const userToken =res.data.token
      //  localStorage.setItem("userToken",(userToken))
      
            // navigate("/poll")
    //   console.log(userInformation)
        setLoading(false)
    } catch (err) {
        console.log("err message", err)
        // setShow2(true)
        // setError(err.response.data.message, "err message")
        setLoading(false)
    }

};

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className='Bg'>
      <div className='inputContain'>
        <div className='imgContain'>
            <FaLock />
        </div>
        <div className='InnerInputContain'> 
            <h2>Forgot Password?</h2>
            <h4>enter your registered email to reset your Password here.</h4>
            {
              message.state?<p style={{color: "blue",fontSize:"10px"}}>{message.mssg}</p>:null
            }
            <input type="email"  placeholder='email address' {...register("email")}/>
            {
              errors.email?<p className='error'>{errors.email?.message}</p>:null
            }
            <button className='btn'>
              {
                loading? <BeatLoader />: "Reset Password"
              }
            </button>
        </div>
      </div>
   
    </div>
    </form>
  )
}

export default PasswordForget