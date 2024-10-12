import express from 'express'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute.js'
import laptopRoute from './routes/laptopRoute.js'
import wearableRoute from './routes/wearableRoute.js'
import accessoryRoute from './routes/accessoryRoute.js'
import gamingRoute from './routes/gamingRoute.js'
import mobileRoute from './routes/mobileRoute.js'
import tabletRoute from './routes/tabletRoute.js'
import productRoute from './routes/productsRoute.js'
//import orderRoutes from './routes/OrderRoutes'
//import contactRoute from './routes/contactRoute'
import dotenv from 'dotenv'
import cors from 'cors';
import { seedInitialLaptops } from './services/laptopService.js'
import { seedInitialAccessories } from './services/accessoryService.js'
import { seedInitialGaming } from './services/gamingService.js'
import { seedInitialMobiles } from './services/mobileService.js'
import { seedInitialTablets } from './services/tabletService.js'
import { seedInitialWearable } from './services/wearableService.js'
import { seedInitialProducts } from './services/productsService.js'

dotenv.config()

const app = express()
const port = 5000;

app.use(express.json())
app.use(cors());


mongoose
    .connect('mongodb://localhost:27017/TechCrest')
    .then(() => console.log('Mongo Connected Successfully!'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

//app.use('/users', usersRoutes);
//app.use('/confirm', orderRoutes)
//app.use('/contact', contactRoute);
app.use('/laptop', laptopRoute);
app.use('/mobile', mobileRoute);
app.use('/tablet', tabletRoute);
app.use('/accessory', accessoryRoute);
app.use('/gaming', gamingRoute);
app.use('/wearable', wearableRoute);
app.use('/products', productRoute);
app.use("/user", userRoute);



seedInitialLaptops()
seedInitialGaming()
seedInitialMobiles()
seedInitialTablets()
seedInitialWearable()
seedInitialAccessories()
seedInitialProducts()





app.listen(port, () =>{
    console.log(`Server Is Running On Port ${port}`);
});