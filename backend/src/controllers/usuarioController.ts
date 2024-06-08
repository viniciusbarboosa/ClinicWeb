import { Request,Response } from "express"
import { CreateUsuarioService } from "../services/usuarioService"

class CreateUsuarioController{
    async criarTipoUsuario(req:Request,res:Response){
        const usuarioService = new CreateUsuarioService()
        const tipoUsuario = req.body
        try {
            await usuarioService.criarTipoUsuario(tipoUsuario)
            res.status(200).json({message:"Usuário Criado com Sucesso"})
        } catch (error) {
            if(error instanceof Error){
                res.status(500).json({message:error.message})
            }else{
                res.status(500).json({message:"Falha ao criar Usuário"})
            }
        }
    }
}

export {CreateUsuarioController}