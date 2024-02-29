import './Saless.css'
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegSquareCheck } from "react-icons/fa6";
import { IoAddCircleOutline,IoReceiptOutline } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
// import { FaCheckSquare } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RxDropdownMenu } from "react-icons/rx";
import { useEffect, useState } from 'react';

const Sales=()=>{
    const [item, setItem]= useState([])
    const [show, setShow] = useState(false)
    const [itemay, setItemay]= useState([])

    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [Amount, setAmount] = useState("")
    const [tax, setTax] = useState("")
    const [total, setTotal] = useState("")
    
    const products ={
        itemName,
        itemDescription,
        brand,
        price,
        quantity,
        Amount,
        tax,
        total,
    }

    const handleAddMore=()=>{
            const olddata = JSON.parse(localStorage.getItem("presentSalesItem")) || []
            const newdata = [...olddata, products]
            localStorage.setItem("presentSalesItem",JSON.stringify(newdata))
            setItemName("")
            setItemDescription("")
            setPrice("")
            setQuantity("")
            setAmount("")
            setTax("")
            setTotal("")
    }

    const mapItems = JSON.parse(localStorage.getItem("presentSalesItem"))
        // console.log("mapitems",mapItems)
    useEffect(()=>{
        setItemay(mapItems)
    },[])

    // console.log("itemmay",itemay)

    const handleAddItem=()=>{
        const newItem = [...item, []]
        setItem(newItem)
    }
    return(
        <div className="saleswrapper">
            <div className="saleswrapperdiv">
                
                {
                    show?
                    <div className="salesinputshow">
                <div className="salesinputcancel"><ImCancelCircle onClick={()=>setShow(false)} className='cancel'/></div>
                <div className="salesinputholdwrapper">
                <div className="salesinputcollection">
                    <div className="salesinputhold">
                        <div>
                            <p>Item Name</p>
                            <input type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)}/>
                        </div>
                        <div>
                            <p>Item Description</p>
                            <input type="text" value={itemDescription} onChange={(e)=>setItemDescription(e.target.value)}/>
                        </div>
                        <div>
                            <p>Brand</p>
                            <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)}/>
                        </div>
                    </div>
                    <div className="salesinputhold">
                        <div>
                            <p>Price</p>
                            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div>
                            <p>Quantity</p>
                            <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                        </div>
                        <div>
                            <p>Amount</p>
                            <input type="text" value={Amount} onChange={(e)=>setAmount(e.target.value)}/>
                        </div>
                    </div>
                    <div className="salesinputhold">
                        <div id='voidpatnes'>
                            <p>Tax</p>
                            <input type="text" value={tax} onChange={(e)=>setTax(e.target.value)}/>
                        </div>
                        <div id='voidpatnes'>
                            <p>Total</p>
                            <input type="text" value={total} onChange={(e)=>setTotal(e.target.value)}/>
                        </div>
                        <div id='void'>
                        </div>
                    </div>
                    <div className="selesbuttondiv">
                        {/* <button className='addmore' onClick={handleAddMore}>Add More</button> */}
                        <button className='addmore'>Done</button>
                    </div>
                </div>
                </div>
            </div>:null
                }
            
                <div className="sales">
                    <button className='addbutton' onClick={()=>setShow(true)}>ADD ITEM</button>
                    <div className="person">
                        <h5>Sales Person</h5>
                        <div className="namex">
                            <p>Sarah V</p>
                        </div>
                    </div>
                    <div className="person per">
                        <h3>SALES</h3>
                    </div>
                    <div className="person">
                        <h5>Date</h5>
                        <div className="namex">
                            <p>10/2/2024</p>
                        </div>
                    </div>
                    <div className="divup"><RxDropdownMenu /></div>
                </div>
                <main className='mainxp'>
                <div className="title">
                    <div className="headers">
                        <p>Item Name</p>
                    </div>
                    <div className="headers">
                        <p>Item Description</p>
                    </div>
                    <div className="headers">
                        <p>Brand</p>
                    </div>
                    <div className="headers">
                        <p>Price</p>
                    </div>
                    <div className="headers">
                        <p>Quantity</p>
                    </div>
                    <div className="headers">
                        <p>Amount</p>
                    </div>
                    <div className="headers">
                        <p>Tax</p>
                    </div>
                    <div className="headers">
                        <p>Total</p>
                    </div>
                    <div className="headers">
                    </div>
                </div>
            
                    <div className="items">
                    {
                        
                        item.map((e,id)=>(
                        <div className="itema"  key={id}>
                        
                        <div className="real">
                            
                        </div>
                        <div className="real">
                            
                        </div>
                        <div className="real">
                            
                        </div>
                        <div className="real">
                            
                        </div>
                        <div className="real">
                            
                        </div>
                        <div className="real">
                            
                        </div>
                        <div className="real">
                            
                        </div>
                        <div className="real">
                            
                        </div>
                        <div className="real real2">
                            <div><MdDeleteForever className='delete'/></div>
                            <div><IoAddCircleOutline className='check' onClick={handleAddItem}/></div>
                        </div>
                        </div>
                        ))
                        
                    }
                </div>
                </main>
            </div>
            
        </div>
    )
}

export default Sales