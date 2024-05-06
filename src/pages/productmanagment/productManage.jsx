import MainPage from "../../Components/MainpageOur/OurMain";
import Productmanagment from "../../Components/productManagment/AllProductManagment";

const ManageProductPage = () => {
    return(
        <>
            <MainPage page={<Productmanagment />} colora4={"blue"}/>
        </>
    )
}

export default ManageProductPage