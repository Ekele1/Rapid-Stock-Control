// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export const AlluserData =()=>{
    
//     const [allData, setAllData] = useState([])

//     const handleFetchData=()=>{
//     const userId = JSON.parse(localStorage.getItem("userInformation"))
//     const id = userId.userId
//     const url = `https://rapid-stock-control-osqb.onrender.com/sales/sales&orders-by-interval/${id}`
//     const token = userId.token
//     const headers = {
//         Authorization:`Bearer ${token}`
//     }
//     fetch(url,{headers})
//     .then((Response)=> Response.json())
//     .then((data)=> {
//         console.log(data)
//         setAllData(data.data.salesAndOrders)
//     })
//     .catch((error)=> {
//         console.log("error",error)
//     })
//     }
//     useEffect(()=>{
//         handleFetchData()
//     },[])

//     // return(
//     //     handleFetchData()
//     // )
// }