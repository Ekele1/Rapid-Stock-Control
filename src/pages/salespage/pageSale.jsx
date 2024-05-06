import MainPage from "../../Components/MainpageOur/OurMain";
import Sales from "../../Components/productManagment/sales/Allsales";

const SalesPageManagement = () => {
    return(
        <>
            <MainPage page={<Sales />} colora2={"blue"}/>
        </>
    )
}

export default SalesPageManagement