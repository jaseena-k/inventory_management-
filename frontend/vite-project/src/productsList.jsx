import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { deleteProduct } from "../../../backend/controls/product_controls";
import axios from "axios";

function productList({setEditProduct}) {
    const [products, setProducts] = useState([])
    // const [err,setErrorMsg]=useState("")


    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('http://localhost:5001/api/products')
            setProducts(data)

        } catch (err) {
            console.log(err)

        }

    }
    const deleteProduct = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:5001/api/products/${id}`)
            // fetchProducts()

        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[])



    return (

        <div className="container1">
            <h1 style={{color: 'white'}}>product list</h1>
            <div>
                {products.map(p=>(
                    <div  className ="listContainer" key={p.id}>
                        {p.name}
                        <br />
                        ₹{p.price}
                        <br />
                        Qnty:{p.quantity}
                        <br />
                        <button className="button1"onClick={()=>deleteProduct(p.id)}>delete</button>
                        <button className="button1" onClick={()=>{setEditProduct(p)}}>edit</button>
                        
                    </div>
                ))}
            </div>
        </div>
    )

}
export default productList