import './employeeManage.css'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import toast from 'react-hot-toast';


const ManageEmployee = () => {
    const [edit, setEdit] = useState(false)
    const [option, setOption] = useState(false)
    const [remove, setRemove] = useState(false)
    const [allStaff, setAllStaff] = useState()
    const [editDetails, setEditDetails] = useState()
    const [deleteId, setDeleteId] = useState()
    const [loading, setLoading] = useState (false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    // console.log(editDetails)

    const handleAllEmployyee = () => {
        const userinfo = JSON.parse(localStorage.getItem("userInformation"))
        const userId = userinfo.userId
        const token = userinfo.token
        const url = `https://rapid-stock-control-osqb.onrender.com/staff/view-staffs/${userId}`
        const headers = {
            Authorization:`Bearer ${token}`
        }

        fetch(url, {headers})
        .then((response)=> response.json())
        .then((data)=> {
            // console.log(data)
            setAllStaff(data.data)
        })
        .catch((error)=> console.log(error))
    }

    useEffect(() => {
        handleAllEmployyee()   
    }, [])

    const handleUpdateEmployee = (e) => {
        e.preventDefault()
        setLoading(true)
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const token = userId.token

        const dataObject = {
            firstName: firstName,
            lastName: lastName,
            role: role,
            email: email,
            phoneNumber: phoneNumber
        }
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const url = `https://rapid-stock-control-osqb.onrender.com/staff/update-staff-admin/${editDetails._id}`

        axios.put(url, dataObject,{headers})
        .then((data)=> {
            // console.log(data)
            setLoading(false)
            setOption(false)
            setEdit(false)
            toast.success(data.data.message)
            handleAllEmployyee()
            // console.log("dataobject", dataObject)
        })
        .catch((error)=> {
            // console.log(error)
            toast.error(error.response.data.message)
            setLoading(false)
        })
    }

    const handleDelete =()=>{
        setLoading(true)
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const iduser = userId.userId
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const url = `https://rapid-stock-control-osqb.onrender.com/staff/delete-staff/${deleteId?._id}/${iduser}`

        fetch(url,{
            method: 'DELETE',
            headers: headers
        })
        .then((response)=> {response.json()})
        .then((data)=> {
            // console.log(data)
            setLoading(false)
            setRemove(false)
            toast.success("Employee sucessfully removed")
            handleAllEmployyee()
        })
        .catch((error)=> {
            // console.log(error)
            setLoading(false)
        })
    }

    return(
        <div className="manageEmployee">
            {
                edit?
                <div className='editemployee'>
                    <div className="canceldiv"><ImCancelCircle onClick={()=>{
                        setEdit(false)
                        setOption(false)
                        }}/></div>
                    {
                        option?
                            <div className="optiondiv">
                                <div className="option">
                                    <p>Are you sure you want to make this changes?</p>
                                    <button onClick={handleUpdateEmployee}>
                                        {
                                            loading?<BeatLoader color='white'/>: "DONE"
                                        }
                                    </button>
                                </div>
                            </div>
                        :null
                    }
                    <div className="employeewrap" id='employwrap'>
                        <div className="employeedetail">
                            <div className="empdatawrap">
                                <div className="empdata">
                                    <p>First Name</p>
                                    <input
                                     type="text"
                                      placeholder={editDetails?.firstName}
                                      value={firstName}
                                      onChange={(e)=>setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="empdata">
                                    <p>Last Name</p>
                                    <input
                                     type="text"
                                      placeholder={editDetails?.lastName}
                                      value={lastName}
                                      onChange={(e)=>setLastName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="position">
                                <p>Job Title</p>
                                <select name="JobTitle" id="JobTitle" value={role}
                                      onChange={(e)=>setRole(e.target.value)}>
                                    <option value="">Select Option</option>
                                    <option value="manager">Manager</option>
                                    <option value="sales-rep">Sales Rep</option>
                                    <option value="store-keeper">Store Keeper</option>
                                </select>
                            </div>
                
                            <div className="empdatawrap">
                                <div className="empdata">
                                    <p>Email Address</p>
                                    <input
                                     type="email" 
                                     placeholder={editDetails?.email}
                                     value={email}
                                     onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="empdata">
                                    <p>Phone Number</p>
                                    <input
                                     type="text"
                                     placeholder={editDetails?.phoneNumber}
                                     value={phoneNumber}
                                    onChange={(e)=>setPhoneNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button className='add' onClick={()=>setOption(true)}>PROCEED</button>
                         </div>
                    </div>
                </div>
                :null
            }
            {
                remove?
                <div className="removediv">
                    <div className="canceldiv"><ImCancelCircle onClick={()=>{
                        setRemove(false)
                    }}/></div>
                    <div className="option">
                                <p>Are you sure you want to permanently remove <span style={{color: "blueviolet"}}>{`${deleteId.firstName}  ${deleteId.lastName}`}</span> as your employee?</p>
                                <button onClick={handleDelete}>
                                    {
                                        loading? "REMOVING...": "REMOVE"
                                    }
                                </button>
                    </div>
                </div>
                :null
            }
            <div className="managecont">
                {
                    allStaff?.map((e,id)=> (
                <div className="employdetail" key={id}>
                    <div className="det">
                        <aside>
                            <p>First Name</p>
                            <i>{e.firstName}</i>
                        </aside>
                        <aside>
                            <p>Last Name</p>
                            <i>{e.lastName}</i>
                        </aside>
                    </div>
                    <div className="det">
                        <aside>
                            <p>Position</p>
                            <i>{e.role}</i>
                        </aside>
                        <aside>
                            <p>Phone</p>
                            <i>{e.phoneNumber}</i>
                        </aside>
                    </div>
                    <div className="det">
                        <aside>
                            <p>Email</p>
                            <i>{e.email}</i>
                        </aside>
                        {/* <aside>
                            <p>Last Name</p>
                            <i>Doe</i>
                        </aside> */}
                    </div>
                    <div className="det">
                        <aside className='dell' onClick={()=>{
                            setRemove(true)
                            setDeleteId(e)
                        }}>
                            <MdDelete />
                            <p>Remove</p>
                        </aside>
                        <aside className='dell' onClick={()=>{
                            setEdit(true)
                            setEditDetails(e)
                        }}>
                            <FiEdit />
                            <p>Edit</p>
                        </aside>
                    </div>
                    
                </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default ManageEmployee