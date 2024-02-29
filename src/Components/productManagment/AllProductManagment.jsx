import './productmanagmentss.css'
import { ImCancelCircle } from "react-icons/im";
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import * as yup from 'yup'
import { BeatLoader } from "react-spinners";

const Productmanagment = () => {

    const [show, setShow] = useState(false)
    const [availableproduct, setAvailableProduct] = useState()
    const [savedProduct, setSavedProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ isError: false, errortype: "", message: "" })
    

    const schema = yup.object().shape({
        productName: yup.string().required("product Name is Required"),
        category: yup.string().required("category is Required"),
        brand: yup.string().required("Brand is Required"),
        productDescription: yup.string().required("productDescription is required"),
        VAT: yup.number().positive().integer().min(1, "VAT must be more than one character").typeError("VAT must be a number").required("VAT is required "),
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
            // const token = localStorage.getItem("userToken")
          
            // const headers = {
            //     "Content-Type": 'application/json',
            //     'Authorization':`Bearer ${token}`
            // }

            const userId = JSON.parse(localStorage.getItem("userInformation"))
            const id = userId.userId
             const token = userId.token

    // console.log(id)
            const res = await axios.post(`https://rapid-stock-controlosqb.onrender.com/product/addstock/${id}`, data,
                {
                    headers: {
                        "Authorization": ` Bearer ${token}`,
                    },
                })
                console.log(res)
            //             const token = localStorage.getItem("userToken")
            //  const userId = JSON.parse(localStorage.getItem("userInformation"))
            //             const id = userId.id



            //    const userInformation =res.data.data
            //    localStorage.setItem("userInformation", JSON.stringify({id:userInformation._id, name:userInformation.userName, email:userInformation.email}))

            // navigate("/verify")
            //   console.log(userInformation)
            // setLoading(false)
        } catch (err) {
            console.log(err, "err message")
            // setErrormessage(err.response.message)
            // console.log("error",err.response.message)
            setLoading(false)
        }

    };

    const handleEnter = () => {
        const olddata = JSON.parse(localStorage.getItem("AllProducts")) || []
        const newdata = [...olddata, allProduct]
        localStorage.setItem("AllProducts", JSON.stringify(newdata))

    }

    const product = JSON.parse(localStorage.getItem("AllProducts"))


    useEffect(() => {
        setSavedProduct(product)
    }, [])



    const everyProduct = JSON.parse(localStorage.getItem("SaveAllProduct"))

    useEffect(() => {
        setAvailableProduct(everyProduct)
    }, [])

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
                                        <div className="svg" id='nondivbutt'>
                                            <div className='svgbutt' id='buttsvg'>
                                                <button className='adding'>
                                                    {
                                                        loading ? <BeatLoader /> : "DONE"
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
                        <div className="itema">
                            <div className="eleven"><p></p></div>
                            <div className="eleven"></div>
                            <div className="eleven"></div>
                            <div className="eleven"></div>
                            <div className="eleven"></div>
                            <div className="eleven"></div>
                            <div className="eleven"></div>
                            <div className="eleven"></div>
                            <div className="eleven"></div>
                            <div className="eleven"></div>
                        </div>



                        {/* {
                        savedProduct?.map((e, id)=>(
                        <div className="itema" key={id}>
                                <div className="eleven"><p>{e.productName}</p></div>
                                <div className="eleven"><p>{e.category}</p></div>
                                <div className="eleven"><p>{e.Brand}</p></div>
                                <div className="eleven"><p>{e.description}</p></div>
                                <div className="eleven"><p>{e.costPrice}</p></div>
                                <div className="eleven"><p>{e.sellingPrice}</p></div>
                                <div className="eleven"><p>{e.stockQuantity}</p></div>
                                <div className="eleven"><p>{e.reorderLevel}</p></div>
                                <div className="eleven"><p></p></div>
                                <div className="eleven eleventt">
                                    <MdDeleteForever className='delete2'/>
                                    <FaEdit className='edit'/>
                                </div>
                        </div>
                        ))
                    } */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productmanagment