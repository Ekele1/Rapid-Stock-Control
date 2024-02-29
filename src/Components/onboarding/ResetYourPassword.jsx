import { useState } from 'react';
import './resetpassword.css'
import { BeatLoader } from "react-spinners";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios';
import * as yup from 'yup'

const ResetPassword=()=>{

    const [show, setShow]= useState(false)
    const [show2, setShow2]= useState(false)
    const [loading, setLoading] =useState(false)
    const [errormssg, setErrormssg]= useState({err:true, message: ""})

    const schema = yup.object().shape({
        password: yup.string().min(8).max(20).required("Password must be a minimum of 8 Characters"),
        confirmPassword: yup.string().min(8).max(20).required("Password must be a minimum of 8 Characters")
        // confirmPassword: yup.string().oneOf([yup.ref("password and confirm password must match"),null]),
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
                    `https://rapid-stock-control-osqb.onrender.com/api/reset-user/${newId}`,
                     data
                );
                console.log(res)
            //    const userInformation =res.data.data
            //    localStorage.setItem("userInformation", JSON.stringify({id:userInformation._id, name:userInformation.userName, email:userInformation.email}))
              
                    // navigate("/verify")
            //   console.log(userInformation)
                setLoading(false)
            } catch (err) {
                console.log(err, "err message")
                setErrormssg({err:true, message: err.response.data.message})
                // console.log("error",err.response.message)
                setLoading(false)
            }
    
        };

    return(
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="resetpasswordwrapper">
                <div className="resetpassworddiv">
                    <div className="kind">
                        <h3>kindly fill in this input to complete this process</h3>
                    </div>
                    <div className="resetpinput">
                        <p>New Password</p>
                        <div className="passdivr">
                            <input type={show? "text":"password"} {...register("password")} /> {show?<IoMdEye style={{cursor: "pointer"}} onClick={()=>setShow(!show)}/>: <IoIosEyeOff style={{cursor: "pointer"}} onClick={()=>setShow(!show)}/>} 
                        </div>
                    </div>
                    {
                        errors.password?<p className='error'>{errors.password?.message}</p>: null
                    }
                    <div className="resetpinput">
                        <p>Confirm New Password</p>
                        <div className="passdivr">
                            <input type={show2? "text":"password"} {...register("confirmPassword")} /> {show2?<IoMdEye style={{cursor: "pointer"}} onClick={()=>setShow2(!show2)}/>: <IoIosEyeOff style={{cursor: "pointer"}} onClick={()=>setShow2(!show2)}/>} 
                        </div>
                    </div>
                    {
                        errors.confirmPassword?<p className='error'>{errors.confirmPassword?.message}</p>:null
                    }
                    {
                        errormssg.err?<p className='error'>{errormssg.message}</p>:null
                    }
                    <div className="comfirmbuttdiv">
                        <button>
                            {
                                loading?<BeatLoader />: "DONE"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ResetPassword