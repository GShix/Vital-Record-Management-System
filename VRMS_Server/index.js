import express from 'express';
import connectDatabase from './database/database.js'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from "./routes/user/userRoutes.js"
import adminLoginRoute from "./routes/admin/authRoutes.js"
import adminApplicationRoute from './routes/admin/adminApplicationsRoutes.js';

dotenv.config();
const app = express();
connectDatabase(process.env.Mongoose_URI);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    // origin:"https://vrms-babaimuni.vercel.app",
    origin:"*",
    methods:['GET', 'PUT', 'POST']
}))

//Home API
app.get('/', (req, res) => {
    res.status(200).json({
        message: "I am live" 
    })
})


//api for admin
app.use('/api/admin',adminLoginRoute)
app.use("/api/admin/applications",adminApplicationRoute)

//User API
app.use("/api/user",userRouter)

//Listen request at server
app.listen(9000, (req, res) => {
    console.log("Server has started at port 9000")
})