import { useEffect, useState } from 'react';
import './header.css'
import { IoMenu } from "react-icons/io5";
import { RxDropdownMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { IoMdNotifications } from "react-icons/io";

const Header =()=>{
    const [show, setShow]=useState(false)
    const navigate = useNavigate()
    const [notification, setNotification] = useState(false)
    const [notificationContent, setNotificationContent] = useState()
    const handleHome=()=>{
        navigate("/")
    }

    const handleGetNotification=()=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const id = userId.userId
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
    const url = `https://rapid-stock-control-osqb.onrender.com/notifications/view-notifications/${id}`

    fetch(url,{headers})
    .then((Response)=> Response.json())
    .then((data)=> {
        setNotificationContent(data.data)
        // console.log(data)
    })
    .catch((error)=> {
        console.log("error",error)
    })
    }

    useEffect(()=>{
        handleGetNotification()
    },[notification])

    console.log("content",notificationContent)



    return(
        <div className="headerwrap">
            {
                notification?<div className="notificationcontent">
                    {
                        notificationContent?.map((e,id)=>(
                            <div className="notidate" key={id}>
                        <div className="date">
                            <p>{e.date}</p>
                        </div>
                        <div className="mmmmessage">
                            <p id='messagepp'>
                                {
                                    e.message
                                }
                            </p>
                        </div>
                    </div>
                        ))
                    }
                </div>:null
            }
            {
                show?
                <div className="menudrop">
                    <p >Notification</p>
                    <p onClick={handleHome}>FEATURES</p>
                    <p onClick={handleHome}>ABOUT US</p>
                    <p onClick={handleHome}>CONTACT US</p>
                </div>:null
            }
            <div className="header">
                <div className="loggo">
                    <div className="loggoinf">
                        <img src="./Rapid Stock Control logo.png" alt="" />
                    </div>
                    <aside className="loggowrite">
                        <h1>RAPID</h1>
                        <p>Stock Control</p>
                    </aside>
                </div>
                <div className="navic">
                    <p onClick={handleHome}>HOME</p>
                    <p onClick={handleHome}>FEATURES</p>
                    <p onClick={handleHome}>ABOUT US</p>
                    <div className='notifyme'>
                        <IoMdNotifications onClick={()=>setNotification(!notification)}/>
                    </div>
                </div>
                <IoMenu className='iomenu' onClick={()=>setShow(true)} onMouseLeave={()=>setShow(false)}/>
            </div>
        </div>
    )
}

export default Header