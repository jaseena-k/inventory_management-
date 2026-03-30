import db from '../db.js'

const getProducts = (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) return res.send(err)
        res.json(result)

    })
}

const addProduct = (req, res) => {
  const { name, price, quantity } = req.body;

  db.query(
    "INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)",
    [name, price, quantity],
    (err, result) => {
      if (err) return res.send(err)
      res.json("Product Added")
    }
  );
};


const updateProduct = (req, res) => {
    const { id } = req.params
    const { name, price, quantity } = req.body

    db.query(
        "UPDATE products SET name=?,price=?,quantity=? WHERE id=?",
        [name, price, quantity, id],
        (err) => {
            if (err) return res.send(err)
            res.json("product updated")
        }
    )
}

const deleteProduct = (req, res) => {
    const { id } = req.params

    db.query("DELETE FROM products WHERE id=?",
        [id],
        (err) => {
            if (err) return res.send(err)
            res.json("product deleted")
        }
    )
}

export { getProducts, addProduct, deleteProduct, updateProduct }
