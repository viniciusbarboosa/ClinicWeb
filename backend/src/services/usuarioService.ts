import { validate } from "email-validator";
import { CreateUsuarioRepositorie,TipoUsuario,Usuario } from "../repositories/usuarioRepositorie"
import { cpf } from 'cpf-cnpj-validator'; 
import { hash } from "bcryptjs";

class CreateUsuarioService{
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