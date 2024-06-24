import { Request,Response } from "express"
import { CreateUsuarioService } from "../services/usuarioService"

class CreateUsuarioController{
    async criarTipoUsuario(req:Request,res:Response){
        const usuarioService = new CreateUsuarioService()
        const tipoUsuario = req.body
        try {
            await usuarioService.criarTipoUsuario(tipoUsuario)
            res.status(200).json({message:"Tipo Usuário Criado com Sucesso"})
        } catch (error) {
            if(error instanceof Error){
                res.status(500).json({message:error.message})
            }else{
                res.status(500).json({message:"Falha ao criar Tipo Usuário"})
            }
        }
    }

    async criarUsuario(req:Request,res:Response){
        const usuarioService = new CreateUsuarioService()
        const usuario = req.body

        try {
           await usuarioService.criarUsuario(usuario);
           res.status(200).json({message:'Usuario Criado Com Sucesso'}) 
        } catch (error) {
            if(error instanceof Error){
                res.status(500).json({message:error.message})
            }else{
                res.status(500).json({message:'Erro ao Criar Usuario'})
            }
        }
    }
}

export {CreateUsuarioController}