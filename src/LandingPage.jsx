import AboutUs from "./Components/homePage/aboutus"
import Header from "./Components/homePage/heropage"
import Question from "./Components/homePage/question"
import WhyUs from "./Components/homePage/whyus"
import OurTeam from "./Components/homePage/ourteam"
// import AboutUs from "./Components/homePage/aboutus"

const HomePage =()=>{
    return(
        <>
            <Header/>
            <AboutUs />
            <OurTeam />
            <WhyUs />
            <Question />
        </>
    )
}

export default HomePage