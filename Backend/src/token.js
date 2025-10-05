import jwt from "jsonwebtoken";

export const generateAccessToken=(userId)=>{
        return jwt.sign({userId:userId},process.env.ACCESS_SECRET,{expiresIn:"10m"})
}

export const generateRefreshToken=(userId)=>{
        return jwt.sign({userId:userId},process.env.REFRESH_SECRET,{expiresIn:"3d"})
}