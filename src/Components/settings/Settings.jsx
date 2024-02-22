import { useState } from 'react'
import './settings.css'
import { ImCancelCircle } from "react-icons/im";


const Settings =()=>{

    const [profile, setProfile] = useState(false)
    const [password, setPassword] = useState(false)
    const [addemployee, setaddEmployee] = useState(false)
    const [manage, setmanage] = useState(false)
    const [show, setShow]= useState(false)

    const handleProfile=()=>{
        setProfile(true)
        setPassword(false)
        setaddEmployee(false)
        setmanage(false)
    }

    const handlePassword=()=>{
        setProfile(false)
        setPassword(true)
        setaddEmployee(false)
        setmanage(false)
    }
    const handleAddemployee=()=>{
        setProfile(false)
        setPassword(false)
        setaddEmployee(true)
        setmanage(false)
    }
    const handleManage=()=>{
        setProfile(false)
        setPassword(false)
        setaddEmployee(false)
        setmanage(true)
    }

    return(
        <div className="settingswrap">
            <div className="settinshead"><h3>Settings</h3></div>
            <div className="settinshead2">
                <div className="settingsoption">
                    <div onClick={handleProfile}>
                    <p>Profile</p>
                    </div>
                    <div onClick={handlePassword}><p>Password</p></div>
                    <div onClick={handleAddemployee}><p>Add Employee</p></div>
                    <div onClick={handleManage}><p>Manage Employee</p></div>
                </div>
                <div className="settingsvalue">
                    {
                        profile?
                        <main className='profile' id='myprofile'>
                            {
                                show?
                                <div className="profileupdatediv">
                                    <div className="close">
                                        <ImCancelCircle className='cancel' onClick={()=>setShow(false)}/>
                                    </div>
                                    <div className="profileupdateinput">
                                        <div className="profilephoto">
                                            
                                        </div>
                                    </div>
                                </div>
                                :null
                            }
                            <div className="myprofilediv">
                                <div>
                                    <aside className="profileinfoid">
                                        <aside className="companylogo">
                                            <div id="logoitself"><img src="" alt="profile" /></div>
                                            <p>Company Logo</p>
                                        </aside>
                                    </aside>
                                    <aside className="profileinfoid2">
                                        <p>Company Name</p>
                                        <aside className="companyname"></aside>
                                    </aside>
                                </div>
                                <div>
                                    <aside className="profileinfoid">
                                        <p>Full Name</p>
                                        <aside className="companyname"></aside>
                                    </aside>
                                    <aside className="profileinfoid2">
                                        <p>Email</p>
                                        <aside className="companyname"></aside>
                                    </aside>
                                </div>
                                <div>
                                    <aside className="profileinfoid">
                                        <p>Phone Number</p>
                                        <aside className="companyname"></aside>
                                    </aside>
                                    <aside className="profileinfoid2"></aside>
                                </div>
                            </div>
                            <button className='updatebutton' onClick={()=>setShow(true)}>Update Profile Settings</button>
                        </main>
                        : password?<main className='profile'><h1>Your Password</h1></main>
                        :addemployee? <main className='profile'><h1>Add Employee</h1></main>: manage?<main className='profile'><h1>Manage Employee</h1></main>:
                        <main className='profile'><h1>Your Profile</h1></main>
                    }
                    
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Settings