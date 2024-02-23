import './Sales.css'
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegSquareCheck } from "react-icons/fa6";
import { IoAddCircleOutline,IoReceiptOutline } from "react-icons/io5";
// import { FaCheckSquare } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from 'react';

const Sales=()=>{
    const [color, setColor]= useState("")
    const [item, setItem]= useState([])
    const [itemay, setItemay]= useState([])
    // const [newArray, SetNewArray] = useState(false)

    const handleAddItem=()=>{
        // SetNewArray(true)
        const newItem = [...item, []]
        setItem(newItem)
    }
    const handleChange=(unchangeValue,i)=>{
        const inputData = [...item ]
        inputData [i]= unchangeValue.target.value
        setItem(inputData)
        console.log(inputData)
    }
    const handleDelete=()=>{

    }
    return(
        <div className="saleswrapper">
            <div className="saleswrapperdiv">
                <div className="sales">
                    <button className='addbutton' onClick={handleAddItem}>ADD ITEM</button>
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
                    {/* <div className="person" id='got'>
                        <h5>Total Sales</h5>
                        <div className="namex">
                            <TbCurrencyNaira className='naira'/><p>188000</p>
                        </div>
                    </div> */}
                    <div className="divup"><RxDropdownMenu /></div>
                </div>
                <main className='mainxp'>
                <div className="title">
                    <div className="headers">
                        <p>ITEM NAME</p>
                    </div>
                    <div className="headers">
                        <p>ITEM DESC</p>
                    </div>
                    <div className="headers">
                        <p>PRICE</p>
                    </div>
                    <div className="headers">
                        <p>QUANTITY</p>
                    </div>
                    <div className="headers">
                        <p>AMOUNT</p>
                    </div>
                    <div className="headers">
                        <p>TAX</p>
                    </div>
                    <div className="headers">
                        <p>TOTAL</p>
                    </div>
                    <div className="headers">
                        <p>ACTIONS</p>
                    </div>
                </div>
            
                    <div className="items">
                    {
                        
                        item.map((e,id)=>(
                            <div className='adhd' key={id}>
                        <div className="itema">
                        
                        <div className="real">
                            <input type="text" />
                        </div>
                        <div className="real">
                            <input type="text" />
                        </div>
                        <div className="real">
                            <input type="number" />
                        </div>
                        <div className="real">
                            <input type="number" />
                        </div>
                        <div className="real">
                            <input type="number" />
                        </div>
                        <div className="real">
                            <input type="number" />
                        </div>
                        <div className="real">
                            <input type="number" />
                        </div>
                        <div className="real real2">
                            <div><MdDeleteForever className='delete'/></div>
                            <div><IoAddCircleOutline className='check' onClick={handleAddItem}/></div>
                        </div>
                    </div>
                    </div>
                        ))
                        
                    }
                    <div className="confirm">
                        <div><FaRegSquareCheck className='check2'/></div>
                    </div>
                </div>
                </main>
            </div>
            
        </div>
    )
}

export default Sales