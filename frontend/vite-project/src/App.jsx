import React from "react";
import ProductForm from "./ProductForm";
import ProductList from "./productsList";
import { useState } from "react";

function App() {

  const [editProduct, setEditProduct] = useState(null)
  
  return (

    <div className="container">
      <h1 className="heading">Inventory Mangement</h1>
      <ProductForm
        editProduct={editProduct}
        setEditProduct={setEditProduct}
      />
      <div>
        <ProductList
          setEditProduct={setEditProduct}
        />
      </div>

    </div>
  )
}


export default App