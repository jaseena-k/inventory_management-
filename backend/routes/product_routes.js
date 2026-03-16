import express from 'express'
import { addProduct, getProducts, updateProduct, deleteProduct } from "../controls/product_controls.js"
const router = express.Router()

router.get("/", getProducts)
router.post("/", addProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router