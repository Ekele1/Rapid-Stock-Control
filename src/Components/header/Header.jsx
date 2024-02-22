import { useState } from 'react';
import './header.css'
import { IoMenu } from "react-icons/io5";
import { RxDropdownMenu } from "react-icons/rx";


const Header =()=>{
    const [show, setShow]=useState(false)

    return(
        <div className="headerwrap">
            {
                show?<div className="menudrop"></div>:null
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
                    <p>HOME</p>
                    <p>FEATURES</p>
                    <p>ABOUT US</p>
                    <p>CONTACT US</p>
                </div>
                <IoMenu className='iomenu' onClick={()=>setShow(true)} onMouseLeave={()=>setShow(false)}/>
            </div>
        </div>
    )
}

export default Header