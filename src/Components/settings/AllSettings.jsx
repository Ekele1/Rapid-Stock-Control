import { useState } from 'react'
import './SettingssAll.css'
import AddEmployee from './employee/employee';
import ManageEmployee from './employee/employeeManage';
import ProfileSettings from './profile/profileSet';
import { ImCancelCircle } from "react-icons/im";



const Settings =()=>{

    const [profile, setProfile] = useState(false)
    const [addemployee, setaddEmployee] = useState(false)
    const [manage, setmanage] = useState(false)


    const handleProfile=()=>{
        setProfile(true)
        setaddEmployee(false)
        setmanage(false)
    }

    const handleAddemployee=()=>{
        setProfile(false)
        setaddEmployee(true)
        setmanage(false)
    }
    const handleManage=()=>{
        setProfile(false)
        setaddEmployee(false)
        setmanage(true)
    }

    return(
        <div className="settingswrap">
            <div className="settinshead"><h3>Settings</h3></div>
            <div className="settinshead2">
                <div className="settingsoption">
                    <div className={`${profile? "set": null}`} onClick={handleProfile}>
                        <p>Profile</p>
                    </div>
                    <div onClick={handleAddemployee}>
                        <p>Add Employee</p>
                    </div>
                    <div onClick={handleManage}>
                        <p>Manage Employee</p>
                    </div>
                </div>
                <div className="settingsvalue">
                    {
                        profile?
                        <ProfileSettings />
                        :addemployee? <AddEmployee /> : manage?<ManageEmployee />: <ProfileSettings />   
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Settings