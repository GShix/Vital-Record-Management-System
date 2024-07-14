import express from 'express';
import connectDatabase from './database/index.js'
import dotenv from 'dotenv'
import cors from 'cors'
import Birth from './model/birthModel.js'
import Death from './model/deathModel.js'
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



//api for admin login
app.use('/api/vrms/admin',adminLoginRoute)

app.get("/api/admin/death",async(req,res)=>{
    // const adminName = req.user.adminName
    // const deathApplications = await Death.find({_id:{$ne:adminName}})
    const deathApplications = await Death.find();
    if(deathApplications.length !==0){
        return res.status(200).json({
            message:"Death Applications fetched successfully",
            data: deathApplications
        })
    }
    res.status(404).json({
        message : "User Collection is empty",
        data  : []
    })
})
//admin birth
app.get("/api/admin/birth",async(req,res)=>{
    // const adminName = req.user.adminName
    // const deathApplications = await Death.find({_id:{$ne:adminName}})
    const birthApplications = await Birth.find();
    if(birthApplications.length !==0){
        return res.status(200).json({
            message:"Birth Applications fetched successfully",
            data: birthApplications
        })
    }
    res.status(404).json({
        message : "User Collection is empty",
        data  : []
    })
})

app.use("/api/admin/applications",adminApplicationRoute)
//API for application approbation
app.post("/api/admin/birthVerification/:id")

app.post("/api/admin/deathVerification/:id")

//API for delete form
app.post("/api/admin/birthRejection/:id")

app.post("/api/admin/deathRejection/:id",)

//User API
app.use("/api/user",userRouter)

//Listen request at server
app.listen(9000, (req, res) => {
    console.log("Server has started at port 9000")
})