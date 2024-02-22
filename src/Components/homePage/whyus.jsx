import './whyus.css'

const WhyUs=()=>{
    return(
        <>
            <div className="why-us-wrapper" >
                
                <div className="why-us">
                    <div className="why"><p>Why you should choose us</p></div>
                    <div className="reason">
                        <div className="leftx1">
                            <div className="icon">
                                <div className="iconhold">
                                    <img src="./pic.png" alt="pic" />
                                </div>
                            </div>
                            <div className="write-up">
                                <h1>Intuitive Design:</h1>
                                <p>
                                    Our user-friendly interface ensures a seamlessinventory management experience, 
                                    empowering you to effortlessly handle your 
                                    stock without the hassle to extensive training.
                                </p>
                            </div>
                        </div>
                        <div className="leftx1">
                            <div className="icon">
                                <div className="iconhold">
                                    <img src="./pic.png" alt="pic" />
                                </div>
                            </div>
                            <div className="write-up">
                                <h1>Time-Saving Efficiency:</h1>
                                <p>
                                    Streamlined process and automated features in our software save valuable time, 
                                    allowing users to focus on core business activities and significantly boosting 
                                    overall operational efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="reason2">
                        <div className="leftx1">
                            <div className="icon">
                                <div className="iconhold">
                                    <img src="./pic.png" alt="pic" />
                                </div>
                            </div>
                            <div className="write-up">
                                <h1>Budget-Friendly Solution:</h1>
                                <p>
                                     Enjoy cost-effective inventory management without compromising on functionality. 
                                     Our software provides a practical and affordable alternative for small to medium-sized bussiness.
                                </p>
                            </div>
                        </div>
                        <div className="leftx1">
                            <div className="icon">
                                <div className="iconhold">
                                    <img src="./pic.png" alt="pic" />
                                </div>
                            </div>
                            <div className="write-up">
                                <h1>Scalable and Flexible:</h1>
                                <p>
                                    Grow your business confidently.
                                    Our solution is scalable and flexible, adapting to changing needs and ensuring long-term 
                                    relevance for your evolving enterprice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs