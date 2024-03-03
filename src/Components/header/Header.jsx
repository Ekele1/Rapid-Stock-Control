import { useState } from 'react';
import './header.css'
import { IoMenu } from "react-icons/io5";
import { RxDropdownMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';


const Header =()=>{
    const [show, setShow]=useState(false)
    const navigate = useNavigate()
    const handleHome=()=>{
        navigate("/")
    }

    return(
        <div className="headerwrap">
            {
                show?
                <div className="menudrop">
                    <p onClick={handleHome}>HOME</p>
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
                    <p onClick={handleHome}>CONTACT US</p>
                </div>
                <IoMenu className='iomenu' onClick={()=>setShow(true)} onMouseLeave={()=>setShow(false)}/>
            </div>
        </div>
    )
}

export default Header