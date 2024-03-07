import './main.css'
import { MdOutlineDashboard } from "react-icons/md";
import { BiSolidCoinStack } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { useEffect, useState } from 'react';
import Header from '../header/Header'
import Dashboard from '../dashBoard/dashBoard';
import OrderManagment from '../ordermanagment/AllOrderManagment';
import Sales from '../productManagment/sales/Allsales';
import Productmanagment from '../productManagment/AllProductManagment';
import Notification from '../notification/AllNotification';
import Purchase from '../purchase/AllPurchase';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';


const MainPage=()=>{
    // useEffect
    const navigate = useNavigate()
    const [dropmenu, setDropMenu]=useState(false)

    const [change, setChange]= useState({name: "", state: false,})

    const handleDashboard=()=>{
        setChange({name: "dashboard", state: true,})
        console.log(change)
    }
    const handleSales=()=>{
        setChange({name: "sales", state: true,})
    }
    const handlePurchase=()=>{
        setChange({name: "purchase", state: true,})
    }
    const handleProduct=()=>{
        setChange({name: "product", state: true,})
    }
    const handleOrder=()=>{
        setChange({name: "order", state: true,})
    }
    const handleNotification=()=>{
        setChange({name: "notification", state: true,})
    }
    const handleReport=()=>{
        setChange({name: "report", state: true,})
    }
    const handlsettings=()=>{
        setChange({name: "settings", state: true,})
    }



    const handleSignOut=()=>{
        
         localStorage.clear("userInformation")
         navigate("/")
        // const tokenid = JSON.parse(localStorage.getItem("userInformation"))
        // const userId = JSON.parse(localStorage.getItem("userInformation"))
        // const id = userId.userId
        // const token = userId.token
        // const headers = {
        //     Authorization:`Bearer ${token}`
        // }

        // const url =  `https://rapid-stock-control-osqb.onrender.com/api/signout/${id}`

        // axios.post(url,{headers})
        // .then((response)=>{
        //     localStorage.clear("userInformation")
        // //  navigate("/")
        //     console.log(response)
        //     navigate("/")
        // }).catch((error)=>{
        //     console.log(error)
        //     // console.log(headers)
        // })

    }

    const name = JSON.parse(localStorage.getItem("userInformation"))
    const businessName = name.businessName
    
    return(
        <div className="mainpagewrapper">
            <div className="headerholder"><Header /></div>
            
            <div className="spacex"></div>
            <div className="main">
                <div className="leftside">
                    <div className="company">
                        {/* <div className="complogo"></div> */}
                        <div className="compname">
                            <h3>{businessName}</h3>
                        </div>
                    </div>
                    <div className="optionschose">
                        <div onClick={handleDashboard} >
                            <aside  className={`a1 ${change.name === "dashboard"? "xxx": null}`}>
                                <MdOutlineDashboard />
                            </aside>
                            <aside className={`a2 ${change.name === "dashboard"? "xxx": null}`}>
                                <p>Dashboard</p>
                            </aside>
                        </div>
                        <div onClick={handleSales}>
                            <aside className={`a1 ${change.name === "sales"? "xxx": null}`}>
                                <BiSolidCoinStack />
                            </aside>
                            <aside className={`a2 ${change.name === "sales"? "xxx": null}`}>
                                <p>Sales</p>
                            </aside>
                        </div>
                        <div onClick={handlePurchase}>
                            <aside className={`a1 ${change.name === "purchase"? "xxx": null}`}>
                                <IoMdCart />
                            </aside>
                            <aside className={`a2 ${change.name === "purchase"? "xxx": null}`}>
                                <p>Purchases</p>
                            </aside>
                        </div>
                        <div onClick={handleProduct}>
                            <aside className={`a1 ${change.name === "product"? "xxx": null}`}>
                                <FaBoxOpen />
                            </aside>
                            <aside className={`a2 ${change.name === "product"? "xxx": null}`}>
                                <p>Product MGT</p>
                            </aside>
                        </div>
                        <div onClick={handleOrder}>
                            <aside className={`a1 ${change.name === "order"? "xxx": null}`}>
                                <img src="./salesicon.png" alt="" />
                            </aside>
                            <aside className={`a2 ${change.name === "order"? "xxx": null}`}>
                                <p>Order MGT</p>
                            </aside>
                        </div>
                    </div>
                    <div className="logout">
                        <div className="log1">
                            <BiLogOut />
                        </div>
                        <div className="log2">
                            <p onClick={handleSignOut}>Log out</p>
                        </div>
                    </div>
                </div>
                <div className="mainspace"></div>
                <div className="rightside">
                    <div className="rightdropmenu">
                        <img src="./dropdown.png" alt="" onClick={()=>setDropMenu(!dropmenu)}/>
                    </div>
                    {
                        dropmenu?
                        <div className="rightmenudivitem">
                        <p onClick={handleDashboard} className={`ay ${change.name === "dashboard"? "ax": null}`}>Dashboard</p>
                        <p onClick={handleSales} className={`ay ${change.name === "sales"? "ax": null}`}>Sales</p>
                        <p onClick={handlePurchase} className={`ay ${change.name === "purchase"? "ax": null}`}>Purchases</p>
                        <p onClick={handleProduct} className={`ay ${change.name === "product"? "ax": null}`}>Product Mgt</p>
                        <p onClick={handleOrder} className={`ay ${change.name === "order"? "ax": null}`}>Order Mgt</p>
                        <p>LOG OUT</p>
                        {/* <p onClick={handleNotification} className={`ay ${change.name === "notification"? "ax": null}`}>LogOut</p> */}
                        {/* <p onClick={handleReport} className={`ay ${change.name === "report"? "ax": null}`}>Reports</p> */}
                        {/* <p onClick={handlsettings} className={`ay ${change.name === "settings"? "ax": null}`}>Settings</p> */}
                    </div>:null
                    }
                    {
                        change.name === "dashboard"? <Dashboard />: change.name === "sales"? <Sales />: change.name === "product"? <Productmanagment />: change.name=== "order"? <OrderManagment />: change.name === "purchase"? <Purchase />: <Dashboard />
                    }
                </div>
            </div>
        </div>
    )
}
export default MainPage