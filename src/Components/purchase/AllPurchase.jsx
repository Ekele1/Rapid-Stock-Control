import './Purchase.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { ImCancelCircle } from "react-icons/im";

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
    const [eror, setError] = useState({isError: false, errorType: "", errorMessage: ""})

    const purchaseData = {
        productName: productName,
        suplierName: suplierName,
        suplierNumber: suplierNumber,
        quantityOrderd: quantityOrderd,
        quantityReceived: quantityReceived,
        dateOrdered: dateOrdered,
        dateReceived: dateReceived,
        unitPrice: unitPrice,
        totalAmount: totalAmount,
    }

    const handleSave=(e)=>{
        e.preventDefault()

        if(!productName){
            setError({isError: true, errorType: "productname", errorMessage: "you cant leave this field empty"})
        }else if(!suplierNumber){
            setError({isError: true, errorType: "supliernumber", errorMessage: "you cant leave this field empty"})
        }else if(!suplierName){
            setError({isError: true, errorType: "supliername", errorMessage: "you cant leave this field empty"})
        }else if(!quantityOrderd){
            setError({isError: true, errorType: "quantityordered", errorMessage: "you cant leave this field empty"})
        }else if(!quantityReceived){
            setError({isError: true, errorType: "quantityreceived", errorMessage: "you cant leave this field empty"})
        }else if(!dateOrdered){
            setError({isError: true, errorType: "dateordered", errorMessage: "you cant leave this field empty"})
        }else if(!dateReceived){
            setError({isError: true, errorType: "datereceived", errorMessage: "you cant leave this field empty"})
        }else if(!unitPrice){
            setError({isError: true, errorType: "unitprice", errorMessage: "you cant leave this field empty"})
        }else if(!totalAmount){
            setError({isError: true, errorType: "totalamount", errorMessage: "you cant leave this field empty"})
        }else{
            const olddata = JSON.parse(localStorage.getItem("purchase")) || []
            const newdata = [...olddata, purchaseData]
            localStorage.setItem("purchase",JSON.stringify(newdata))
            setShow(false)
        }
    }

    useEffect(()=>{
        const purchase = JSON.parse(localStorage.getItem("purchase"))
        setAllpurchase(purchase)
    },[allpurchase])

    return(
        <div className="purchasewrapp">
            <div className="purchasespace"></div>
            <div className="purchasewrapperdiv">
            {
                show?<div className="purchaseadd">
                <div className="close">
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
                    <button className='savebutton' onClick={handleSave}>SAVE</button>
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
            </div>
        </div>
    )
}

export default Purchase