import express from 'express'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute.js'
import { seedInitialProducts } from './services/productsService.js'
import productRoute from './routes/productsRoute.js'
import dotenv from 'dotenv'
import cors from 'cors';


dotenv.config()

const app = express()
const port = 5000;

app.use(express.json())
app.use(cors());


mongoose
    .connect('mongodb://localhost:27017/TechCrest')
    .then(() => console.log('Mongo Connected Successfully!'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));


app.use('/products', productRoute);
app.use("/user", userRoute);


seedInitialProducts()


app.listen(port, () =>{
    console.log(`Server Is Running On Port ${port}`);
});