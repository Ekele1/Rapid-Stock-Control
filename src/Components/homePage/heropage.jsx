import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-scroll';
import './heropage.css'
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
// import AboutUs from './aboutus';

const Header=()=>{

    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const handleGetStart =()=>{
        navigate('/signup')
    }
    const [currentimageIndex, setCurrentimageIndecx]= useState(0)
    const images = [
        "https://media.istockphoto.com/id/1661021853/photo/woman-watching-stock-charts.webp?b=1&s=170667a&w=0&k=20&c=sKn3OsTaCryYm7r1lYyyFjgac92xlrFNH0uM8MK614M=",
        'https://plus.unsplash.com/premium_photo-1696942353136-c3735fadc15a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8fHww'
    ]

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentimageIndecx((prevIndex)=>
                prevIndex === images.length - 1? 0 : prevIndex + 1
            )
        },6000);
        return ()=> clearInterval(interval)
    },[])

    return(
        <main className='heropagewrapper'>
            <header className='heropageHeader'>
            {
                    show?
                    <div id="dropmenu">
                        <Link to='hero' id='hyk' spy={true} smooth={true} offset={50} duration={500}>HOME</Link>
                        <Link to='why' id='hyk'  spy={true} smooth={true} offset={50} duration={500} >FEATURES</Link>
                        <Link to='aboutus' id='hyk'  spy={true} smooth={true} offset={50} duration={500} >ABOUT US</Link>
                        <Link to='question' id='hyk'  spy={true} smooth={true} offset={50} duration={500} >CONTACT US</Link>
                    </div>:null
                 }
                <div className="heropageloggo">
                    <div className="herologohold">
                        <img src="./rapid2.png" alt="loggo" />
                    </div>
                </div>
                <div className="heropagenavmenu">
                    <div className="heronavwrap">
                        <Link to='hero' spy={true} smooth={true} offset={50} duration={500}><p>Home</p></Link>
                        <Link to='why' spy={true} smooth={true} offset={50} duration={500}><p>Features</p></Link>
                        <Link to='aboutus' spy={true} smooth={true} offset={50} duration={500}><p>About Us</p></Link>
                        <Link to='question' spy={true} smooth={true} offset={50} duration={500}><p>Contact Us</p></Link>
                    </div>
                </div>
                <div className="freetrialbutton">
                    <IoMenu className='bur' onClick={()=>setShow(!show)}/>
                    <button className='freetrial' onClick={handleGetStart}>Start Your Free Trial</button>
                </div>
            </header>
            <div className="headerspace"></div>
            <main className='mainherowrap'>
                <div className="mainhero">
                    <div className='word'>
                        <div className="wordwrap">
                            <div className="heroword" id='hero'>
                                <h1>Take charge of your inventory like never before and unlock the potential for efficient,
                                    hassle-free management
                                </h1>
                            </div>
                            <div className="smallword">
                                <p>Empowering business to thrive by revolutionalizing inventory management,
                                    one efficient solution at a time.
                                </p>
                                
                            </div>
                            <div className="trialdiv">
                                    <button className='freetrial trial2' onClick={handleGetStart}>Start Your Free Trial</button>
                                </div>
                            <div className="clients">
                                <div className="cli">
                                    <div className="cllogo">
                                        <img src="./client.png" alt="" />

                                    </div>
                                    <div className="clwrite">
                                        <h1>50+</h1>
                                        <p>Trusted Clients</p>
                                    </div>
                                </div>
                                <div className="cli">
                                    <div className="cllogo">
                                        <img src="./world.png" alt="" />

                                    </div>
                                    <div className="clwrite">
                                        <h1>1k+</h1>
                                        <p>site visits per day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='heropic'>
                        <div className="pichold"  id='slideshow'>
                            <img src={images[currentimageIndex]} alt={`image ${currentimageIndex + 1}`} />
                            
                        </div>
                    </div>
                </div>
            </main>
        </main>
        
        // <main>
        //     <div className="headwrap" id='hero'>
        //         {
        //             show?
        //         <div id="dropmenu">
        //             <Link to='hero' id='hyk' spy={true} smooth={true} offset={50} duration={500} style={{color: "white"}}><p>HOME</p></Link>
        //             <Link to='why' id='hyk'  spy={true} smooth={true} offset={50} duration={500} style={{color: "white"}}>FEATURES</Link>
        //             <Link to='aboutus' id='hyk'  spy={true} smooth={true} offset={50} duration={500} style={{color: "white"}}>ABOUT US</Link>
        //             <Link to='question' id='hyk'  spy={true} smooth={true} offset={50} duration={500} style={{color: "white"}}>CONTACT US</Link>
        //         </div>:null
        //         }
        //         <div className='hero'>
        //             <header>
        //                 <div className="logo">
        //                     <img src="./rapid2.png" alt="" />
        //                 </div>
        //                 <div className="navhero">
        //                     <Link id='spy' className='linkscroll' to='hero' spy={true} smooth={true} offset={50} duration={500} >HOME</Link>
        //                     <Link id='spy' className='linkscroll' to='why' spy={true} smooth={true} offset={50} duration={500}>FEATURES</Link>
        //                     <Link id='spy' className='linkscroll' to='aboutus' spy={true} smooth={true} offset={50} duration={500}>ABOUT US</Link>
        //                     <Link id='spy' className='linkscroll' to='question' spy={true} smooth={true} offset={50} duration={500}>CONTACT US</Link>
        //                 </div>
        //                 <IoMenu className='menu' onClick={()=>setShow(true)} onMouseLeave={()=>setShow(false)}/>
        //             </header>
        //             <div className="spacexr"></div>
        //             <div className="herosection">
        //                 <div className="platformwrap">
        //                     <div className="platform">
        //                         <h1>We are the best platform to manage a store</h1>
        //                         <span>The most complete and easiest stock management platform ever.</span>
        //                         <span>Take a trial and enjoy the features.</span>
        //                         <div>
        //                             <button className='getstart' onClick={handleGetStart}>Get Started</button>
        //                         </div>
        //                     </div>
        //                     <div className="bigpicture">
        //                         <img src="./retail photo.jpg" alt="" className='retailphoto'/>
        //                         <img src="./Dashboard.png" alt="" className='framepic'/>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="frame">
        //         <img src="./Dashboard.png" alt="" />
        //     </div>
        // </main>
    )
}

export default Header