import './Purchases.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { ImCancelCircle } from "react-icons/im";
import axios from 'axios';
import { BeatLoader } from "react-spinners";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
// import axios from 'axios';
import * as yup from 'yup'

const Purchase=()=>{

    const [show,setShow]=useState(false)

    const [allpurchase, setAllpurchase] = useState([])
    const [loading, setLoading]= useState(false)
    const [deleteOption, setDeleteOption]= useState({state: false, id: ""})
    const [edit, setEdit] =useState(false)

    const [productName, setProductName]=useState("")
    const [supplierName, setSupplierName] = useState("")
    const [supplierPhoneNumber, setSupplierNumber] = useState("")
    const [dateOrder, setDateOrder] = useState("")
    const [expectedDate, setExpectedDate] = useState("")
    const [unitPrice, setUnitPrice] = useState()
    const [quantityOrder, setQuantityOrder] = useState()
    const [quantityReceived, setQuantityReceived] = useState()
    const [dataToeditDetails, setDataToEditDetals] = useState()


    const schema = yup.object().shape({
        productName: yup.string().required("product Name is Required"),
        supplierName: yup.string().required("supplier Name is Required"),
        dateOrder: yup.string().required("date Order is Required"),
        expectedDate: yup.string().required("expected Date is Required"),
        supplierPhoneNumber: yup.string().required("supplierPhoneNumber is required"),
        unitPrice: yup.number().positive().integer( "unitPrice must be more than one character").typeError("unit Price must be a number").required("unitp Price is required "),
        quantityOrder: yup.number().positive().integer().min(0, "quantity Order must be at least one character").typeError("quantity Order must be a number").required("quantity Order is required "),
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const handleGetPurchase=()=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const id = userId.userId
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
    const url = `https://rapid-stock-control-osqb.onrender.com/purchases/viewAllpurchase/${id}`

    fetch(url,{headers})
    .then((Response)=> Response.json())
    .then((data)=> {
        // console.log(data)
        setAllpurchase(data.data)
        // setProduct(data.data)
        // console.log(data.data)
    })
    .catch((error)=> {
        console.log("error",error)
    })
    }

    useEffect(()=>{
        handleGetPurchase()
    },[])

    const onSubmit = async (data) => {

        try {
            setLoading(true);

            const userId = JSON.parse(localStorage.getItem("userInformation"))
            const id = userId.userId
             const token = userId.token

            const res = await axios.post(`https://rapid-stock-control-osqb.onrender.com/purchases/addpurchase/${id}`, data,
                {
                    headers: {
                        "Authorization": ` Bearer ${token}`,
                    },
                })
                // console.log(res)
                
                setLoading(false)
                setShow(false)
                // getAllproduct()
                handleGetPurchase()

        } catch (error) {
            console.log(error, "err message")
            // setError({isError: true, errortype: err.response.data.message})
            setLoading(false)
        }

    };



    const handleDelete =(id)=>{
        // e.preventDefault();
        setLoading(true)
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const iduser = userId.userId
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const url = `https://rapid-stock-control-osqb.onrender.com/purchases/deletepurchase/${id}/${iduser}`

        fetch(url,{
            method: 'DELETE',
            headers: headers
        })
        .then((response)=> {
            response.json()
            setDeleteOption({state:false})
            setLoading(false)
            handleGetPurchase()
        })
        // .then((data)=> console.log(data))
        .catch((error)=> console.log(error))
    }

    const handleEditPurchase=(id)=>{
        setLoading(true)
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        // const iduser = userId.userId
        const token = userId.token
        const newPrice = parseInt(unitPrice)
        const newquantity = parseInt(quantityOrder)
        const newreceived = parseInt(quantityReceived)

        const dataObject = {
            productName: productName,
            supplierName: supplierName,
            supplierPhoneNumber: supplierPhoneNumber,
            unitPrice: newPrice,
            quantityOrder: newquantity,
            quantityReceived: newreceived,
            expectedDate: expectedDate,
            dateOrder: dateOrder,
        }
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const url = `https://rapid-stock-control-osqb.onrender.com/purchases/updatepurchase/${id}`

        axios.put(url, dataObject,{headers})
        // .then((response)=> response.json())
        .then((data)=> {
            console.log(data)
            setLoading(false)
            setEdit(false)
            handleGetPurchase()
            // console.log("dataobject",dataObject)
            // getAllproduct()
        })
        .catch((error)=> {console.log(error)
            // console.log(token)
            setLoading(false)
            // console.log("token", token)
        })
    }

    // console.log(dataToeditDetails)

    return(
        <div className="purchasewrapp">
            <div className="purchasespace"></div>
            <div className="purchasewrapperdiv">
                {
                    edit?  <div className="editedDiv">
                    <div className="canceldiv"><ImCancelCircle onClick={()=>setEdit(false)}/></div>
                    <div className="inputwrapedit">
                        <div className="inputholdedit">
                            <div className="collectitdiv">
                                <div className='editme'>
                                    <p>ProductName</p>
                                    <input type="text" placeholder={dataToeditDetails.productName} value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                                </div>
                                <div className='editme'>
                                    <p>Supplier Number</p>
                                    <input type="text" placeholder={dataToeditDetails.supplierPhoneNumber} value={supplierPhoneNumber} onChange={(e)=>setSupplierNumber(e.target.value)}/>
                                </div>
                                <div className='editme'>
                                    <p>Supplier Name</p>
                                    <input type="text" placeholder={dataToeditDetails.supplierName} value={supplierName} onChange={(e)=>setSupplierName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="collectitdiv">
                                <div className='editme'>
                                    <p>Quantity Order</p>
                                    <input type="text" placeholder={dataToeditDetails.quantityOrder} value={quantityOrder} onChange={(e)=>setQuantityOrder(e.target.value)}/>
                                </div>
                                <div className='editme'>
                                    <p>Quantity Received</p>
                                    <input type="text" placeholder="quantity received" value={quantityReceived} onChange={(e)=>setQuantityReceived(e.target.value)}/>
                                </div>
                                <div className='editme'>
                                    <p>DateOrdered</p>
                                    <input type="date" placeholder={dataToeditDetails.dateOrder} value={dateOrder} onChange={(e)=>setDateOrder(e.target.value)}/>
                                </div>
                            </div>
                            <div className="collectitdiv">
                                <div className='editme'>
                                    <p>Expected date</p>
                                    <input type="date" placeholder={dataToeditDetails.expectedDate} value={expectedDate} onChange={(e)=>setExpectedDate(e.target.value)}/>
                                </div>
                                <div className='editme'>
                                    <p>Unit Price</p>
                                    <input type="text" placeholder={dataToeditDetails.unitPrice} value={unitPrice} onChange={(e)=>setUnitPrice(e.target.value)}/>
                                </div>
                                {/* <div className='editme'>
                                    <p>ProductName</p>
                                    <input type="text" />
                                </div> */}
                            </div>
                            <button className='editdone' onClick={()=>handleEditPurchase(dataToeditDetails._id)}>
                                {
                                    loading?<BeatLoader color='white'/>:"DONE"
                                }
                            </button>
                        </div>
                    </div>
                </div>:null
                }
            {
                show?
                <div className="purchaseadd">
                    <form action="" onSubmit={handleSubmit(onSubmit)} className='purchaseadd'>
                    <div className="close" id='closexx'>
                    <ImCancelCircle onClick={()=>setShow(false)} className='cancel'/>
                </div>
                <div className="purchaseinputwrap">
                    <div className="purchaseinput">
                        <div>
                            <p>Product Name</p>
                            <input type="text" {...register("productName")}/>
                            {
                                errors.productName ? <p id='errorm'>{errors.productName.message}</p> : null
                            }
                        </div>
                        <div>
                            <p>Suplier Number</p>
                            <input type="text" {...register("supplierPhoneNumber")}/>
                            {
                                errors.supplierPhoneNumber ? <p id='errorm'>{errors.supplierPhoneNumber.message}</p> : null
                            }
                        </div>
                        <div>
                            <p>Suplier Name</p>
                            <input type="text" {...register("supplierName")}/>
                            {
                                errors.supplierName ? <p id='errorm'>{errors.supplierName.message}</p> : null
                            }
                        </div>
                    </div>
                    <div className="purchaseinput">
                        <div>
                            <p>Quantity Ordered</p>
                            <input type="text" {...register("quantityOrder")}/>
                            {
                                errors.quantityOrder ? <p id='errorm'>{errors.quantityOrder.message}</p> : null
                            }
                        </div>
                        <div>
                            <p>Date Ordered</p>
                            <input type="date" placeholder='e.g 2024-05-03' {...register("dateOrder")}/>
                            {
                                errors.dateOrder ? <p id='errorm'>{errors.dateOrder.message}</p> : null
                            }
                        </div>
                        <div>
                            <p>Expected Date</p>
                            <input type="date" placeholder='format 2024-05-03' {...register("expectedDate")}/>
                            {
                                errors.expectedDate ? <p id='errorm'>{errors.expectedDate.message}</p> : null
                            }
                        </div>
                    </div>
                    <div className="purchaseinput">
                        <div>
                            <p>Unit Price</p>
                            <input type="text" {...register("unitPrice")}/>
                            {
                                errors.unitPrice ? <p id='errorm'>{errors.unitPrice.message}</p> : null
                            }
                        </div>
                        {/* <div>
                            <p>Unit Price</p>
                            <input type="text" />
                            {
                                eror.isError && eror.errorType === "unitprice"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div>
                        <div>
                            <p>Total Amount</p>
                            <input type="text" />
                            {
                                eror.isError && eror.errorType === "totalamount"? <p className='errormess'>{eror.errorMessage}</p>: null
                            }
                        </div> */}
                    </div>
                    <button className='savebutton'>
                        {
                            loading?<BeatLoader />: "SAVE"
                        }
                    </button>
                </div>
                    </form>
            </div>:null
            }
            <div className="purchasedot">
                <button onClick={()=>setShow(true)}>Add</button>
                <h1>Purchase</h1>
            </div>
            <main className='mainp'>
                {
                    deleteOption.state?<div className="deleteAlert">
                        <div className="cancelhold"><ImCancelCircle onClick={()=>setDeleteOption({state:false})}/></div>
                        <p>Are you sure you want to permanently delete this data?</p>
                        <div className="agree">
                            <button onClick={()=>handleDelete(deleteOption.id)}>
                                {
                                    loading?<BeatLoader />:"Delete"
                                }
                            </button>
                        </div>
                    </div>:null
                }
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
                        <p>Expcted</p>
                        <p>Date</p>
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
                    <div><p>{e.supplierPhoneNumber}</p></div>
                    <div><p>{e.supplierName}</p></div>
                    <div><p>{e.quantityOrder}</p></div>
                    <div><p>{e.quantityReceived}</p></div>
                    <div><p>{e.dateOrder}</p></div>
                    <div><p>{e.expectedDate}</p></div>
                    <div><p>{e.unitPrice}</p></div>
                    <div><p>{e.totalAmount}</p></div>
                    <div id='others'>
                        <MdDeleteForever className='delete2' onClick={()=>setDeleteOption({state:true, id: e._id})}/>
                        <FaEdit className='edit' onClick={()=>{
                            setEdit(true)
                            setDataToEditDetals(e)
                        }}/>
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