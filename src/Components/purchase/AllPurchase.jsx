import './Purchases.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { ImCancelCircle } from "react-icons/im";
import axios from 'axios';
import { BeatLoader } from "react-spinners";

const Purchase=()=>{

    const [show,setShow]=useState(false)
    const [productName, setProductName]=useState("")
    const [suplierNumber, setSplierNumber]=useState("")
    const [suplierName, setSuplierName]=useState("")
    const [quantityOrderd, setQuantityOrdered]=useState("")
    const [quantityReceived, setQuantityReceived]=useState("")
    const [dateOrdered, setDateOrdered]=useState("")
    const [dateReceived, setDateReceived]=useState("")
    const [unitPrice, setUnitPrice]=useState("")
    const [totalAmount, setTotalAmount]=useState("")
    const [allpurchase, setAllpurchase] = useState([])
    const [loading, setLoading]= useState(false)
    const [eror, setError] = useState({isError: false, errorType: "", errorMessage: ""})

    const purchaseData = {
        productName: productName,
        supplierName: suplierName,
        supplierPhoneNumber: suplierNumber,
        quantityOrder: quantityOrderd,
        // quantityReceived: quantityReceived,
        dateOrder: dateOrdered,
        expectedDate: dateReceived,
        unitPrice: unitPrice,
        // totalAmount: totalAmount,
    }

    const handleSave=(e)=>{
        e.preventDefault()
        setLoading(true)

        if(!productName){
            setError({isError: true, errorType: "productname", errorMessage: "you cant leave this field empty"})
        }else if(!suplierNumber){
            setError({isError: true, errorType: "supliernumber", errorMessage: "you cant leave this field empty"})
        }else if(!suplierName){
            setError({isError: true, errorType: "supliername", errorMessage: "you cant leave this field empty"})
        }else if(!quantityOrderd){
            setError({isError: true, errorType: "quantityordered", errorMessage: "you cant leave this field empty"})
        }else if(typeof quantityOrderd === "string"){
            const number = parseInt(quantityOrderd, 10)
            setQuantityOrdered(number)
        }
        else if(!dateOrdered){
            setError({isError: true, errorType: "dateordered", errorMessage: "you cant leave this field empty"})
        }else if(!unitPrice){
            setError({isError: true, errorType: "unitprice", errorMessage: "you cant leave this field empty"})
        }else if(typeof unitPrice === "srting"){
            const number = parseInt(unitPrice, 10)
            setUnitPrice(number)
            console.log("unitprice",typeof unitPrice)
        }else{
            const userId = JSON.parse(localStorage.getItem("userInformation"))
            const id = userId.userId
            const url = `https://rapid-stock-control-osqb.onrender.com/purchases/addpurchase/${id}`
            const headers = {
                Authorization:`Bearer ${token}`
            }
            const dataObject = purchaseData

            axios.post(url,dataObject,{headers})
            .then((response)=>{
                console.log(response)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)
            })
            // const olddata = JSON.parse(localStorage.getItem("purchase")) || []
            // const newdata = [...olddata, purchaseData]
            // localStorage.setItem("purchase",JSON.stringify(newdata))
            // setShow(false)
        }
    }
    
    // console.log(typeof unitPrice)

    // useEffect(()=>{
    //     const purchase = JSON.parse(localStorage.getItem("purchase"))
    //     setAllpurchase(purchase)
    // },[allpurchase])

    return(
        <div className="purchasewrapp">
            <div className="purchasespace"></div>
            <div className="purchasewrapperdiv">
            {
                show?
                <div className="purchaseadd">
                <div className="close" id='closexx'>
                    <ImCancelCircle onClick={()=>setShow(false)} className='cancel'/>
                </div>
                <div className="purchaseinputwrap">
                    <div className="purchaseinput">
                        <div>
                            <p>Product Name</p>
                            <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                            {
                                eror.isError && eror.errorType === "productname"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div>
                        <div>
                            <p>Suplier Number</p>
                            <input type="text" value={suplierNumber} onChange={(e)=>setSplierNumber(e.target.value)}/>
                            {
                                eror.isError && eror.errorType === "supliernumber"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div>
                        <div>
                            <p>Suplier Name</p>
                            <input type="text" value={suplierName} onChange={(e)=>setSuplierName(e.target.value)}/>
                            {
                                eror.isError && eror.errorType === "supliername"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div>
                    </div>
                    <div className="purchaseinput">
                        <div>
                            <p>Quantity Ordered</p>
                            <input type="text" value={quantityOrderd} onChange={(e)=>setQuantityOrdered(e.target.value)}/>
                            {
                                eror.isError && eror.errorType === "quantityordered"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div>
                        <div>
                            <p>Quantity Recieved</p>
                            <input type="text" value={quantityReceived} onChange={(e)=>setQuantityReceived(e.target.value)}/>
                            {
                                eror.isError && eror.errorType === "quantityreceived"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div>
                        <div>
                            <p>Date Ordered</p>
                            <input type="text" value={dateOrdered} onChange={(e)=>setDateOrdered(e.target.value)}/>
                            {
                                eror.isError && eror.errorType === "dateordered"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div>
                    </div>
                    <div className="purchaseinput">
                        <div>
                            <p>Date Recieved</p>
                            <input type="text" value={dateReceived} onChange={(e)=>setDateReceived(e.target.value)}/>
                            {
                                eror.isError && eror.errorType === "datereceived"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div>
                        <div>
                            <p>Unit Price</p>
                            <input type="text" value={unitPrice} onChange={(e)=>setUnitPrice(e.target.value)}/>
                            {
                                eror.isError && eror.errorType === "unitprice"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div>
                        <div>
                            <p>Total Amount</p>
                            <input type="text" value={totalAmount} onChange={(e)=>setTotalAmount(e.target.value)}/>
                            {
                                eror.isError && eror.errorType === "totalamount"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div>
                    </div>
                    <button className='savebutton' onClick={handleSave}>
                        {
                            loading?<BeatLoader />: "SAVE"
                        }
                    </button>
                </div>
            </div>:null
            }
            <div className="purchasedot">
                <button onClick={()=>setShow(true)}>Add</button>
                <h1>Purchase</h1>
            </div>
            <main className='mainp'>
                <div className="purchasehead">
                    <div>
                        <p>Product</p>
                        <p>Name</p>
                    </div>
                    <div>
                        <p>Supplier</p>
                        <p>Number</p>
                    </div>
                    <div>
                        <p>Supplier</p>
                        <p>Name</p>
                    </div>
                    <div>
                        <p>Quantity</p>
                        <p>Ordered</p>
                    </div>
                    <div>
                        <p>Quantity</p>
                        <p>Received</p>
                    </div>
                    <div>
                        <p>Date</p>
                        <p>Ordered</p>
                    </div>
                    <div>
                        <p>Date</p>
                        <p>received</p>
                    </div>
                    <div>
                        <p>Unit</p>
                        <p>Price</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>Amount</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <main id='mainwrapporgy'>
                {
                    allpurchase?.map((e, id)=>(
                <div className="purchasemap" key={id}>
                    <div><p>{e.productName}</p></div>
                    <div><p>{e.suplierNumber}</p></div>
                    <div><p>{e.suplierName}</p></div>
                    <div><p>{e.quantityOrderd}</p></div>
                    <div><p>{e.quantityReceived}</p></div>
                    <div><p>{e.dateOrdered}</p></div>
                    <div><p>{e.dateReceived}</p></div>
                    <div><p>{e.unitPrice}</p></div>
                    <div><p>{e.totalAmount}</p></div>
                    <div id='others'>
                        <MdDeleteForever className='delete2'/>
                        <FaEdit className='edit'/>
                    </div>
                </div>
                    ))
                }
               
                
                </main>
            </main>
            </div>
        </div>
    )
}

export default Purchase