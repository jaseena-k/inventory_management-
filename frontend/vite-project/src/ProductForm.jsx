import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductForm({ editProduct, setEditProduct }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (editProduct) {
      setName(editProduct.name);
      setPrice(editProduct.price);
      setQuantity(editProduct.quantity);
    }
  }, [editProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = { name, price, quantity };


    if (editProduct) {
      await axios.put(
        `http://localhost:5001/api/products/${editProduct.id}`,
        productData
      );
      setEditProduct(null);
    }
    
    else {
      await axios.post(
        "http://localhost:5001/api/products",
        productData
      );
    }


    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <form className="mainContainer" onSubmit={handleSubmit}>
        <h1 className="heading1">Product Form</h1>
      <input className="formInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input className="formInput"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <input className="formInput"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />

      <button className="addbutton" onClick={editProduct ? "Update Product" : "Add Product"}>
        {editProduct ? "Update Product" : "Add Product"}
      </button>

    </form>
  );
}

export default ProductForm;