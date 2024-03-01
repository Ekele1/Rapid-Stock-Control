import React, { useEffect, useState } from 'react'
import './Otp.css'

import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios";
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';

const VerifyOtp = ()=> {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [realerror, setRealerror] = useState({error: false, message: ""})

  const schema = yup.object().shape({
    userInput: yup.string().matches(/^\d{4}$/, "otp must be 4 digits").typeError("otp must be a number").required("otp is required "),
})

const {
register, 
handleSubmit,
formState: { errors },
} = useForm({
 resolver: yupResolver(schema),
 });

 const onSubmit = async (data) => {

  const userId = JSON.parse(localStorage.getItem("userInformation"))
  const newId = userId.id

  try {
      setLoading(true);
      const res = await axios.post(
          `https://rapid-stock-control-osqb.onrender.com/api/verify/${newId}`,
           data
      );
      // console.log("sucess",res)

    
          navigate("/login")
    // console.log(userInformation)
      setLoading(false)
  } catch (err) {
      console.log("err message", err)
      const realError = err.response.data.message
      setRealerror({error: true, message: realError })
      // console.log("real error", realError)
      setLoading(false)
  }

};

useEffect(() => {
        const userEmail = JSON.parse(localStorage.getItem("userInformation"))
        setEmail(userEmail?.email)
    }, [])


// const userId = JSON.parse(localStorage.getItem("userInformation"))

const resendOtp = async () => {
  
  try {
      const userId = JSON?.parse(localStorage.getItem("userInformation"))
      const otpId = userId.id
      // console.log(otpId)
      const url = `https://rapid-stock-control-osqb.onrender.com/api/resend-otp/${otpId}`
      const response = await axios.get(url)
      // console.log(response)
      setRealerror({error:true, message: response.data.message})
  } catch (error) {
      console.log(error)
  }
}

 

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className='otpMain'>
     
     <div className='Containotp'>
       <div className='text'>
       <h2>Please enter the one-Time Password to verify your account</h2>
       <p>A One-Time Password has been sent to {email}</p>
       </div>
       <div className='forLine'>
         <input type="text" placeholder='Enter code' maxLength={4} {...register("userInput")}/>
       </div>
            {
              errors.otp? <p className="errorx">{errors.userInput.message}</p>: null
            }
            {
              realerror.error? <p className="errorx">{realerror.message}</p>: null
            }
       <div className='ForButton'>
         <button>
            {
              loading? "Validating": "Validate"
            }
         </button>
         <h4 onClick={()=>resendOtp()}>Resend One-Time Password</h4>
       </div>
     </div>
     
   </div>
    </form>
  )
}

export default VerifyOtp