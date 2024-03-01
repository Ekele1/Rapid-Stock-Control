import { useEffect, useState } from 'react';
import './orderManagments.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoAddCircleOutline } from "react-icons/io5";

const OrderManagment = ()=>{

    const [customerName, setCustomerName]= useState()
    const [OrderDate, setOrderDate]= useState()
    const [ProductName, setProductName]= useState()
    const [Quantity, setQuantity]= useState()
    const [unitPrice, setUnitPrice]= useState()
    const [totalAmount, setTotalAmount]= useState()
    const [paymentStatus, setPaymentStatus]= useState()
    const [shipmentStatus, setShipmentStatus]= useState()
    const [show, setShow]= useState(false)
    const [alltheorder, setalltheOrder] = useState([])
    const [error, setError]= useState({isError: false, errortype: "", message: "" })

    const order = {
        customerName: customerName,
        OrderDate: OrderDate,
        ProductName: ProductName,
        Quantity: Quantity,
        unitPrice: unitPrice,
        totalAmount: totalAmount,
        paymentStatus: paymentStatus,
        shipmentStatus:shipmentStatus,
    }

    const handleEnter=(e)=>{
        e.preventDefault()
        if(!customerName){
            setError({isError: true, errortype: "customername", message: "you can't leave this field blank"})
        }else if(!OrderDate){
            setError({isError: true, errortype: "orderdate", message: "you can't leave this field blank"})
        }else if(!ProductName){
            setError({isError: true, errortype: "productname", message: "you can't leave this field blank"})
        }else if(!Quantity){
            setError({isError: true, errortype: "quantity", message: "you can't leave this field blank"})
        }else if(!unitPrice){
            setError({isError: true, errortype: "unitprice", message: "you can't leave this field blank"})
        }else if(!totalAmount){
            setError({isError: true, errortype: "totalamount", message: "you can't leave this field blank"})
        }else if(!paymentStatus){
            setError({isError: true, errortype: "paymentststus", message: "you can't leave this field blank"})
        }else if(!shipmentStatus){
            setError({isError: true, errortype: "shipmentstatus", message: "you can't leave this field blank"})
        }else{
            
            // const olddata = JSON.parse(localStorage.getItem("order")) || []
            // const newdata = [...olddata, order]
            // localStorage.setItem("order",JSON.stringify(newdata))
            setShow(false)
        }
        
    }

    useEffect(()=>{
        const allOrder = JSON.parse(localStorage.getItem("order"))
        setalltheOrder(allOrder)
    },[])
    

    const handleDelete=(index)=>{
        const updatedItems = alltheorder.filter(e => e.id !== index)
        setalltheOrder(updatedItems)
        localStorage.setItem("order", JSON.stringify(updatedItems))
    }

    return(
        <div className="ordermanagmentwrap">
            {
                show?
                <div className="orderstatus">
                <div className="cancelink">
                    <ImCancelCircle className='cancel' onClick={()=>setShow(false)}/>
                </div>
                <div className="orderinputcont">
                    <div className="orderinputwrap">
                        <div>
                            <p>Customer Name</p>
                            <input type="text" value={customerName} onChange={(e)=>setCustomerName(e.target.value)}/>
                            {
                                error.isError && error.errortype === "customername"?<p className='error'>{error.message}</p>:null
                            }
                        </div>
                        <div>
                            <p>Order Date</p>
                            <input type="text" value={OrderDate} onChange={(e)=>setOrderDate(e.target.value)}/>
                            {
                                error.isError && error.errortype === "orderdate"?<p className='error'>{error.message}</p>:null
                            }
                        </div>
                    </div>
                    <div className="orderinputwrap">
                        <div>
                            <p>Product Name</p>
                            <input type="text" value={ProductName} onChange={(e)=>setProductName(e.target.value)}/>
                            {
                                error.isError && error.errortype === "productname"?<p className='error'>{error.message}</p>:null
                            }
                        </div>
                        <div>
                            <p>Quantity</p>
                            <input type="text" value={Quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                            {
                                error.isError && error.errortype === "quantity"?<p className='error'>{error.message}</p>:null
                            }
                        </div>
                    </div>
                    <div className="orderinputwrap">
                        <div>
                            <p>Unit Price</p>
                            <input type="text" value={unitPrice} onChange={(e)=>setUnitPrice(e.target.value)}/>
                            {
                                error.isError && error.errortype === "unitprice"?<p className='error'>{error.message}</p>:null
                            }
                        </div>
                        <div>
                            <p>Total Amount</p>
                            <input type="text" value={totalAmount} onChange={(e)=>setTotalAmount(e.target.value)}/>
                            {
                                error.isError && error.errortype === "totalamount"?<p className='error'>{error.message}</p>:null
                            }
                        </div>
                    </div>
                    <div className="orderinputwrap">
                        <div>
                            <p>Payment Status</p>
                            <select name="payment" id="payment" value={paymentStatus} onChange={(e)=>setPaymentStatus(e.target.value)}>
                                <option value="select status">Select Status</option>
                                <option value="Paid">Paid</option>
                                <option value="Not Paid">Not Paid</option>
                                <option value="Pending">Pending</option>
                            </select>
                            {
                                error.isError && error.errortype === "paymentstatus"?<p className='error'>{error.message}</p>:null
                            }
                        </div>
                        <div>
                            <p>Shipment Status</p>
                            <select name="shipment" id="shipment" value={shipmentStatus} onChange={(e)=>setShipmentStatus(e.target.value)}>
                                <option value="select status">Select Status</option>
                                <option value="Paid">Shipped</option>
                                <option value="Not Paid">Not shipped</option>
                                <option value="Pending">Pending</option>
                            </select>
                            {
                                error.isError && error.errortype === "shipmentstatus"?<p className='error'>{error.message}</p>:null
                            }
                        </div>
                    </div>
                    <div className="orderinputwrap orderbuttonwrap" id='buttunsettle'>
                        <button className='enterbutton' onClick={handleEnter}>SAVE</button>
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
                        <p>{e.OrderDate}</p>
                    </div>
                    <div className="div9">
                        <p>{e.ProductName}</p>
                    </div>
                    <div className="div9">
                        <p>{e.Quantity}</p>
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
                        <MdDeleteForever className='delete2' onClick={()=>handleDelete(id)}/>
                        <FaEdit className='edit'/>
                    </div>
                </div>
                    ))
                }
                <div className="content" >
                    <div className="div9">
                        <p></p>
                    </div>
                    <div className="div9">
                        <p></p>
                    </div>
                    <div className="div9">
                        <p></p>
                    </div>
                    <div className="div9">
                        <p></p>
                    </div>
                    <div className="div9">
                        <p></p>
                    </div>
                    <div className="div9">
                        <p></p>
                    </div>
                    <div className="div9">
                        <p></p>
                    </div>
                    <div className="div9">
                        <p></p>
                    </div>
                    <div className="div9 div10">
                        <MdDeleteForever className='delete2' onClick={()=>handleDelete(id)}/>
                        <FaEdit className='edit'/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default OrderManagment