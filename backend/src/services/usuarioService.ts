import dotenv from "dotenv";
dotenv.config();
import { validate } from "email-validator";
import { CreateUsuarioRepositorie,TipoUsuario,Usuario } from "../repositories/usuarioRepositorie"
import { cpf } from 'cpf-cnpj-validator'; 
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

class CreateUsuarioService{
    async logarUsuario(email:string,senha:string){
        const usuarioRepositorie = new CreateUsuarioRepositorie()

        const emailExiste = await usuarioRepositorie.verficarEmailExiste(email);

        if(!emailExiste){
            throw new Error('Email não esta em uso');
        }

        const dbUsuario = await usuarioRepositorie.pegarUsuarioEmail(email);

        const senhaCorreta = await compare(senha,dbUsuario!.senha)

        if(!senhaCorreta){
            throw new Error('Email ou Senha Inválidos');
        }

        const chaveSecreta = process.env.SECRET_KEY
        
        const token = sign({
            nomeUsuario:dbUsuario?.nome_usuario,
            nomeCompleto:dbUsuario?.nome_completo,
            email:dbUsuario?.email,
            idUsuario:dbUsuario?.id,
            idTipoUsuario:dbUsuario?.id_tipo_usuario
        },chaveSecreta!,{
            expiresIn:'30d'
        })

        return {
            nomeUsuario:dbUsuario?.nome_completo,
            nomeCompleto:dbUsuario?.nome_completo,
            idTipoUsuario:dbUsuario.id_tipo_usuario,
            token:token
        }
    }

    async criarTipoUsuario(tipoUsuario:TipoUsuario){
        const usuarioRepositorie = new CreateUsuarioRepositorie();

        const nomeTipoUsuarioExiste = await usuarioRepositorie.verificarDuplicidadeTipoUsuario(tipoUsuario.nome);
        
        if(nomeTipoUsuarioExiste){
            throw new Error("Tipo usuário já existe");
        }

        await usuarioRepositorie.criarTipoUsuario(tipoUsuario);
    }

    async criarUsuario(usuario:Usuario){
        const usuarioRepositorie = new CreateUsuarioRepositorie()

        const emailExiste = await usuarioRepositorie.verficarEmailExiste(usuario.email);

        if(emailExiste){
            throw new Error('Email Já esta em uso');
        }


        const usuarioExiste = await usuarioRepositorie.verificarUsuarioExiste(usuario.nome_usuario);

        if(usuarioExiste){
            throw new Error('Nome de Usuário ja esta em uso');
        }

        if(!cpf.isValid(usuario.cpf)){
            throw new Error('Cpf Invalido')
        }

       if(!validate(usuario.email)){
            throw new Error('Email Invalido') 
       } 

       usuario.senha = await hash(usuario.senha,8)

        await usuarioRepositorie.criarUsuario(usuario);
    }
}

export {CreateUsuarioService}