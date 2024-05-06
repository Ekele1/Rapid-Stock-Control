import MainPage from "../../Components/MainpageOur/OurMain";
import Purchase from "../../Components/purchase/AllPurchase";

const PurchasePage = () => {
    return(
        <>
            <MainPage page={<Purchase />} colora3={"blue"}/>
        </>
    )
}

export default PurchasePage