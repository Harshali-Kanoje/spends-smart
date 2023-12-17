import express from 'express'
import mongoose from 'mongoose'
import dotevn from 'dotenv'
dotevn.config()
import { postApiTransaction ,getApiTransaction ,postAppSignup ,postAppLogin} from './controlller/Transaction.js';

const app = express();

app.use(express.json())

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    if (connection) {
        console.log("MongoDB Connected")
    }
}
connectDB();

const PORT = process.env.PORT || 5000;

app.post('/api/transaction', postApiTransaction)

app.get('/api/transactions', getApiTransaction)

app.post('/api/signup' ,postAppSignup)

app.post('/api/login' ,postAppLogin)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})