import { useEffect, useState } from 'react';
import './orderManagments.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoSearchSharp } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { BeatLoader } from "react-spinners";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import * as yup from 'yup'

const OrderManagment = ()=>{

    const [show, setShow]= useState(false)
    const [alltheorder, setalltheOrder] = useState([])
    const [products, setProducts]=useState([])
    const [productName, setProductName]= useState("")
    const [unitPrice, setUnitPrice]= useState()
    const [customerName, setCustomerName]= useState("")
    const [orderDate, setOrderDate]= useState("")
    const [quantity, setQuantity]= useState()
    const [paymentStatus, setPaymentStatus]= useState("")
    const [shipmentStatus, setShipmentStatus]= useState("")
    const [orderId, setOrderId]=useState()
    const [loading, setLoading] = useState(false)
    const [error, setError]= useState({isError: false, errortype: "", message: "" })
    const [searchshow, setSearchShow]= useState(false)
    const [deleteId, setDeleteId] = useState()
    const [deleteOption, setDeleteOption] = useState()




    const getAllOrders=()=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const id = userId.userId
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
    const url = `https://rapid-stock-control-osqb.onrender.com/orders/ordersrecord/${id}`

    fetch(url,{headers})
    .then((Response)=> Response.json())
    .then((data)=> {
        // console.log(data)
        setalltheOrder(data.data)
        // setProducts(data.data)
        // console.log(data.data)
    })
    .catch((error)=> {
        console.log("error",error)
    })
    }


    useEffect(() => {
     getAllOrders()
        
    }, [])


        const unit = parseInt(quantity)

        const data = {
            customerName: customerName,
            productName: productName,
            paymentStatus: paymentStatus,
            orderDate: orderDate,
            shipmentStatus: shipmentStatus,
            unitPrice: unitPrice,
            quantity: unit,
        }

        const handleCreateOrder=()=>{
            const userId = JSON.parse(localStorage.getItem("userInformation"))
            const id = userId.userId
             const token = userId.token

             const headers = {
                Authorization:`Bearer ${token}`
            }
            setLoading(true);
            const url = `https://rapid-stock-control-osqb.onrender.com/orders/record-order/${id}/${orderId}`

            axios.post(url, data,{headers})
            // .then((response)=> response.json())
            .then((data)=>{
                // console.log(data)
                setLoading(false)
                setShow(false)
                getAllOrders()
            })
            .catch((error)=>{console.log(error)
                setLoading(false)
                setError({isError:true, errortype: "required", message: error.response.data.message})
            })

        }


    const getAllproduct=()=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const id = userId.userId
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
    const url = `https://rapid-stock-control-osqb.onrender.com/product/viewallstock/${id}`

    fetch(url,{headers})
    .then((Response)=> Response.json())
    .then((data)=> {
        // console.log(data)
        // setSavedProduct(data.data)
        setProducts(data.data)
        // console.log(data.data)
    })
    .catch((error)=> {
        console.log("error",error)
    })
    }


    useEffect(() => {
     getAllproduct()
        
    }, [])
    

    const handleDeleteOrder=()=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const iduser = userId.userId
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
        setLoading(true)
        const url = `https://rapid-stock-control-osqb.onrender.com/orders/deleteorder/${deleteId?._id}/${iduser}`

        fetch(url,{
            method: 'DELETE',
            headers: headers
        })
        .then((response)=> {response.json()
            // console.log(response)
        })
        .then((data)=> {
            // console.log(data)
            setLoading(false)
            setDeleteOption(false)
            getAllOrders()
        })
        .catch((error)=> {console.log(error)
            setLoading(false)
            console.log(error)
        })
    }


    return(
        <div className="ordermanagmentwrap">

            {
                deleteOption? <div className='deletefunk'>
                    <div className="ordercancel"><ImCancelCircle onClick={()=>setDeleteOption(false)}/></div>
                    <div className="deleteoptiondiv">
                        <p>Are you sure you want to delete this order data?</p>
                        <button className='orderdelete' onClick={()=> handleDeleteOrder(deleteId?._id)}>
                            {
                                loading? <BeatLoader />: "DELETE"
                            }
                        </button>
                    </div>
                </div>:null
            }
            
            {
                show?
                <div className="orderstatus">
                    
                    {/* <form action="" className='orderstatus' onSubmit={handleSubmit(onSubmit)}> */}
                    <div className="cancelink">
                    <ImCancelCircle className='cancel' onClick={()=>setShow(false)}/>
                </div>
                {
                    searchshow?<div className="salessearch">
                        {
                            products?.map((e, id)=>(
                                <p key={id}
                                onClick={()=>{
                                    setProductName(e.productName)
                                    setUnitPrice(e.sellingPrice)
                                    setOrderId(e._id)
                                    setSearchShow(false)
                                }}
                                >{e.productName}</p>
                            ))
                        }
                    </div>:null
                }
                <div className="searchbox">
                    <div className="searchdiv">
                        <input type="text" onFocus={()=>setSearchShow(true)}/>
                        <IoSearchSharp style={{cursor: "pointer"}}/>
                    </div>
                </div>
                <div className="orderinputcont">
                    <div className="orderinputwrap">
                        <div>
                            <p>Customer Name</p>
                            <input type="text" value={customerName} onChange={(e)=>setCustomerName(e.target.value)}  />
                                {/* {
                                    errors.customerName ? <p id='errorm'>{errors.customerName.message}</p> : null
                                } */}
                        </div>
                        <div>
                            <p>Order Date</p>
                            <input type="date" value={orderDate} onChange={(e)=>setOrderDate(e.target.value)} />
                                {/* {
                                    errors.orderDate ? <p id='errorm'>{errors.orderDate.message}</p> : null
                                    }   */}
                        </div>
                    </div>
                    <div className="orderinputwrap">
                        <div>
                            <p>Product Name</p>
                            <input type="text" value={productName}/>
                            {/* {
                                    errors.productName ? <p id='errorm'>{errors.productName.message}</p> : null
                                } */}
                        </div>
                        <div>
                            <p>Quantity</p>
                            <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                                {/* {
                                    errors.quantity ? <p id='errorm'>{errors.quantity.message}</p> : null
                                } */}
                        </div>
                    </div>
                    <div className="orderinputwrap">
                        <div>
                            <p>Unit Price</p>
                            <input type="text" value={unitPrice} />
                            {/* {
                                    errors.unitPrice ? <p id='errorm'>{errors.unitPrice.message}</p> : null
                                } */}
                        </div>
                        <div>
                            {/* <p>Total Amount</p>
                            <input type="text" />
                            {
                                error.isError && error.errortype === "totalamount"?<p className='error'>{error.message}</p>:null
                            } */}
                        </div>
                    </div>
                    <div className="orderinputwrap">
                        <div>
                            <p>Payment Status</p>
                            <select name="payment" id="payment" value={paymentStatus} onChange={(e)=>setPaymentStatus(e.target.value)} >
                                <option value="select status">Select Status</option>
                                <option value="Paid">Paid</option>
                                <option value="Not-Paid">Not Paid</option>
                                <option value="Pending">Pending</option>
                            </select>
                                {/* {
                                    errors.paymentStatus ? <p id='errorm'>{errors.paymentStatus.message}</p> : null
                                } */}
                        </div>
                        <div>
                            <p>Shipment Status</p>
                            <select name="shipment" id="shipment" value={shipmentStatus} onChange={(e)=>setShipmentStatus(e.target.value)} >
                                <option value="select status">Select Status</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Not-Shipped">Not shipped</option>
                                <option value="Pending">Pending</option>
                            </select>
                               
                        </div>
                    </div>
                    {
                        error.isError?<p className='error'>{error.message}</p>: null
                    }
                    <div className="orderinputwrap orderbuttonwrap" id='buttunsettle'>
                        <button className='enterbutton' onClick={()=>handleCreateOrder()}>
                            {
                                loading?<BeatLoader color='white'/> : "SAVE"
                            }
                        </button>
                    </div>
                    
                </div>
                
            </div>:null
            }
            <div className="ordermanagment">
                <div className="boxes">
                    <button className='Add' onClick={()=>setShow(true)}>Add</button>
                </div>
                <div className="boxes"><h4>Order Managment</h4></div>
            </div>
            <div className='mediawrap'>

            <div className="orderwrap">
                <div className='order'>
                    <div className="div8">
                        <p>Customer</p>
                        <p>Name</p>
                    </div>
                    <div className="div8"><p>Order</p><p>Date</p></div>
                    <div className="div8"><p>Product</p><p>Name</p></div>
                    <div className="div8"><p>Quantity</p></div>
                    <div className="div8"><p>Unit</p><p>Price</p></div>
                    <div className="div8"><p>Total</p><p>Amount</p></div>
                    <div className="div8"><p>Payment</p><p>Status</p></div>
                    <div className="div8"><p>Shipment</p><p>Status</p></div>
                    <div className="div8"></div>
                </div>
            </div>
            <div className="contentwrap">
                {
                    alltheorder?.map((e,id)=>(
                <div className="content" key={id}>
                    <div className="div9">
                        <p>{e.customerName}</p>
                    </div>
                    <div className="div9">
                        <p>{e.orderDate}</p>
                    </div>
                    <div className="div9">
                        <p>{e.productName}</p>
                    </div>
                    <div className="div9">
                        <p>{e.quantity}</p>
                    </div>
                    <div className="div9">
                        <p>{e.unitPrice}</p>
                    </div>
                    <div className="div9">
                        <p>{e.totalAmount}</p>
                    </div>
                    <div className="div9">
                        <p>{e.paymentStatus}</p>
                    </div>
                    <div className="div9">
                        <p>{e.shipmentStatus}</p>
                    </div>
                    <div className="div9 div10">
                        <MdDeleteForever className='delete2' onClick={()=>{
                            setDeleteId(e)
                            setDeleteOption(true)
                        }}/>
                        <FaEdit className='edit'/>
                    </div>
                </div>
                ))
                } 
            </div>
            </div>
        </div>
    )
}

export default OrderManagment