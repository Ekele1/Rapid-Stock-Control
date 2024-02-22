import './productmanagment.css'
import { MdDeleteForever } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { useEffect, useState } from 'react';

const Productmanagment = ()=>{

    const [productName, setProductName] = useState("")
    const [category, setCategory] = useState("")
    const [Brand, setBrand] = useState("")
    const [costPrice,setcostPrice] = useState("")
    const [sellingPrice,setsellingPrice] = useState("")
    const [stockQuantity,setStockQuantity] = useState("")
    const [reorderLevel,setReorderLevel] = useState("")
    const [lastUpdate,setLastUpdate] = useState("")
    const [show,setShow] = useState(false)
    const [availableproduct, setAvailableProduct] = useState([])
    const [error, setError]= useState({isError: false, errortype: "", message: "" })

    const allProduct = {
            productName: productName,
            category: category,
            Brand: Brand,
            costPrice: costPrice,
            sellingPrice: sellingPrice,
            stockQuantity: stockQuantity,
            reorderLevel: reorderLevel,
            lastUpdate: lastUpdate,
        }

        const handleEnter=(e)=>{
            e.preventDefault()
            if(!productName){
                setError({isError: true, errortype: "productname", message: "you can't leave this field blank"})
            }else if(!category){
                setError({isError: true, errortype: "category", message: "you can't leave this field blank"})
            }else if(!Brand){
                setError({isError: true, errortype: "brand", message: "you can't leave this field blank"})
            }else if(!costPrice){
                setError({isError: true, errortype: "costprice", message: "you can't leave this field blank"})
            }else if(!sellingPrice){
                setError({isError: true, errortype: "sellingprice", message: "you can't leave this field blank"})
            }else if(!stockQuantity){
                setError({isError: true, errortype: "stockquantity", message: "you can't leave this field blank"})
            }else if(!reorderLevel){
                setError({isError: true, errortype: "reorderlevel", message: "you can't leave this field blank"})
            }else if(!lastUpdate){
                setError({isError: true, errortype: "lastupdate", message: "you can't leave this field blank"})
            }else{

            const olddata = JSON.parse(localStorage.getItem("items")) || []
            const newdata = [...olddata, allProduct]
            localStorage.setItem("items",JSON.stringify(newdata))
            setShow(false)
            }
            
        }

        useEffect(()=>{
            const product = JSON.parse(localStorage.getItem("items"))
            setAvailableProduct(product)
        },[])

    

    // console.log(product)


    return(
        <div className="productmanagmentwrap">
            <div className="productmanagementwrapdiv">
            {
                show?
                <main className='additems'>
                <div className="remove" >
                    <div>
                        <ImCancelCircle className='cancel' onClick={()=>setShow(false)}/>
                    </div>
                </div>
                <div className="allproductdetails">
                    <div className="svg">
                        <div>
                            <p>Product Name</p>
                            <input type="text" className='ttt' value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                            {
                                error.isError && error.errortype === "productname"?<p id='errorm'>{error.message}</p>:null
                            }
                        </div>
                        <div>
                            <p>Category</p>
                            <input type="text" className='ttt' value={category} onChange={(e)=>setCategory(e.target.value)}/>
                            {
                                error.isError && error.errortype === "category"?<p id='errorm'>{error.message}</p>:null
                            }
                        </div>
                    </div>
                    <div className="svg">
                        <div>
                            <p>Brand</p>
                            <input type="text" className='ttt' value={Brand} onChange={(e)=>setBrand(e.target.value)}/>
                            {
                                error.isError && error.errortype === "brand"?<p id='errorm'>{error.message}</p>:null
                            }
                        </div>
                        <div>
                            <p>Cost Price</p>
                            <input type="text" className='ttt' value={costPrice} onChange={(e)=>setcostPrice(e.target.value)}/>
                            {
                                error.isError && error.errortype === "costprice"?<p id='errorm'>{error.message}</p>:null
                            }
                        </div>
                    </div>
                    <div className="svg">
                        <div>
                            <p>Selling Price</p>
                            <input type="text" className='ttt' value={sellingPrice} onChange={(e)=>setsellingPrice(e.target.value)}/>
                            {
                                error.isError && error.errortype === "sellingprice"?<p id='errorm'>{error.message}</p>:null
                            }
                        </div>
                        <div>
                            <p>Stock Quantity</p>
                            <input type="text" className='ttt' value={stockQuantity} onChange={(e)=>setStockQuantity(e.target.value)}/>
                            {
                                error.isError && error.errortype === "stockquantity"?<p id='errorm'>{error.message}</p>:null
                            }
                        </div>
                    </div>
                    <div className="svg">
                        <div>
                            <p>Reorder Level</p>
                            <input type="text" className='ttt' value={reorderLevel} onChange={(e)=>setReorderLevel(e.target.value)}/>
                            {
                                error.isError && error.errortype === "reorderlevel"?<p id='errorm'>{error.message}</p>:null
                            }
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="svg">
                        <button className='adding' onClick={handleEnter}>ADD PRODUCT</button>
                    </div>
                    
                </div>
            </main>: null
            }
            <div className="productmanage">
                <div className="spacexx"></div>
                    <button className='kjv' onClick={()=>setShow(true)}>add</button>
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
            <div className="mainx">
                <div className="title titlexc">
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
                    {/* <div className="hell">
                        <div><IoAddCircleOutline className='check' /></div>
                    </div> */}
                </div>
                <div className="items">   
                    {
                        availableproduct?.map((e, id)=>(
                        <div className="itema" key={id}>
                                <div className="eleven"><p>{e.productName}</p></div>
                                <div className="eleven"><p>{e.category}</p></div>
                                <div className="eleven"><p>{e.Brand}</p></div>
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
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default Productmanagment