import { useState } from 'react'
import './forgetStaffPassword.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { BeatLoader } from 'react-spinners'
import axios from 'axios'

const ForgetStaffPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const handleNav = () => {
        navigate("/stafflogin")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if(!email){
            toast.error("email field can't be left empty")
            setLoading(false)
        }else if(!(email.includes("@"))){
            toast.error("enter your registered email")
            setLoading(false)
        }else{
            const url = "https://rapid-stock-control-osqb.onrender.com/staff/forgot-staff"
            const dataObject = {
                email: email
            }
            axios.post(url,dataObject)
            .then((data)=> {
                console.log(data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
        }
    }
    return(
        <div className="forgetpassword">
            <div className="staffhold">
                <h3>Enter your Email</h3>
                <div className="inputstaff">
                    <p>Email</p>
                    <input 
                        className='staffemail'
                        type="email" placeholder='example@gmail.com' 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className="inputstaff">
                    <button className='button' onClick={handleSubmit}>
                        {
                            loading?<BeatLoader color='white'/>: "SUBMIT"
                        }
                    </button>
                </div>
                <div className="forget">
                    <p onClick={handleNav}>Back to login</p>
                </div>
            </div>
        </div>
    )
}
export default ForgetStaffPassword