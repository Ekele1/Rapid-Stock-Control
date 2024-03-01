import './Saless.css'
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegSquareCheck } from "react-icons/fa6";
import { IoAddCircleOutline,IoReceiptOutline } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
// import { FaCheckSquare } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RxDropdownMenu } from "react-icons/rx";
import { useEffect, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import axios from 'axios';
import { BeatLoader } from "react-spinners";

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
    const [searchValue, setSearchValue]= useState("")
    const [filteredData, setFilteredData]= useState([])
    const [inputFocus, setInputFocus]= useState(false)
    const [loading, setLoading]= useState(false)
    const [selectedData, setSelectedData]=useState()
    const [error, setError]= useState({isError: true, errorType: "", mssg: ""})
    
    const products ={
        itemName:selectedData?.itemName,
        itemDescription:selectedData?.itemDescription,
        quantity:quantity,
        VAT:selectedData?.VAT
    }
    const [allProduct, setAllProduct] = useState()

    useEffect(()=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const id = userId.userId
        const token = userId.token

        const url = `https://rapid-stock-control-osqb.onrender.com/product/viewallstock/${id}`

        const headers = {
            Authorization:`Bearer ${token}`
        }

    fetch(url,{headers})
    .then((Response)=> Response.json())
    .then((data)=> {
        // console.log(data)
        setAllProduct(data.data)
        // setSavedProduct(data.data)
        // console.log(data.data)
    })
    .catch((error)=> {
        console.log("Error",error)
    })
    },[])

    useEffect(()=>{
        const filteredItems = allProduct?.filter((e)=>
            e.productName.includes(searchValue)
        )
        setFilteredData(filteredItems)
    },[searchValue,allProduct])

    const handleAddSale=()=>{
        setLoading(true)

        if(typeof quantity === 'string'){
            const number = parseInt(quantity, 10)
            setQuantity(number)
        }else if(!itemName){
            setLoading(false)
            setError({isError: true, errorType: "itemName", mssg: "you cant leave here empty"})
        }else if(!itemDescription){
            setLoading(false)
            setError({isError: true, errorType: "itemDescription", mssg: "you cant leave here empty"})
        }else if(!quantity){
            setLoading(false)
            setError({isError: true, errorType: "quantity", mssg: "you cant leave here empty"})
        }
        else{
            const userId = JSON.parse(localStorage.getItem("userInformation"))
            const token = userId.token
            const id = userId.userId
            const url = `https://rapid-stock-control-osqb.onrender.com/sales/record/${selectedData._id}/${id}`
            const headers = {
                Authorization:`Bearer ${token}`
            }
            const dataObject = products
    
            axios.post(url,dataObject,{headers})
            .then((response)=>{
                console.log(response)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)
                console.log("quantity", typeof quantity)
            })
        }


    }



    const handleAddItem=()=>{
        const newItem = [...item, []]
        setItem(newItem)
    }

    // console.log(selectedData)
    return(
        <div className="saleswrapper">
            <div className="saleswrapperdiv">
                
                {
                    show?
                    <div className="salesinputshow">
                        {
                            inputFocus?<div className="itemsearch">
                            {
                                filteredData?.length === 0 ? (<p>No item with this name</p>):(
                                        filteredData?.map((e,id)=>(
                                            <p key={id} onClick={()=> {
                                                setSelectedData(e)
                                                setInputFocus(false)
                                            }}>{e.productName}</p>
                                        ))
                                    
                                )
                            }
                            
                        </div>:null
                        }
                        <div className="salesinputcancel"><ImCancelCircle onClick={()=>setShow(false)} className='cancel'/></div>
                        <div className="salesinputholdwrapper">
                            <div className="salesinputcollection">
                                <div className="searchbox">
                                    <div className="searchdiv">
                                        <input type="search" placeholder='search for a product' onFocus={()=>setInputFocus(true)} onChange={(e)=>setSearchValue(e.target.value)}/>
                                        <IoSearchSharp style={{cursor: "pointer"}}/>
                                    </div>
                                </div>
                            <div className="salesinputhold">
                                <div>
                                    <p>Item Name</p>
                                    <input type="text" readOnly={true} value={selectedData?.productName}/>
                                </div>
                                <div>
                                    <p>Item Description</p>
                                    <input type="text" readOnly={true} value={selectedData?.productDescription}/>
                                </div>
                        <div>
                            <p>Quantity</p>
                            <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="salesinputhold" id='vaat'>
                        <div>
                            <p>VAT</p>
                            <input type="text" readOnly={true} value={selectedData?.VAT}/>
                        </div>
                        {/* <div>
                            <p>Quantity</p>
                            <input type="text" value={quantity} />
                        </div> */}
                        {/* <div>
                            <p>Amount</p>
                            <input type="text" value={Amount} onChange={(e)=>setAmount(e.target.value)}/>
                        </div> */}
                    </div>
                    {/* <div className="salesinputhold"> */}
                        {/* <div id='voidpatnes'>
                            <p>Tax</p>
                            <input type="text" value={selectedData?.VAT} onChange={(e)=>setTax(e.target.value)}/>
                        </div>
                        <div id='voidpatnes'>
                            <p>Total</p>
                            <input type="text" value={total} onChange={(e)=>setTotal(e.target.value)}/>
                        </div> */}
                        {/* <div id='void'>
                        </div>
                    </div> */}
                    <div className="selesbuttondiv">
                        {/* <button className='addmore' onClick={handleAddMore}>Add More</button> */}
                        <button className='addmore' onClick={handleAddSale}>
                            {
                                loading?<BeatLoader color='white'/>:"Done"
                            }
                        </button>
                    </div>
                </div>
                </div>
            </div>:null
                }
            
                <div className="sales">
                    <button className='addbutton' onClick={()=>setShow(true)}>SELL</button>
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