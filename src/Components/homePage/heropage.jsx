import { useState } from 'react';
import React from 'react';
import { Link } from 'react-scroll';
import './heropage.css'
import { IoMenu } from "react-icons/io5";
// import AboutUs from './aboutus';

const Header=()=>{

    const [show, setShow] = useState(false)


    return(
        <main>
            <div className="headwrap" id='hero'>
                {
                    show?<div className="dropmenu">
                    <Link to='hero' spy={true} smooth={true} offset={50} duration={500}>HOME</Link>
                    <Link to='why' spy={true} smooth={true} offset={50} duration={500}>FEATURES</Link>
                    <Link to='aboutus' spy={true} smooth={true} offset={50} duration={500}>ABOUT US</Link>
                    <Link to='question' spy={true} smooth={true} offset={50} duration={500}>CONTACT US</Link>
                </div>:null
                }
                <div className='hero'>
                    <header>
                        <div className="logo">
                            <img src="./rapid2.png" alt="" />
                        </div>
                        <div className="navhero">
                            <Link id='spy' className='linkscroll' to='hero' spy={true} smooth={true} offset={50} duration={500} >HOME</Link>
                            <Link id='spy' className='linkscroll' to='why' spy={true} smooth={true} offset={50} duration={500}>FEATURES</Link>
                            <Link id='spy' className='linkscroll' to='aboutus' spy={true} smooth={true} offset={50} duration={500}>ABOUT US</Link>
                            <Link id='spy' className='linkscroll' to='question' spy={true} smooth={true} offset={50} duration={500}>CONTACT US</Link>
                        </div>
                        <IoMenu className='menu' onClick={()=>setShow(true)} onMouseLeave={()=>setShow(false)}/>
                    </header>
                    <div className="spacexr"></div>
                    <div className="herosection">
                        <div className="platformwrap">
                            <div className="platform">
                                <h1>We are the best platform to manage a store</h1>
                                <span>The most complete and easiest stock management platform ever.</span>
                                <span>Take a trial and enjoy the features.</span>
                                <div>
                                    <button className='getstart'>Get Started</button>
                                </div>
                            </div>
                            <div className="bigpicture">
                                <img src="./retail photo.jpg" alt="" className='retailphoto'/>
                                <img src="./Dashboard.png" alt="" className='framepic'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frame">
                <img src="./Dashboard.png" alt="" />
            </div>
        </main>
    )
}

export default Header