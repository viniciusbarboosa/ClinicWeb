import { CreateUsuarioRepositorie,TipoUsuario } from "../repositories/usuarioRepositorie"

class CreateUsuarioService{
    async criarTipoUsuario(tipoUsuario:TipoUsuario){
        const usuarioRepositorie = new CreateUsuarioRepositorie();

        const nomeTipoUsuarioExiste = await usuarioRepositorie.verificarDuplicidadeTipoUsuario(tipoUsuario.nome);
        
        if(nomeTipoUsuarioExiste){
            throw new Error("Tipo usuário já existe");
        }

        await usuarioRepositorie.criarTipoUsuario(tipoUsuario);
    }
}

export {CreateUsuarioService}