import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/dbConnect.ts"
import userRoute from "./routes/user.route.ts"
import cookieParser from "cookie-parser";
import cors from "cors";


dotenv.config({})
//call dbconnect
connectDB()
const app = express()

const PORT = process.env.PORT || 3000;
//def middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
 origin : "http://localhost:5173",
 credentials:true
}))

//apis

app.use("/api/v1/user",userRoute )

app.get("/home" ,(_,res)=>{

    res.status(200).json({
        success:true,
        message:"Hello i am coming from backend"
    })
})

app.listen(PORT ,()=>{
    console.log(`server listen at port ${PORT}`)
})