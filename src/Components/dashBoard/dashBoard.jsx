import './dashbord.css'
import { TbCurrencyNaira, TbWeight } from "react-icons/tb";
import { Bar, Doughnut, Line} from "react-chartjs-2";
import { Chart as ChartJs, defaults, elements } from "chart.js/auto";
// import { userData,topSellingProduct,Monthly,Quarterly } from './data';
import { useEffect, useState } from 'react';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Dashboard =()=>{
    const [option, SetOption]= useState()
    const [allData, setAllData] = useState()
    const [weekly, setWeekly] = useState()
    const [monthly, setMonthly] = useState()
    const [quarterly, setQuaterly] = useState()

    const [salesSummaryMontly, setSalesSummaryMonthly] = useState()
    const [salesSummaryWeekly, setSalesSummaryWeekly] = useState()
    const [salesSummaryQuarterly, setSalesSummaryQuarterly] = useState()
    const [totalSales, setTotalSales] = useState({
        // state: false,
        sale: 0,
        type: "",
        // profit: 0
    })
    const [profitWeekly, setProfitWeekly] = useState()
    const [profitMonthly, setProfitMonthly] = useState()
    const [profitQuarterly, setProfitQuarterly] = useState()
    const [totalProfit, setTotalProfit] = useState({
        profit: 0,
        type: ""
    })

    const [topSellingProductMontly, setTopSellingProductMontly] = useState()
    const [topSellingProductWeekly, setTopSellingWeekly] = useState()
    const [topSellingProductQuarterly, setTopSellingQuarterly] = useState()
    const [topSellingProduct, setTopSellingProduct] = useState([{
        sellingProduct: 0,
        type: "",
    }])

    const [totalPurchaseWeekly, setTotalPurchaseWeekly] = useState()
    const [totalPurchaseMonthly, setTotalPurchaseMonthly] = useState()
    const [totalPurchaseQuarterly, setTotalPurchaseQuarterly] = useState()

    const [overallTotal, setOverAllTotal] = useState()
    const [OverallTotalPurchase, setOverAllTotalPurchase] = useState()
    

    const label = option === "weekly report"? weekly?.map((e)=> e.day): option === "monthly report"? monthly?.map((e)=>e.month): option === "quaterly report"? quarterly?.map((e)=>e.quarter): weekly?.map((e)=> e.day)
    const dataset = option === "weekly report"? weekly?.map((e)=> e.purchases): option === "monthly report"? monthly?.map((e)=>e.purchases): option === "quaterly report"? quarterly?.map((e)=>e.purchases): weekly?.map((e)=> e.purchases)
    const dataset2 = option === "weekly report"? weekly?.map((e)=> e.sales): option === "monthly report"? monthly?.map((e)=>e.sales): option === "quaterly report"? quarterly?.map((e)=>e.sales): weekly?.map((e)=> e.sales)
    // const datasets3 = option === "weekly report"? 
    const pieLabel = option === "weekly report"? topSellingProductWeekly?.map((e)=> e.productName): option === "monthly report"? topSellingProductMontly?.map((e)=> e.productName):option === "quaterly report"? topSellingProductQuarterly?.map((e)=> e.productName):topSellingProductWeekly?.map((e)=> e.productName)
    const pieDatasets = option === "weekly report"? topSellingProductWeekly?.map((e)=> e.totalSales):option === "monthly report"? topSellingProductMontly?.map((e)=> e.totalSales):option === "quaterly report"? topSellingProductQuarterly?.map((e)=> e.totalSales):topSellingProductWeekly?.map((e)=> e.totalSales)
    const hadleClick=(e)=>{
        SetOption(e.target.value)
    }

    const handleTotalSales=()=>{
    option === "weekly report"? setTotalSales({type: "weekly", sale: salesSummaryWeekly}): option === "monthly report"? setTotalSales({type: "monthly", sale: salesSummaryMontly}): option === "quaterly report"? setTotalSales({type: "quarter", sale: salesSummaryQuarterly}): setTotalSales({type: "weekly", sale: salesSummaryWeekly})
        // setTotalSale(total)
    }

    const handleProfit=()=>{
        option === "weekly report"? setTotalProfit({profit: profitWeekly, type: "weekly"}):option === "monthly report"? setTotalProfit({profit: profitMonthly, type: "monthly"}):option === "quaterly report"? setTotalProfit({profit: profitQuarterly, type: "quarterly"}): setTotalProfit({profit: profitWeekly, type: "weekly"})
    }

    const handleTopSellingProducts =()=>{
        option === "weekly report"? setTopSellingProduct({sellingProduct: topSellingProductWeekly, type: "weekly"}) : option === "monthly report"? setTopSellingProduct({sellingProduct: topSellingProductMontly, type: "monthly"}): option === "quaterly report"? setTopSellingProduct({sellingProduct: topSellingProductQuarterly, type: "quaterly"}) : setTopSellingProduct({sellingProduct: topSellingProductWeekly, type: "weekly"})
    }

    // console.log("total", quarterly[0]?.purchases)

    const handleTotalPurchase=()=>{
        let totalPurchaseMonthly1 = 0
        monthly?.forEach(month => {
            totalPurchaseMonthly1 += month.purchases;
        })
        setTotalPurchaseMonthly(totalPurchaseMonthly1)

        let totalPurchaseWeekly1 = 0
        weekly?.forEach(day => {
            totalPurchaseWeekly1 += day.purchases
        })
        setTotalPurchaseWeekly(totalPurchaseWeekly1)

        let totalPurchaseQuarterly1 = 0
        quarterly?.forEach(quarter => {
            totalPurchaseQuarterly1 += quarter.purchases
        })
        setTotalPurchaseQuarterly(totalPurchaseQuarterly1)
    }

    useEffect(()=>{
        hadleClick
        handleTotalSales()
        handleProfit()
        handleTopSellingProducts()
        handleTotalPurchase()
    },[option])

    const handleSumaryOfSalesRoute=()=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const id = userId.userId
        const url = `https://rapid-stock-control-osqb.onrender.com/sales/sales-summary/${id}`
        const token = userId.token
        
        const headers = {
            Authorization:`Bearer ${token}`
        }
        fetch(url,{headers})
        .then((Response)=>Response.json())
        .then((data)=> {
            console.log("sumary",data.totalAmountSold)
            setSalesSummaryMonthly(data.salesSummaryMonthly.totalSales)
            setSalesSummaryQuarterly(data.salesSummaryQuarterly.totalSales)
            setSalesSummaryWeekly(data.salesSummaryWeekly.totalSales)
            setProfitMonthly(data.salesSummaryMonthly.totalProfit)
            setProfitQuarterly(data.salesSummaryQuarterly.totalProfit)
            setProfitWeekly(data.salesSummaryWeekly.totalProfit)
            setTopSellingProductMontly(data.salesSummaryMonthly.topSellingProducts)
            setTopSellingQuarterly(data.salesSummaryQuarterly.topSellingProducts)
            setTopSellingWeekly(data.salesSummaryWeekly.topSellingProducts)
            setOverAllTotal(data.totalAmountSold)
        })
        .catch((error)=> {
            console.log("error",error)
        })
    }
    const handleSumaryOfPurchaseRoute=()=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const id = userId.userId
        const url = `https://rapid-stock-control-osqb.onrender.com/purchases/purchase-summary/${id}`
        const token = userId.token
        
        const headers = {
            Authorization:`Bearer ${token}`
        }
        fetch(url,{headers})
        .then((Response)=>Response.json())
        .then((data)=> {
            console.log("sumary",data)
            setOverAllTotalPurchase(data?.totalAmountPurchased)
            
        })
        .catch((error)=> {
            console.log("error",error)
        })
    }

    useEffect(()=>{
        handleSumaryOfPurchaseRoute()
    },[])
    useEffect(()=>{
        handleSumaryOfSalesRoute()
    },[])
    
    

    const handleFetchData=()=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const id = userId.userId
        const url = `https://rapid-stock-control-osqb.onrender.com/sales/barchart/${id}`
        const token = userId.token
        
        const headers = {
            Authorization:`Bearer ${token}`
        }
        fetch(url,{headers})
        .then((Response)=>Response.json())
        .then((data)=> {
            // console.log("all sales",data)
            setWeekly(data.weeklyrecord)
            setMonthly(data.monthlyrecord)
            setQuaterly(data.quarterlyrecord)
        })
        .catch((error)=> {
            console.log("error",error)
        })
        }
        useEffect(()=>{
            handleFetchData()
        },[])
        // console.log("weekly",monthly)

        // const handleGetSaleSummary=()=>{
        //     const userId = JSON.parse(localStorage.getItem("userInformation"))
        //     const id = userId.userId
        //     const url = `https://rapid-stock-control-osqb.onrender.com/sales/sales-summary/${id}`
        //     const token = userId.token
            
        //     const headers = {
        //         Authorization:`Bearer ${token}`
        //     }
        //     fetch(url,{headers})
        //     // .then((Response)=>Response.json())
        //     .then((data)=> {
        //         console.log(data)
        //         // setWeekly(data.weeklyrecord)
        //         // setMonthly(data.monthlyrecord)
        //         // setQuaterly(data.quarterlyrecord)
        //     })
        //     .catch((error)=> {
        //         console.log("error",error)
        //     })
        //     useEffect(()=>{
        //         handleGetSaleSummary()
        //     },[])
        // }

        // option === "weekly report"? totalPurchaseWeekly : option ==="monthly report"? totalPurchaseMonthly === "quaterly report"? totalPurchaseQuarterly : null 

    return(
       <>
        <div className="dashboardwrapper">
            <div className="dashboard">
                <div className="head">
                    <h1>DASHBOARD</h1>
                </div>
                <div className="available">
                    <div className='avail'>
                        <div className="x1 g"></div>
                        <div className="xx">
                            <h3>Total Sales</h3>
                            <div style={{display: 'flex'}}>
                                <TbCurrencyNaira className='naira'/>{
                                    totalSales?.type==="weekly"? <p>{totalSales.sale}</p>: totalSales?.type === "monthly"? <p>{totalSales.sale}</p>: totalSales?.type ==="quarter"?<p>{totalSales.sale}</p>: null
                                }
                            </div>
                        </div>
                    </div>
                    <div className='avail'>
                        <div className="x1 p"></div>
                        <div className="xx">
                            <h3>Total Purchases</h3>
                            <div style={{display: 'flex'}}>
                                <TbCurrencyNaira className='naira'/><p>{option === "weekly report"? totalPurchaseWeekly: option === "monthly report"? totalPurchaseMonthly: option === "quarterly report" ? totalPurchaseQuarterly : totalPurchaseWeekly}</p>
                            </div>
                        </div>
                    </div>
                    <div className='avail'>
                        <div className="x1 b"></div>
                        <div className="xx">
                            <h3>Profit Made</h3>
                            <div style={{display: 'flex'}}>
                                <TbCurrencyNaira className='naira'/>{
                                        totalProfit?.type === "weekly"? <p>{totalProfit?.profit}</p>:totalProfit?.type === "monthly"? <p>{totalProfit?.profit}</p>: totalProfit?.type === "quarterly"? <p>{totalProfit?.profit}</p>: null
                                    }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="board2">
                    <div className="bar">
                        <select name="view" id="view" onClick={hadleClick}>
                            <option value="view">View</option>
                            <option value="weekly report">Weekly report</option>
                            <option value="monthly report">Monthly report</option>
                        <option value="quaterly report">Quarterly report</option>
                        </select>
                        <Bar 
                            data={{
                                labels: label,
                                datasets:[
                                    {
                                        label: "Purchases",
                                        data: dataset,
                                        backgroundColor: ["#EC7D17"],
                                        borderRadius: 5
                                    },
                                    {
                                        label: "Sales",
                                        data: dataset2,
                                        backgroundColor: ["green"],
                                        borderRadius: 5
                                    }
                                ]
                            }}
                            options={{
                                plugins:{
                                  title:{
                                    text: "Sales & Purchases",
                                    font: '12px',
                                    
                                    
                                  }
                                }
                              }}
                        />
                    </div>
                    <div className="pie">
                        <Doughnut 
                            data={{
                                labels: pieLabel,
                                datasets:[
                                    {
                                        label:"top selling products",
                                        data: pieDatasets,
                                        backgroundColor: [
                                            "#3366CC", // Blue
                                            "#DC3912", // Red
                                            "#FF9900", // Orange
                                            "#109618", // Green
                                            "#990099", // Purple
                                            "#0099C6", // Cyan
                                            "#DD4477", // Pink
                                            "#66AA00", // Lime
                                            "#B82E2E", // Maroon
                                            "#316395", // Dark Blue
                                            "#994499", // Dark Purple
                                            "#22AA99", // Teal
                                            "#AAAA11", // Olive
                                            "#6633CC", // Dark Purple
                                            "#E67300", // Dark Orange
                                           ]
                                    }
                                ]
                            }}
                            options={{
                                plugins:{
                                  title:{
                                    text: "Top selling Products",
                                    font: '12px'
                                  }
                                }
                              }}
                        />
                    </div>
                </div>
                <div className="total">
                    <div className="recent"><h4>Recent Stock History</h4></div>
                    <div className="total2">
                        <div className="box">
                            <h3>Overall Sales Total</h3>
                            <p>{overallTotal}</p>
                        </div>
                        <div className="box">
                            <h3>Overall Purchase Total</h3>
                            <p>{OverallTotalPurchase}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Dashboard