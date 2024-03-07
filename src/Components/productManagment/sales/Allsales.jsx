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
import { toast } from 'react-hot-toast';
import { FaEdit } from "react-icons/fa";
import Purchase from '../../purchase/AllPurchase';

const Sales=()=>{
    const [item, setItem]= useState([])
    const [show, setShow] = useState(false)
    const [itemay, setItemay]= useState([])
    const [edit,setEdit] = useState(false)
    const [editValues, setEditValues] =useState()
    const [deleteoption,setDeleteoption] = useState(false)
    const [deleteId, setDeleteId] = useState()

    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState()
    const [Amount, setAmount] = useState("")
    const [tax, setTax] = useState("")
    const [total, setTotal] = useState("")
    const [searchValue, setSearchValue]= useState("")
    const [filteredData, setFilteredData]= useState([])
    const [inputFocus, setInputFocus]= useState(false)
    const [loading, setLoading]= useState(false)
    const [selectedData, setSelectedData]=useState()
    const [error, setError]= useState({isError: true, errorType: "", mssg: ""})
    const [allSales, setAllSales]=useState([])

    const [itemName2, setItemName2] = useState("")
    const [itemDescription2, setItemDescription2] = useState("")
    const [quantity2, setQuantity2] = useState()
    
    
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

    const handleGetsales=()=>{
        // const id = JSON.parse(localStorage.getItem("salesrecord"))
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const id = userId.userId
        const url = `https://rapid-stock-control-osqb.onrender.com/sales/salesrecord/${id}`
        // const userId = JSON.parse(localStorage.getItem("userInformation"))
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
        fetch(url,{headers})
            .then((response)=>
                response.json()).then((data)=>{
                // console.log("data",data)
                setAllSales(data.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    useEffect(()=>{
        handleGetsales()
    },[])



    const handleAddSale =()=>{
        
            setLoading(true)
            const userId = JSON.parse(localStorage.getItem("userInformation"))
            const token = userId.token
            const id = userId.userId
            const url = `https://rapid-stock-control-osqb.onrender.com/sales/record/${id}/${selectedData?._id}`
            const headers = {
                Authorization:`Bearer ${token}`
            }
            const howMany = parseInt(quantity)
            const sales ={
                itemName:itemName,
                itemDescription:itemDescription,
                quantity: howMany
                }
                // console.log(id)
                setItemName("")
                setItemDescription("")
                setQuantity()
            const dataObject = sales
            
    
            axios.post(url,dataObject,{headers})
            .then((response)=>{
                // console.log(response)
                localStorage.setItem("salesrecord", JSON.stringify(response.data.data._id))
                setLoading(false)
                setShow(false)
                handleGetsales()
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)
            })
    }



    const handleDelete =(id)=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const iduser = userId.userId
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
        setLoading(true)
        const url = `https://rapid-stock-control-osqb.onrender.com/sales/deletesale/${id}/${iduser}`

        fetch(url,{
            method: 'DELETE',
            headers: headers
        })
        .then((response)=> {response.json()
            // console.log(response)
        })
        .then((data)=> {console.log(data)
            setLoading(false)
            setDeleteoption(false)
            handleGetsales()
            // toast.success()
        })
        .catch((error)=> {console.log(error)
            setLoading(false)
        })
    }

    const handleUpdateSale =()=>{
        setLoading(true)
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const iduser = userId.userId
        const token = userId.token
        const newstqqty = parseInt(quantity2)

        const dataObject = {
            itemName: itemName2,
            itemDescription: itemDescription2,
            quantity: newstqqty,
            
        }
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const url = `https://rapid-stock-control-osqb.onrender.com/sales/updatesale/${editValues?._id}/${iduser}`

        axios.put(url, dataObject,{headers})
        // .then((response)=> response.json())
        .then((data)=> {
            console.log(data)
            setLoading(false)
            handleGetsales()
            setEdit(false)
            // getAllproduct()
            // console.log("dataobject",dataObject)
            // getAllproduct()
        })
        .catch((error)=> {console.log(error)
            // console.log(token)
            setLoading(false)
            setLoading(false)
            // console.log("token", token)
        })
    }
    
    // console.log(editValues.itemName)
    // const name = editValues.itemName



    return(
        <div className="saleswrapper">
            <div className="saleswrapperdiv">
                {
                    edit?<div className="editedDiv" id='editsalediv'>
                    <div className="canceldiv"><ImCancelCircle onClick={()=>setEdit(false)}/></div>
                    <div className="inputwrapedit">
                        <div className="inputholdedit">
                            <div className="collectitdiv">
                                <div className='editme'>
                                    <p>Item Name</p>
                                    <input type="text" placeholder={editValues?.itemName} value={itemName2} onChange={(e)=>setItemName2(e.target.value)}/>
                                </div>
                                <div className='editme'>
                                    <p>Item Description</p>
                                    <input type="text" placeholder={editValues?.itemDescription} value={itemDescription2} onChange={(e)=>setItemDescription2(e.target.value)}/>
                                </div>
                                <div className='editme'>
                                    <p>Quantity</p>
                                    <input type="text" placeholder={editValues?.quantity} value={quantity} onChange={(e)=>setQuantity2(e.target.value)}/>
                                </div>
                            </div>
                            {/* <div className="collectitdiv">
                                <div className='editme'>
                                    <p>Description</p>
                                    <input type="text" placeholder={editValues.productDescription} value={productDescription} onChange={(e)=>setproductDescription(e.target.value)}/>
                                </div>
                                <div className='editme'>
                                    <p>costPrice</p>
                                    <input type="text" placeholder={editValues.costPrice} value={costPrice} onChange={(e)=>setcostPrice(e.target.value)}/>
                                </div>
                                <div className='editme'>
                                    <p>SellingPrice</p>
                                    <input type="text" placeholder={editValues.sellingPrice} value={sellingPrice} onChange={(e)=>setsellingPrice(e.target.value)}/>
                                </div>
                            </div>
                            <div className="collectitdiv">
                                <div className='editme'>
                                    <p>StockQuantity</p>
                                    <input type="text" placeholder={editValues.stockQty} value={stockQty} onChange={(e)=>setstockQty(e.target.value)}/>
                                </div>
                                <div className='editme'>
                                    <p>ReorderLevel</p>
                                    <input type="text" placeholder={editValues.reorderLevel} value={reorderLevel} onChange={(e)=>setReorderLevel(e.target.value)}/>
                                </div>
                                {/* <div className='editme'>
                                    <p>ProductName</p>
                                    <input type="text" />
                                </div> */}
                            {/* </div>  */}
                            <button className='editdone' onClick={()=>handleUpdateSale(editValues._id)}>
                                {
                                    loading?<BeatLoader color='white'/>:"DONE"
                                }
                            </button>
                        </div>
                    </div>
                </div>:null
                }
                {
                    deleteoption? <div className="editdivxz">
                        <div className="cancelxx"><ImCancelCircle onClick={()=>setDeleteoption(false)}/></div>
                        <div className="deletedecision">
                            <p>Are you sure you want to permanently delete this Data?</p>
                            <button className='salesdelete' onClick={()=>handleDelete(deleteId)}>
                                {
                                    loading?<BeatLoader color='white'/>:"DELETE"
                                }
                            </button>
                        </div>
                    </div>:null

                }
                
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
                                                setItemName(e.productName)
                                                setItemDescription(e.productDescription)
                                                setPrice(e.sellingPrice)
                                                setTax(e.VAT)
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
                                <div className="salesinputcontainerhold">
                                    <div className="holdcontain">
                                        <div className="thesales">
                                            <div className="thesalesinput">
                                                <p>Item Name</p>
                                                <input type="text"value={itemName}/>
                                            </div>
                                            <div className="thesalesinput">
                                                <p>Item Description</p>
                                                <input type="text" value={itemDescription}/>
                                            </div>
                                        </div>
                                        <div className="thesales">
                                            <div className="thesalesinput">
                                                <p>Unit Price</p>
                                                <input type="text" value={price}/>
                                            </div>
                                            <div className="thesalesinput">
                                                <p>VAT</p>
                                                <input type="text" value={tax}/>
                                            </div>
                                        </div>
                                        <div className="thesales">
                                            <div className="thesalesinput">
                                                <p>Quantity</p>
                                                <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                                            </div>
                                            <div className="thesalesinput">
                                                {/* <p>Total</p>
                                                <input type="text" /> */}
                                            </div>
                                        </div>
                                        <div className="salesbuttonholddiv">
                                            <button className='salesbuttonitself' onClick={handleAddSale}>
                                                {
                                                    loading?<BeatLoader color='white'/>: "Done"
                                                }
                                            </button>
                                        </div>
                                        </div>
                                </div>
                </div>
                </div>
            </div>:null
                }
            
                <div className="sales">
                    <button className='addbutton' onClick={()=>setShow(true)}>SELL</button>
                    <div className="person">
                        {/* <h5>Sales Person</h5> */}
                        <div className="namex">
                            {/* <p>Sarah V</p> */}
                        </div>
                    </div>
                    <div className="person per">
                        <h3>SALES</h3>
                    </div>
                    <div className="person">
                        {/* <h5>Date</h5> */}
                        <div className="namex">
                            {/* <p>10/2/2024</p> */}
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
                        <p>Description</p>
                    </div>
                    <div className="headers">
                        <p>Brand</p>
                    </div>
                    <div className="headers">
                        <p>Unit Price</p>
                    </div>
                    <div className="headers">
                        <p>Quantity</p>
                    </div>
                    <div className="headers">
                        <p>Amount</p>
                    </div>
                    <div className="headers">
                        <p>profit</p>
                    </div>
                    <div className="headers">
                        <p>Total</p>
                    </div>
                    <div className="headers">
                    </div>
                </div>
            
                    <div className="items">
                    {
                        
                        allSales?.map((e,id)=>(
                        <div className="itema"  key={id}>
                        
                        <div className="real">
                            <input type="text" value={e.itemName} />
                        </div>
                        <div className="real">
                            <input type="text" value={e.itemDescription} />
                        </div>
                        <div className="real">
                            <input type="text" value={e.brand} />
                        </div>
                        <div className="real">
                            <input type="text" value={e.unitPrice} />
                        </div>
                        <div className="real">
                            <input type="text" value={e.quantity} />
                        </div>
                        <div className="real">
                            <input type="text" value={e.amount} />
                        </div>
                        <div className="real">
                            <input type="text" value={e.profit} />
                        </div>
                        <div className="real">
                            <input type="text" value={e.total} />
                        </div>
                        <div className="real real2">
                            <div><MdDeleteForever className='delete' onClick={()=>{
                                setDeleteoption(true)
                                setDeleteId(e._id)
                            }}/></div>
                            <div><FaEdit  className='check' onClick={()=>{setEdit(true)
                                setEditValues(e)}
                            }/></div>
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