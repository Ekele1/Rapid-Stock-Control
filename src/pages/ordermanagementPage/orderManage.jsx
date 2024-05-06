import OrderManagment from "../../Components/ordermanagment/AllOrderManagment"
import MainPage from "../../Components/MainpageOur/OurMain"

const ManageOrderPage = () => {
    return(
        <>
            <MainPage page={<OrderManagment />} colora5={"blue"}/>
        </>
    )
}

export default ManageOrderPage