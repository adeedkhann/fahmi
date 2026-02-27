import { User} from "../models/user.model.ts"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.ts"

export const register = async (req , res)=>{
   try {
     const {name , email , password} = req.body
     if(!name || !email || !password){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
     }
     const user = await User.findOne({email});
     if(user){
        return res.status(400).json({
            success:false,
            message:"User already exist"
        })
     }

     const hashPassword = await bcrypt.hash(password , 10)

     await User.create({
        name,
        email,
        password:hashPassword
     })
     return res.status(200).json({
        success:true,
        message :"Accounnt created successfully"
     })
   } catch (error) {
    return res.status(500).json({
        success:false,
        message:"failed to register"
    })
   }
}

export const login = async(req , res)=>{
    try {
        const {email , password} = req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are mandatory"
            })
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password , user.password)
        if(!isPasswordMatch){
             return res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            })
        }
        generateToken(res,user, `welcome back ${user.name}`)

    } catch (error) {
        return res.status(500).json({
        success:false,
        message:"failed to\ login"
    })
    }

}


export const logout = async(req, res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged Out Succesfully",
            success:true
        })
    } catch (error) {
         return res.status(500).json({
        success:false,
        message:"failed to output"
    })
    }
}

export const getUserProfile = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}