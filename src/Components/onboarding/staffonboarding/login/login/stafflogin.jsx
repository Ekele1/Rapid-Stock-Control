import { useState } from 'react';
import './stafflogin.css'
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { BeatLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginStaff = () => {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [staffRole, setStaffRole] = useState()

    const handleNavigate = () => {
        staffRole === "sales-rep"? navigate("/salesstaff"): 
        staffRole === "manager"? navigate("/dashboard"):
        staffRole === "store-keeper"? navigate("/purchase"): null
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        if(!email){
            toast.error("email field can't be left empty")
            setLoading(false)
        }else if(!(email.includes("@"))){
            toast.error("pls enter a valid email")
            setLoading(false)
        }else if(!password){
            toast.error("password field can't be left empty")
            setLoading(false)
        }else if(password.length < 8){
            toast.error("password must be at least 8 characters long")
            setLoading(false)
        }else{
            const url = "https://rapid-stock-control-osqb.onrender.com/staff/stafflogin"
            const dataObject = {
                email: email,
                password: password,
            }

            axios.post(url,dataObject)
            // .then(response => {response.json()})
            .then((data)=> {
                console.log(data)
                setLoading(false)
                toast.success(data.data.message)
                setStaffRole(data?.data?.data?.role)
                handleNavigate()
                // console.log("staffrole", staffRole)
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response.data.message)
                setLoading(false)
            })
        }
    }
    const handleNav = () => {
        navigate("/staffpassword")
    }
    return(
        <div className="staffwrap">
            <div className="staffhold">
                <h4>Login with your email & password</h4>
                <div className="inputstaff">
                    <p>Email</p>
                    <input 
                        className='staffemail'
                        type="email" placeholder='example@gmail.com'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="inputstaff">
                    <p>Password</p>
                    <div className='staffemail'>
                        <input 
                            className='staffpassword'
                            type={showPassword? "text": "password"} placeholder='password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        {
                            showPassword?<IoMdEye style={{cursor: "pointer"}} onClick={()=> setShowPassword(!showPassword)}/>:<IoIosEyeOff style={{cursor: "pointer"}} onClick={()=> setShowPassword(!showPassword)}/>
                        }
                    </div>
                </div>
                <div className="forget">
                    <p onClick={handleNav}>Forgot Password?</p>
                </div>
                <div className="inputstaff">
                    <button className='button' onClick={handleLogin}>
                        {
                            loading?<BeatLoader color='white'/>: "LOGIN"
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginStaff