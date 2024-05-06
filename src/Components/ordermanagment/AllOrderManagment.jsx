import { useEffect, useState } from 'react';
import './orderManagments.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoSearchSharp } from "react-icons/io5";
import { BeatLoader } from "react-spinners";
import axios from 'axios';
import toast from 'react-hot-toast';

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
    const [searchshow, setSearchShow]= useState(false)
    const [deleteId, setDeleteId] = useState()
    const [deleteOption, setDeleteOption] = useState()
    const [editOption, seteditOption] = useState()

    const [editCustomerName, setEditCustomerName] = useState("")
    const [editOrderDate, setEditOrderDate] = useState("")
    const [editProductName, setEditProductName] = useState("")
    const [editQuantity, setEditQuantity] = useState("")
    const [editPaymentStatus, setEditPaymentStatus] = useState("")
    const [editShipmentStatus, setEditShipmentStatus] = useState("")
    const [editDetails, setEditDetails] = useState()


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
        setalltheOrder(data.data)
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

        const handleCreateOrder=(e)=>{
            e.preventDefault()
            setLoading(true);

            if(!customerName){
                setLoading(false)
                toast.error("customer Name field can't be left empty")
            }else if(!productName){
                setLoading(false)
                toast.error("product Name field can't be left empty")
            }else if(!paymentStatus){
                setLoading(false)
                toast.error("payment status field can't be left empty")
            }else if(!orderDate){
                setLoading(false)
                toast.error("order date field can't be left empty")
            }else if(!shipmentStatus){
                setLoading(false)
                toast.error("shipment status field can't be left empty")
            }else if(!unitPrice){
                setLoading(false)
                toast.error("unit price field can't be left empty")
            }else if(!quantity){
                setLoading(false)
                toast.error("quantity field can't be left empty")
            }
            else{
                const userId = JSON.parse(localStorage.getItem("userInformation"))
                const id = userId.userId
                 const token = userId.token
    
                 const headers = {
                    Authorization:`Bearer ${token}`
                }
                const url = `https://rapid-stock-control-osqb.onrender.com/orders/record-order/${id}/${orderId}`
    
                axios.post(url, data,{headers})
                .then((data)=>{
                    // console.log(data)
                    setLoading(false)
                    setShow(false)
                    getAllOrders()
                })
                .catch((error)=>{console.log(error)
                    setLoading(false)
                })
            }


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
        setProducts(data.data)
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
    const handleEditOrder=()=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const iduser = userId.userId
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const myQuantity = parseInt(editQuantity)

        const dataObject = {
            customerName: editCustomerName,
            orderDate: editOrderDate,
            productName: editProductName,
            quantity: myQuantity,
            paymentStatus: editPaymentStatus,
            shipmentStatus: editShipmentStatus,
        }
        
        setLoading(true)
        const url = `https://rapid-stock-control-osqb.onrender.com/orders/updateorder/${editDetails._id}/${editDetails.productId}`

        axios.put(url,dataObject,{headers})
        .then((data)=> {
            console.log(data)
            setLoading(false)
            getAllOrders()
            seteditOption(false)
        })
        .catch((error)=> {
            setLoading(false)
            toast.error(error.response.data.message)
            // console.log(editDetails)
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
                editOption?
                <div className='editfunk'>
                    <div className="ordercancel"><ImCancelCircle onClick={()=>seteditOption(false)}/></div>
                            <div className='funkwrap'>
                        <div className="editfunkhold">
                            <div>
                                <p>Customer Name</p>
                                <input type="text" placeholder={editDetails.customerName} value={editCustomerName} onChange={(e)=>setEditCustomerName(e.target.value)} id='funkinput'/>
                            </div>
                            <div>
                                <p>Order Date</p>
                                <input type="text" placeholder={editDetails.orderDate} value={editOrderDate} onChange={(e)=>setEditOrderDate(e.target.value)} id='funkinput'/>
                            </div>
                        </div>
                        <div className="editfunkhold">
                            <div>
                                <p>Product Name</p>
                                <input type="text" placeholder={editDetails.productName} value={editProductName} onChange={(e)=>setEditProductName(e.target.value)} id='funkinput'/>
                            </div>
                            <div>
                                <p>Quantity</p>
                                <input type="number" placeholder={editDetails.quantity} value={editQuantity} onChange={(e)=>setEditQuantity(e.target.value)} id='funkinput'/>
                            </div>
                        </div>
                        <div className="editfunkhold">
                            <div>
                                <p>Payment Status</p>
                                <select name="paymentstatus" value={editPaymentStatus} onChange={(e)=>setEditPaymentStatus(e.target.value)} id="paymentstatus">
                                    <option value="chose-option">chose-option</option>
                                    <option value="paid">paid</option>
                                    <option value="not-paid">not-paid</option>
                                    <option value="pending">pending</option>
                                </select>
                            </div>
                            <div>
                                <p>Shipment Status</p>
                                <select name="paymentstatus" value={editShipmentStatus} onChange={(e)=>setEditShipmentStatus(e.target.value)} id="paymentstatus">
                                    <option value="chose-option">chose-option</option>
                                    <option value="shipped">shipped</option>
                                    <option value="not-shipped">not-shipped</option>
                                    <option value="pending">pending</option>
                                </select>
                            </div>
                        </div>
                        <div className="editfunkhold">
                            <button onClick={handleEditOrder}>
                                {
                                    loading?<BeatLoader />: "DONE"
                                }
                            </button>
                        </div>
                    </div>

                </div>: null
            }
            
            {
                show?
                <div className="orderstatus">
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
                        <input type="text" placeholder='search for a product' onFocus={()=>setSearchShow(true)}/>
                        <IoSearchSharp style={{cursor: "pointer"}}/>
                    </div>
                </div>
                <div className="orderinputcont">
                    <div className="orderinputwrap">
                        <div>
                            <p>Customer Name</p>
                            <input type="text" value={customerName} onChange={(e)=>setCustomerName(e.target.value)}  />
                        </div>
                        <div>
                            <p>Order Date</p>
                            <input type="date" value={orderDate} onChange={(e)=>setOrderDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="orderinputwrap">
                        <div>
                            <p>Product Name</p>
                            <input type="text" value={productName}/>
                        </div>
                        <div>
                            <p>Quantity</p>
                            <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="orderinputwrap">
                        <div>
                            <p>Unit Price</p>
                            <input type="text" value={unitPrice} />
                        </div>
                        <div>
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
                        <FaEdit onClick={()=> {
                            seteditOption(true)
                            setEditDetails(e)
                        }} className='edit'/>
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