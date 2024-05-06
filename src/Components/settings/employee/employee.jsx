import { useState } from 'react'
import './employee.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import { BeatLoader } from "react-spinners";

const AddEmployee =()=>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [loading, setLoading] = useState(false)

    const dataObject = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        role: role
    }

    const handleAddEmployee = (e) => {
        e.preventDefault()
        setLoading(true)
        if(!firstName){
            setLoading(false)
            toast.error("FirstName is required")
        }else if(!lastName){
            setLoading(false)
            toast.error("Last Name is required")
        }else if(!role){
            setLoading(false)
            toast.error("Job title / role is required")
        }else if(!email){
            setLoading(false)
            toast.error("email is required")
        }else if(!phoneNumber){
            setLoading(false)
            toast.error("Phone number is required")
        }else if(phoneNumber.length < 11){
            setLoading(false)
            toast.error("Phone number must be 11 digit")
        }else{

        const userinfo = JSON.parse(localStorage.getItem("userInformation"))
        const userId = userinfo.userId
        const token = userinfo.token
        const headers = {
                Authorization:`Bearer ${token}`
            }

        const url = `https://rapid-stock-control-osqb.onrender.com/staff/addstaff/${userId}`

        axios.post(url,dataObject,{headers})
        // .then((response)=> response.json())
        .then((data)=> 
            {
                console.log(data)
                toast.success(data.data.message)
                setLoading(false)
                setFirstName("")
                setLastName("")
                setRole("")
                setPhoneNumber("")
                setEmail("")
            }
        )
        .catch((error)=> 
            {
                console.log(error)
                toast.error(error.response.data.message)
                setLoading(false)
            }
        )
        }

    }

    return(
        <div className="employeewrap" id='employwrap'>
            <div className="employeedetail">
                <div className="empdatawrap">
                    <div className="empdata">
                        <p>First Name</p>
                        <input
                         type="text" 
                         value={firstName}
                         onChange={(e)=>setFirstName(e.target.value)}
                         />
                    </div>
                    <div className="empdata">
                        <p>Last Name</p>
                        <input
                         type="text" 
                         value={lastName}
                         onChange={(e)=>setLastName(e.target.value)}
                         />
                    </div>
                </div>

                    <div className="position">
                        <p>Job Title / Role</p>
                        <select name="JobTitle" id="JobTitle" value={role}
                         onChange={(e)=>setRole(e.target.value)}>
                            <option value="choose">choose a role</option>
                            <option value="manager">manager</option>
                            <option value="sales-rep">sales-rep</option>
                            <option value="store-keeper">store-keeper</option>
                        </select>
                    </div>
                
                    <div className="empdatawrap">
                        <div className="empdata">
                            <p>Email Address</p>
                            <input
                             type="email"
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="empdata">
                            <p>Phone Number</p>
                            <input
                             type='tel'
                             value={phoneNumber}
                             placeholder='eg 09123456789'
                             onChange={(e)=>setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className='add' onClick={handleAddEmployee}>
                        {
                            loading?<BeatLoader />: "ADD"
                        }
                    </button>
            </div>
        </div>
    )
}

export default AddEmployee