import './aboutus.css'

const AboutUs=()=>{
    return(
        <div className="aboutuswrapper" id='aboutus'>
            <div className="space"></div>
            <div className="abouthead">
                <h2>About Us</h2>
            </div>
            <div>
            <div className="aboutcontent">
                <div className="aboutdiv">
                    <div>
                        <h2>Our Mision:</h2>
                        <p>
                            At Rapid Stock Control our mission is to empower small and medium scale 
                            enterprises to optimize their inventory management processes through 
                            innovative solutions . We strive to provide our clients with the tools and expertise they need to enhance efficiency, minimize costs, and maximize
                            costs, and maximize profitability.
                        </p>
                    </div>
                    <div>
                        <img src="./Blue2.png" alt="img" />
                    </div>
                </div>
            </div>
            <div className="aboutcontent">
                <div className="aboutdiv aboutdiv2">
                    <div>
                        <img src="ourvision.png" alt="" />
                    </div>
                    <div>
                    <h2>Our Vision:</h2>
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
            <div className="aboutcontent">
                <div className="aboutdiv">
                    <div>
                        <h2>Our Process:</h2>
                        <p>
                        Through the process, we provide  a usefriendly 
                        dashboard, sales tracking, order management ,
                        with product management and more for easy access.
                        </p>
                    </div>
                    <div>
                       <img src="./ourprocess.png" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutUs