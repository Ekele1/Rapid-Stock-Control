import './aboutus.css'

const AboutUs=()=>{
    return(
        <div className="aboutuswrapper">
            <div className="aboutushold">
                <div className="aboutustitle">
                    {/* <img src="https://media.istockphoto.com/id/492025669/photo/group-of-business-people-holding-placards-forming-about-us.webp?b=1&s=170667a&w=0&k=20&c=oFkzIk2oztthcEXW87NSbGSSlHcwXohXrlpIYmGSlZ4=" alt="" /> */}
                    <span id='aboutus'>ABOUT US</span>
                </div>
                <div className="ourmission">
                    <div className="ourmissionimage">
                        <div className="imge">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </div>
                    </div>
                    <div className="missionstatement">
                        <h1>Our Vision</h1>
                        <p>
                        Our vision is to be the leading provider of inventory  management
                         solutions globally, renowned for our commitment to excellence, reliability,
                         and customer satisfaction. We envision a future where businesses
                         can effortlessly manage their inventory with precision and ease,enabling
                         them to focus on growth and sucess
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        // <div className="aboutuswrapper" id='aboutus'>
        //     {/* <div className="space"></div> */}
        //     <div className="abouthead">
        //         <h2>About Us</h2>
        //     </div>
        //     <div>
        //     <div className="aboutcontent">
        //         <div className="aboutdiv">
        //             <div>
        //                 <h2>Our Mision:</h2>
        //                 <p>
        //                     At Rapid Stock Control our mission is to empower small and medium scale 
        //                     enterprises to optimize their inventory management processes through 
        //                     innovative solutions . We strive to provide our clients with the tools and expertise they need to enhance efficiency, minimize costs, and maximize
        //                     costs, and maximize profitability.
        //                 </p>
        //             </div>
        //             <div>
        //                 <img src="./Blue2.png" alt="img" />
        //             </div>
        //         </div>
        //     </div>
        //     <div className="aboutcontent">
        //         <div className="aboutdiv aboutdiv2">
        //             <div>
        //                 <img src="ourvision.png" alt="" />
        //             </div>
        //             <div>
        //             <h2>Our Vision:</h2>
        //                 <p>
        //                 Our vision is to be the leading provider of inventory  management
        //                 solutions globally, renowned for our commitment to excellence, reliability,
        //                 and customer satisfaction. We envision a future where businesses
        //                 can effortlessly manage their inventory with precision and ease,enabling
        //                 them to focus on growth and sucess
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="aboutcontent">
        //         <div className="aboutdiv">
        //             <div>
        //                 <h2>Our Process:</h2>
        //                 <p>
        //                 Through the process, we provide  a usefriendly 
        //                 dashboard, sales tracking, order management ,
        //                 with product management and more for easy access.
        //                 </p>
        //             </div>
        //             <div>
        //                <img src="./ourprocess.png" alt="" />
        //             </div>
        //         </div>
        //     </div>
        //     </div>
        // </div>
    )
}

export default AboutUs