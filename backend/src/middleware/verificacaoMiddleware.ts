import dotenv from "dotenv";
dotenv.config();
import { Request,Response,NextFunction } from "express";
import { verify,JwtPayload } from "jsonwebtoken";

export const verificacaoToken = (req:Request,res:Response,next:NextFunction) =>{
    const tokenAcesso = req.headers.authorization

    if(!tokenAcesso){
        return res.status(401).json({message:"Usuário Não Autorizado"})
    }

    
    const token = tokenAcesso.split(" ")[1]

    try {
        const chaveSecreta = process.env.SECRET_KEY
        const dadosToken = verify(token,chaveSecreta!)
        
        req.idUsuario = (dadosToken as JwtPayload).idUsuario
        
        return next()
       
    } catch (error) {
        return res.status(500).json({message:"Usuário Não Autorizado"})
    }

} 