import './productmanagmentss.css'
import { ImCancelCircle } from "react-icons/im";
import { MdDeleteForever } from 'react-icons/md';
import { MdCancel } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import * as yup from 'yup'
import { BeatLoader } from "react-spinners";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Productmanagment = () => {

    const [show, setShow] = useState(false)
    const [availableproduct, setAvailableProduct] = useState()
    const [savedProduct, setSavedProduct] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ isError: false, errortype: "", message: "" })
    const [edit, setEdit] = useState(false)
    const [editContent, setEditContent] = useState(false)
    const [me,setMe]= useState("")

    const [productName, setProductName]= useState("")
    const [category, setCategory]= useState("")
    const [brand, setbrand]= useState("")
    const [productDescription, setproductDescription]= useState("")
    const [VAT, setVAT]= useState("")
    const [sellingPrice, setsellingPrice]= useState("")
    const [costPrice, setcostPrice]= useState("")
    const [stockQty, setstockQty]= useState("")
    const [editMode, setEditMode] = useState(true);

    const toggleEditMode = () => {
        setEditMode(false);
    };
    const toggleSaveEdit = () => {
        setEditMode(true);
        const data = {
            firstName: firstName,
            lastName: lastName
        }
        url = "hdhdhdh"
    };
    
    // console.log("me", me)

    const schema = yup.object().shape({
        productName: yup.string().required("product Name is Required"),
        category: yup.string().required("category is Required"),
        brand: yup.string().required("Brand is Required"),
        productDescription: yup.string().required("productDescription is required"),
        VAT: yup.number().positive().integer( "VAT must be more than one character").typeError("VAT must be a number").required("VAT is required "),
        sellingPrice: yup.number().positive().integer().min(1, "sellingPrice must be more than one character").typeError("sellingPrice must be a number").required("sellingPrice is required "),
        costPrice: yup.number().positive().integer().min(1, "costPrice must be more than one character").typeError("costPrice must be a number").required("costPrice is required "),
        stockQty: yup.number().positive().integer().min(1, "stockQty must be more than one character").typeError("stockQty must be a number").required("stockQty is required "),
        reorderLevel: yup.number().positive().integer().min(1, "reorderLevel must be more than one character").typeError("reorderLevel must be a number").required("reorderLevel is required "),
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {

        try {
            setLoading(true);

            const userId = JSON.parse(localStorage.getItem("userInformation"))
            const id = userId.userId
             const token = userId.token

            const res = await axios.post(`https://rapid-stock-control-osqb.onrender.com/product/addstock/${id}`, data,
                {
                    headers: {
                        "Authorization": ` Bearer ${token}`,
                    },
                })
                // console.log(res)
                
                setLoading(false)
                setShow(false)
                getAllproduct()

        } catch (err) {
            // console.log(err, "err message")
            setError({isError: true, errortype: err.response.data.message})
            setLoading(false)
        }

    };

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
        setSavedProduct(data.data)
        // console.log(data.data)
    })
    .catch((error)=> {
        console.log("delete Error",error)
    })
    }


    useEffect(() => {
     getAllproduct()
        
    }, [])

    const handleDelete =(id)=>{
        const userId = JSON.parse(localStorage.getItem("userInformation"))
        const iduser = userId.userId
        const token = userId.token
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const url = `https://rapid-stock-control-osqb.onrender.com/product/deletestock/${id}/${iduser}`

        fetch(url,{
            method: 'DELETE',
            headers: headers
        })
        .then((response)=> response.json())
        .then((data)=> console.log(data))
        .catch((error)=> console.log(error))
    }

    const handleEdit=(id)=>{
        const editedItem = savedProduct.map((e)=> e.id === id)
        editedItem === "true"?setEdit(true):null
        // setEditContent(true)
        // setShow(true)
    }
    const handleCancel=()=>{
        setEdit(false)
        setEditContent(false)
    }
    const handleContentChange =(e)=>{
        
    }
    // console.log("me",me)


    return (
        <div className="productmanagmentwrap">
            <div className="productmanagementwrapdiv">
                {
                    show ?
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <main className='additems'>
                                <div className="remove" >
                                    <div>
                                        <ImCancelCircle className='cancel' onClick={() => setShow(false)} />
                                    </div>
                                </div>
                                <div className="allproductdetailswrap">
                                    <div className="allproductdetails">
                                        <div className="svg">
                                            <div>
                                                <p>Product Name</p>
                                                <input type="text" className='ttt' {...register("productName")} />
                                                {
                                                    errors.productName ? <p id='errorm'>{errors.productName.message}</p> : null
                                                }
                                            </div>
                                            <div>
                                                <p>Category</p>
                                                <input type="text" className='ttt' {...register("category")} />
                                                {
                                                    errors.category ? <p id='errorm'>{errors.category.message}</p> : null
                                                }
                                            </div>
                                        </div>
                                        <div className="svg">
                                            <div>
                                                <p>ProductDescription</p>
                                                <input type="text" className='ttt' {...register("productDescription")} placeholder='eg small, big, medium' />
                                                {
                                                    errors.productDescription ? <p id='errorm'>{errors.productDescription.message}</p> : null
                                                }
                                            </div>
                                            <div>
                                                <p>Brand</p>
                                                <input type="text" className='ttt' {...register("brand")} />
                                                {
                                                    errors.brand ? <p id='errorm'>{errors.brand.message}</p> : null
                                                }
                                            </div>
                                        </div>
                                        <div className="svg">
                                            <div>
                                                <p>Cost Price</p>
                                                <input type="text" className='ttt' {...register("costPrice")} />
                                                {
                                                    errors.costPrice ? <p id='errorm'>{errors.costPrice.message}</p> : null
                                                }
                                            </div>
                                            <div>
                                                <p>Selling Price</p>
                                                <input type="text" className='ttt' {...register("sellingPrice")} />
                                                {
                                                    errors.sellingPrice ? <p id='errorm'>{errors.sellingPrice.message}</p> : null
                                                }
                                            </div>
                                        </div>
                                        <div className="svg">
                                            <div>
                                                <p>Stock Quantity</p>
                                                <input type="text" className='ttt'{...register("stockQty")} />
                                                {
                                                    errors.stockQty ? <p id='errorm'>{errors.stockQty.message}</p> : null
                                                }
                                            </div>
                                            <div>
                                                <p>Reorder Level</p>
                                                <input type="text" className='ttt' {...register("reorderLevel")} />
                                                {
                                                    errors.reorderLevel ? <p id='errorm'>{errors.reorderLevel.message}</p> : null
                                                }
                                            </div>
                                        </div>
                                        <div className="svg" id='changepath'>
                                            <div>
                                                <p>VAT</p>
                                                <input type="text" className='ttt' id='changeid' {...register("VAT")} />
                                                {
                                                    errors.VAT ? <p id='errorm'>{errors.VAT.message}</p> : null
                                                }
                                            </div>
                                            <div id='notneed'>

                                            </div>
                                        </div>
                                        {
                                            error.isError?<p id='errorm'>{error.message}</p>:null
                                        }
                                        <div className="svg" id='nondivbutt'>
                                            <div className='svgbutt' id='buttsvg'>
                                                <button className='adding'>
                                                    {
                                                        loading ? <BeatLoader color='white'/> : "DONE"
                                                    }
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </main>
                        </form> : null
                }
                <div className="productmanage">
                    <div className="spacexx"></div>
                    <button className='kjv' onClick={() => setShow(true)}>add</button>
                    <h3>Product Managment</h3>
                    <div className="cate">
                        <div className="tpro">
                            <span>Total Product</span>
                            <div><p>{availableproduct?.length}</p></div>
                        </div>
                        <div className="tpro">
                            <span>Total Category</span>
                            <div><p>20</p></div>
                        </div>
                    </div>
                </div>
                <div className="mainxrt" id='xrtmain'>
                    <div id='productmtitle'>
                        <div className="hell">
                            <p>PRODUCT</p>
                            <p>NAME</p>
                        </div>
                        <div className="hell">
                            <p>CATEGORY</p>
                        </div>
                        <div className="hell">
                            <p>BRAND</p>
                        </div>
                        <div className="hell">
                            <p>DESCRIPTION</p>
                        </div>
                        <div className="hell">
                            <p>COST</p>
                            <p>PRICE</p>
                        </div>
                        <div className="hell">
                            <p>SELLING</p>
                            <p>PRICE</p>
                        </div>
                        <div className="hell">
                            <p>STOCK</p>
                            <p>QUANTITY</p>
                        </div>
                        <div className="hell">
                            <p>REORDER</p>
                            <p>LEVEL</p>
                        </div>
                        <div className="hell">
                            <p>LAST</p>
                            <p>UPDATE</p>
                        </div>
                    </div>
                    <div className="items">
                        {
                        savedProduct?.map((e, id)=>(
                        <div className="itema" key={id}>
                                <div className="eleven">
                                    <input type="text" className='cunt' value={e.productName}/>
                                </div>
                                <div className="eleven">
                                    <input type="text" className='cunt' value={e.category}/>
                                </div>
                                <div className="eleven">
                                    <input type="text" className='cunt' value={e.brand}/>
                                </div>
                                <div className="eleven">
                                    <input type="text" className='cunt' value={e.productDescription}/>
                                </div>
                                <div className="eleven">
                                    <input type="text" className='cunt' value={e.costPrice}/>
                                </div>
                                <div className="eleven">
                                    <input type="text" className='cunt' value={e.sellingPrice}/>
                                </div>
                                <div className="eleven">
                                    <input type="text" className='cunt' value={e.stockQty}/>
                                </div>
                                <div className="eleven">
                                    <input type="text" className='cunt' value={e.reorderLevel}/>
                                </div>
                                <div className="eleven"><p className='cunt'>updatedAt</p></div>
                                <div className="eleven eleventt">
                                    {
                                        edit?<div className="editdiv">
                                        <MdCancel onClick={handleCancel}/>
                                        <IoCheckmarkDoneSharp />
                                    </div>:<div className="editdiv">
                                        <MdDeleteForever className='delete2' onClick={()=> handleDelete(e._id)}/>
                                        <FaEdit className='edit' onClick={()=>handleEdit(e._id)}/>
                                    </div>
                                    }
                                </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productmanagment