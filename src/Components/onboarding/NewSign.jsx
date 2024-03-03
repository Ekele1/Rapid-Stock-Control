import { useState } from 'react'
import './NewsignIn.css'
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios";
import * as yup from 'yup'

const NewSignIn =()=>{
    const navigate = useNavigate()
    const sign =()=>{
        navigate("/signup")
    }
    const [show, setShow]=useState(false)

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
              console.log("err message", err)
              setError({type: true, message: err.response.data.message})
              // setError(err.response.data.message, "err message")
              setLoading(false)
          }
      
      };
    return(
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="newsiginwrapp">
                <div className="newsigninsecondwrap">
                    <div className="signinleft">
                        <div className="signinleftloggowrap">
                            <div className="signinleftloggohold">
                                <div className="signinloggoitself">
                                    <img src="./rapid.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="signinleftothers">
                            <div className="signinleftotherscont">
                                <div className="logininputholder">
                                    <h2>login with your registered email and password</h2>
                                </div>
                                <div className="wrapperwraper">
                                    <p>Email</p>
                                    <input type="email" {...register("email")}/>
                                </div>
                                {
                                    errors.email?<p className='error'>{errors.email.message}</p>:null
                                }
                                <div className="wrapperwraper">
                                    <p>Password</p>
                                    <div id="passwr">
                                        <input type={show? "text": "password"} {...register("password")}/>
                                        {
                                            show?<IoMdEye  onClick={()=>setShow(!show)}/>:<IoIosEyeOff onClick={()=>setShow(!show)}/>
                                        }
                                    </div>
                                </div>
                                {
                                    errors.password?<p className='error'>{errors.password?.message}</p>:null
                                    }
                                    {
                                     error.type?<p className='error'>{error.message}</p>: null
                                    }
                                <div className="buttwrapp">
                                    <button>
                                        {
                                            loading?<BeatLoader color='white'/>:"Login"
                                        }
                                    </button>
                                </div>
                                <div className="have">
                                    <p>Dont have an account? <span onClick={sign}>SignUp</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="signinright">
                        <div className="rightloggotoo">
                            <img src="https://media.istockphoto.com/id/490774222/photo/view-of-a-contemporary-glass-skyscraper-reflecting-the-blue-sky.webp?b=1&s=170667a&w=0&k=20&c=yAswjOSl_2LM-mqoJgcauGbi3rX9tDMptl3XBel9Up8=" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default NewSignIn