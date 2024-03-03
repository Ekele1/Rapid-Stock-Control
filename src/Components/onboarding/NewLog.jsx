import { useEffect, useState } from 'react';
import './Newlogin.css'
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from 'yup'

const NewLog=()=>{
        const navigate = useNavigate()
    
    const loginNav=()=>{
        navigate("/")
        // console.log("xx")
      }
      const login=()=>{
        navigate("/login")
      }
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [loading, setLoading] = useState(false)
    const [realerror, setRealerror]= useState({eror: false, message: ""})

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
        //   console.log(res)
         const userInformation =res.data
         localStorage.setItem("userInformation", JSON.stringify(userInformation))
        
              navigate("/verify")
          setLoading(false)
      } catch (err) {
          console.log("err message", err)
          const realError = err.response.data.message
          setRealerror({eror: true, message: realError })
          setLoading(false)
      }

  };
    return(
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="logcont">
                <div className="allthewrapp">
                    <div className="logcontwrap">
                        <div className="logloggo">
                            <div className="logloggodiv">
                                <div className="loggoimg"><img src="./rapid.jpg" alt="" onClick={loginNav}/></div>
                            </div>
                        </div>
                        <div className="loggowrapinput">
                            <div className="logitselfwrap">
                                <div className="youraccount">
                                    <h3>Create Your Bussiness Account</h3>
                                </div>
                                <div className="alltheinput">
                                    <div className="mighty">
                                        <div className="inputthan">
                                            <p>Bussiness Name</p>
                                            <input type="text" {...register("businessName")}/>
                                        </div>
                                        
                                    </div>
                                    {
                                            errors.businessName? <p className="errorx">{errors.businessName.message}</p>: null
                                        }
                                    <div className="mighty">
                                        <div className="inputthan">
                                            <p>Phone Number</p>
                                            <input type="phone" {...register("phoneNumber")}/>
                                        </div>
                                        
                                    </div>
                                    {
                                            errors.phoneNumber?<p className='errorx'>{errors.phoneNumber?.message}</p>:null
                                        }
                                    <div className="mighty">
                                        <div className="inputthan">
                                            <p>Email</p>
                                            <input type="email" {...register("email")}/>
                                        </div>
                                        
                                    </div>
                                    {
                                            errors.email?<p className='errorx'>{errors.email?.message}</p>:null
                                        }
                                    <div className="mighty">
                                        <div className="inputthan">
                                            <p>Password</p>
                                            <div id='passworddd'>
                                                <input type={show?"text":"password"} {...register("password")}/>
                                                {
                                                    show?<IoMdEye onClick={()=>setShow(!show)}/>:<IoIosEyeOff onClick={()=>setShow(!show)}/>
                                                }
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    {
                                                errors.password?<p className='errorx'>{errors.password?.message}</p>:null
                                            }
                                             {
                                                    realerror.eror? <p className="errorx">{realerror.message}</p>: null
                                                }
                                    <div className="mighty">
                                    <div className="inputthan">
                                            <p>Confirm Password</p>
                                            <div id='passworddd'>
                                                <input type={show2?"text":"password"} {...register("confirmPassword")}/>
                                                {
                                                    show2?<IoMdEye onClick={()=>setShow2(!show2)}/>:<IoIosEyeOff onClick={()=>setShow2(!show2)}/>
                                                }
                                            </div>
                                            
                                        </div>

                                    </div>
                                    {
                                                errors.confirmPassword?<p className='errorx'>{errors.confirmPassword?.message}</p>:null
                                            }
                                             {
                                                    realerror.eror? <p className="errorx">{realerror.message}</p>: null
                                                }
                                    <div className="mighty">
                                        <div className="inputthan">
                                            
                                                <button>{
                                                    loading?<BeatLoader color='white'/>:"SignUp"    
                                                }</button>
                                            
                                            <p id='already'>Already have an accont? <span onClick={login}>login</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logcontwrapright">
                        <div className="rightloggohold">
                            <img src="https://media.istockphoto.com/id/1387071403/photo/businessman-use-tablet-and-smart-phone-for-stock-market.webp?b=1&s=170667a&w=0&k=20&c=-Ead8GT_tWH6osH-SAZtl_lATiFOmC9ZQ9w-twSY7B0=" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default NewLog