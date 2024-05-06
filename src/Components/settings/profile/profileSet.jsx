import { useState } from 'react'
import './profileSet.css'
import { AiFillPicture } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";

const ProfileSettings = () => {
    const [show, setShow]= useState(false) 
    return(
        <main className='profile' id='myprofile'>
                            {
                                show?
                                <div className="profileupdatediv">
                                    <div id="close">
                                        <IoArrowBackOutline onClick={()=>setShow(false)}/>
                                    </div>
                                    <div className="profileupdateinput">
                                        <div className="profilephoto">
                                            <p>company logo</p>
                                            <div className="photo"></div>
                                            <AiFillPicture color='blue'/>
                                        </div>
                                        <div className="profileinput">
                                            <p>Full Name</p>
                                            <input type="text" />
                                            {/* <div className="photo"></div> */}
                                        </div>
                                        <div className="profileinput">
                                            <p>Phone Number</p>
                                            <input type="text" />
                                            {/* <div className="photo"></div> */}
                                        </div>
                                        <div className="profileinput">
                                            <p>Company Name</p>
                                            <input type="text" />
                                            {/* <div className="photo"></div> */}
                                        </div>
                                        <div className="done">
                                            <button>DONE</button>
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
    )
}

export default ProfileSettings