import './teamour.css'

const OurTeam =()=>{
    return(
        <div className="ourteamwrap">
            <div className="ourteamtitle">
                <h2>Meet Our Team!</h2>
            </div>
            <div className="allofus">
                <div className="ouractualimg">
                    <div className="acualhold">
                        <div className="eben">
                            <img src="./eben.jpg" alt="" />
                        </div>
                        <div className="ebeninfo">
                            <h2>Name: <span>Ebenezer</span></h2>
                            <h2>Stack: <span>BackEnd Developer</span></h2>
                            <p>
                            I am a motivated Backend Developer with a solid foundation in JavaScript, 
                            specializing in Node.js. My expertise includes creating efficient server-side 
                            solutions, developing RESTful APIs, and collaborating with frontend teams to 
                            deliver seamless user experiences
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ouractualimg">
                    <div className="acualhold">
                        <div className="eben">
                            <img src="./jerry2.jpg" alt="" />
                        </div>
                        <div className="ebeninfo">
                            <h2>Name: <span>Ekele Jeremiah</span></h2>
                            <h2>Stack: <span>FrontEnd Developer</span></h2>
                            <p>
                                As a frontend Developer, i blend creativity with technical
                                prowess to craft immersive user experiences, constantly pushing
                                the boundaries of web design.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ouractualimg">
                    <div className="acualhold">
                        <div className="eben">
                            <img src="./temmy.jpg" alt="" />
                        </div>
                        <div className="ebeninfo">
                            <h2>Name: <span>Temmy Atanda</span></h2>
                            <h2>Stack: <span>FrontEnd Developer</span></h2>
                            <p>
                                As a female FrontEnd developer, i infuse creativity and tecnical skill
                                to create captivating user experience, continually pushing the boundaries
                                of web design with my unique perspective and passion for innovation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ouractualimg">
                    <div className="acualhold">
                        <div className="eben">
                            <img src="./afeez.jpg" alt="" />
                        </div>
                        <div className="ebeninfo">
                            <h2>Name: <span>Afeez Akande</span></h2>
                            <h2>Stack: <span>BackEnd Developer</span></h2>
                            <p>
                                As a BackEnd developer, i engineer robust and efficient systems, orchestrating
                                the behind-the-scenes magic that powers seamless digital experiences, fueled by
                                a passion for optimizing performance and solving complex technical challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam