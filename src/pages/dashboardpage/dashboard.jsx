import MainPage from "../../Components/MainpageOur/OurMain";
import Dashboard from "../../Components/dashBoard/dashBoard";

const PageDashboard =()=>{
    return(
        <div>
            <MainPage page={<Dashboard />} colora1={"blue"}/>
        </div>
    )
}

export default PageDashboard