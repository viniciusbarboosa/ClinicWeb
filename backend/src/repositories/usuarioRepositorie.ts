import prisma from "../prisma"

interface TipoUsuario{
    nome:string,
    parametro_edit_config:boolean
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

    async verificarDuplicidadeTipoUsuario(nome:string){
        const dbResponse = await prisma.tipoUsuario.findMany({
            where:{
                nome:nome
            }
        })

        return dbResponse.length > 0
    }
}

export {CreateUsuarioRepositorie,TipoUsuario}