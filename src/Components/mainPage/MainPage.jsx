import './mainPage.css'
import { MdOutlineDashboard } from "react-icons/md";
import { BiSolidCoinStack } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { useState } from 'react';
import Header from '../header/Header'
import Dashboard from '../dashBoard/dashBoard';
import OrderManagment from '../ordermanagment/OrderManagment';
import Sales from '../sales/sales';
import Productmanagment from '../productManagment/ProductManagment';
import Notification from '../notification/notification';
import Purchase from '../purchase/Purchase';


const MainPage=()=>{

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
    
    return(
        <div className="mainpagewrapper">
            <div className="headerholder"><Header /></div>
            
            <div className="spacex"></div>
            <div className="main">
                <div className="leftside">
                    <div className="company">
                        <div className="complogo"></div>
                        <div className="compname">
                            <h3>Anonymous</h3>
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
                        <div onClick={handleNotification}>
                            <aside className={`a1 ${change.name === "notification"? "xxx": null}`}>
                                <IoMdNotificationsOutline />
                            </aside>
                            <aside className={`a2 ${change.name === "notification"? "xxx": null}`}>
                                <p>Notifications</p>
                            </aside>
                        </div>
                        <div onClick={handleReport}>
                            <aside className={`a1 ${change.name === "report"? "xxx": null}`}>
                                <TbReportSearch />
                            </aside>
                            <aside className={`a2 ${change.name === "report"? "xxx": null}`}>
                                <p>Reports</p>
                            </aside>
                        </div>
                        <div onClick={handlsettings}>
                            <aside className={`a1 ${change.name === "settings"? "xxx": null}`}>
                                <IoSettingsOutline />
                            </aside>
                            <aside className={`a2 ${change.name === "settings"? "xxx": null}`}>
                                <p>Settings</p>
                            </aside>
                        </div>
                        
                        {/* <div></div> */}
                    </div>
                    <div className="logout">
                        <div className="log1">
                            <BiLogOut />
                        </div>
                        <div className="log2">
                            <p>Log out</p>
                        </div>
                    </div>
                </div>
                <div className="mainspace"></div>
                <div className="rightside">
                    {
                        change.name === "dashboard"? <Dashboard />: change.name === "sales"? <Sales />: change.name === "product"? <Productmanagment />: change.name=== "order"? <OrderManagment />: change.name=== "notification"? <Notification />: change.name === "purchase"? <Purchase />: <Dashboard />
                    }
                </div>
            </div>
        </div>
    )
}
export default MainPage