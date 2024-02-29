import React, { useState } from "react";
import './signup.css'
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios";
import * as yup from 'yup'

const SignUp = ()=>{
  const navigate = useNavigate()

  const [showpassword, setShowpassword] = useState(false)
  const [showpassword2, setShowpassword2] = useState(false)
  const [loading, setLoading] = useState(false)
  const [realerror, setRealerror]= useState({eror: false, message: ""})
  // const [errorMessage, setErrormessage] = useState("")

  const schema = yup.object().shape({
        businessName: yup.string().required("Your bussiness name is Required"),
        email: yup.string().email().required("Your email is Required"),
        phoneNumber: yup.string().matches(/^\d{11}$/, "phoneNumber must be 11 digits").typeError("phoneNumber must be a number").required("PhoneNumber is required "),
        password: yup.string().min(8).max(20).required("Password must be a minimum of 8 Characters"),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null]),
  })
  const {
    register, 
    handleSubmit,
    formState: { errors },
} = useForm({
     resolver: yupResolver(schema),
     });

     const onSubmit = async (data) => {

      try {
          setLoading(true);
          const res = await axios.post(
              "https://rapid-stock-control-osqb.onrender.com/api/signup",
               data
          );
          // console.log("sucess",res.data.data)
         const userInformation =res.data.data
        //  localStorage.setItem("userInformation", JSON.stringify({id:userInformation._id, name:userInformation.userName, email:userInformation.email}))
         localStorage.setItem("userInformation", JSON.stringify(userInformation))
        
              navigate("/verify")
        // console.log(userInformation)
          setLoading(false)
      } catch (err) {
          // console.log("err message", err)
          const realError = err.response.data.message
          setRealerror({eror: true, message: realError })
          // console.log("real error", realError)
          setLoading(false)
      }

  };

  const loginNav=()=>{
    navigate("/login")
  }


    return(
        
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className='SignUpContain'>
            
            <div className='rightdivsign'>
              <div className='containForInput2'>
                <div className='words'>
                    <h3>Create your bussiness account</h3>
                </div>
                <div className='forInput' id="reduce">
                  <p>Business Name</p>
                  <input type='text' placeholder="bussiness name" {...register("businessName")}/>
                </div>
                {/* <p className='errorx'>{errors.businessName?.message}</p> */}
                {
                  errors.businessName? <p className="errorx">{errors.businessName.message}</p>: null
                }
                <div className='forInput' id="reduce">
                  <p>Phone Number</p>
                  <input type='text' placeholder="phone number" {...register("phoneNumber")}/>
                </div>
                {
                  errors.phoneNumber?<p className='errorx'>{errors.phoneNumber?.message}</p>:null
                }
                
                <div className='forInput' id="reduce">
                  <p>Email</p>
                  <input type='email' placeholder="bussiness email" {...register("email")}/>
                </div>
                {
                  errors.email?<p className='errorx'>{errors.email?.message}</p>:null
                }
                
                <div className='forInput' id="reduce">
                  <p>Password</p>
                  <aside className="pass">
                    <input type={showpassword? "text" : "password"} id="passwordwr" placeholder="password" {...register("password")}/>
                    {
                      showpassword?<IoMdEye onClick={()=>setShowpassword(!showpassword)}/>:<IoIosEyeOff onClick={()=>setShowpassword(!showpassword)}/>
                    }
                  </aside>
                      
                </div>
                {
                  errors.password?<p className='errorx'>{errors.password?.message}</p>:null
                }
                
                <div className='forInput' id="reduce">
                  <p>Confirm Password</p>
                  <aside className="pass">
                    <input type={showpassword2? "text" : "password"} id="passwordwr" placeholder="confirm password" {...register("confirmPassword")}/>
                    {
                      showpassword2?<IoMdEye onClick={()=>setShowpassword2(!showpassword2)}/>:<IoIosEyeOff onClick={()=>setShowpassword2(!showpassword2)}/>
                    }
                  </aside>
                      
                </div>
                  {
                    errors.confirmPassword?<p className='errorx'>{errors.confirmPassword?.message}</p>:null
                  }
                    {
                      realerror.eror? <p className="errorx">{realerror.message}</p>: null
                    }
                <div className='forButton'>
                    <button>
                      {
                        loading?<BeatLoader color="white"/>: "SignUp"
                      }
                    </button>
                    <h6>Already have an account? <span className="Tx" onClick={loginNav}>Login</span></h6>
                </div>

              </div>
            </div>
          </div>
        </form>


    )
}
export default SignUp