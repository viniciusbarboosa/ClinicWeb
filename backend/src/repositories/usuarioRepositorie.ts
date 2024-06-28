import prisma from "../prisma"

interface TipoUsuario{
    nome:string,
    parametro_edit_config:boolean
}

interface Usuario{
  nome_usuario:string,
  nome_completo:string,
  cpf:string,
  email:string,
  senha:string,
  id_tipo_usuario:number
}

class CreateUsuarioRepositorie{
    async criarTipoUsuario(tipoUsuario:TipoUsuario){
        await prisma.tipoUsuario.create({
            data:{
                nome:tipoUsuario.nome,
                parametro_edit_config:tipoUsuario.parametro_edit_config
            }
        })
    }

    async criarUsuario(usuario:Usuario){
        await prisma.usuario.create({
            data:usuario
        })
    }
    //GET
    async pegarUsuarioEmail(email:string){
        const dbResponse = await prisma.usuario.findFirst({
            where:{
                email:email
            }
        })
        
        return dbResponse
    }

    //VERIFICAÇOES
    
    async verificarDuplicidadeTipoUsuario(nome:string){
        const dbResponse = await prisma.tipoUsuario.findMany({
            where:{
                nome:nome
            }
        })

        return dbResponse.length > 0
    }

    async verficarEmailExiste(email:string){
        const dbResponse = await prisma.usuario.findMany({
            where:{
                email:email
            }
        })

        return dbResponse.length > 0
    }

    async verificarUsuarioExiste(nome:string){
        const dbResponse = await prisma.usuario.findMany({
            where:{
                nome_usuario:nome
            }
        })

        return dbResponse.length > 0
    }
}

export {CreateUsuarioRepositorie,TipoUsuario,Usuario}