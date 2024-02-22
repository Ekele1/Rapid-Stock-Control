import './dashbord.css'
import { TbCurrencyNaira, TbWeight } from "react-icons/tb";
import { Bar, Doughnut, Line} from "react-chartjs-2";
import { Chart as ChartJs, defaults, elements } from "chart.js/auto";
import { userData,topSellingProduct,Monthly,Quarterly } from './data';
import { useEffect, useState } from 'react';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Dashboard =()=>{
    const [option, SetOption]= useState()

    const label = option === "weekly report"? userData.map((e)=> e.days): option === "monthly report"? Monthly.map((e)=>e.month): option === "quaterly report"? Quarterly.map((e)=>e.quarter): userData.map((e)=> e.days)
    const dataset = option === "weekly report"? userData.map((e)=> e.purchases): option === "monthly report"? Monthly.map((e)=>e.purchases): option === "quaterly report"? Quarterly.map((e)=>e.purchases): userData.map((e)=> e.purchases)
    const dataset2 = option === "weekly report"? userData.map((e)=> e.sales): option === "monthly report"? Monthly.map((e)=>e.sales): option === "quaterly report"? Quarterly.map((e)=>e.sales): userData.map((e)=> e.sales)
    const pieLabel = topSellingProduct.map((e)=> e.product)
    const pieDatasets = topSellingProduct.map((e)=>e.amount)
    const hadleClick=(e)=>{
        SetOption(e.target.value)
    }

    useEffect(()=>{
        hadleClick
    },[option])
    // console.log(option)
    return(
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
                                <TbCurrencyNaira className='naira'/><p>{option === "weekly report"?60350.90: option==="monthly report"? 2805000: option === "quaterly report"? 70000000: null}</p>
                            </div>
                        </div>
                    </div>
                    <div className='avail'>
                        <div className="x1 p"></div>
                        <div className="xx">
                            <h3>Total Purchases</h3>
                            <div style={{display: 'flex'}}>
                                <TbCurrencyNaira className='naira'/><p>{option === "weekly report"?60350.90: option==="monthly report"? 2805000: option === "quaterly report"? 70000000: null}</p>
                            </div>
                        </div>
                    </div>
                    <div className='avail'>
                        <div className="x1 b"></div>
                        <div className="xx">
                            <h3>Payments Received</h3>
                            <div style={{display: 'flex'}}>
                                <TbCurrencyNaira className='naira'/><p>{option === "weekly report"?60350.90: option==="monthly report"? 2805000: option === "quaterly report"? 70000000: null}</p>
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
                            <h3>Total Sales Items</h3>
                            <p>419</p>
                        </div>
                        <div className="box">
                            <h3>Total Purchase Items</h3>
                            <p>122</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard