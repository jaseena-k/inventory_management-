import express from 'express'
import productRoutes from './routes/product_routes.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors({}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/products',productRoutes)

app.listen(PORT, () => {
    console.log(`server is running on port${PORT}`)
})


