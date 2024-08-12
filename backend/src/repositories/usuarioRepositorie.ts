import prisma from "../prisma"

interface TipoUsuario {
    nome: string,
    parametro_edit_config: boolean
}

interface Usuario {
    nome_usuario: string,
    nome_completo: string,
    cpf: string,
    email: string,
    senha: string,
    id_tipo_usuario: number
}

class CreateUsuarioRepositorie {
    async criarTipoUsuario(tipoUsuario: TipoUsuario) {
        try {
            await prisma.tipoUsuario.create({
                data: {
                    nome: tipoUsuario.nome,
                    parametro_edit_config: tipoUsuario.parametro_edit_config
                }
            })
        } catch (error) {
            throw new Error('Erro no Servidor');
        }

    }

    async criarUsuario(usuario: Usuario) {
        try {
            await prisma.usuario.create({
                data: usuario
            })
        } catch (error) {
            throw new Error('Erro no Servidor');
        }

    }

    //GET
    async pegarUsuarioEmail(email: string) {
        try {
            const dbResponse = await prisma.usuario.findFirst({
                where: {
                    email: email
                }
            })

            return dbResponse
        } catch (error) {
            throw new Error('Erro no Servidor');
        }

    }

    async pegarUsuarioId(id: number) {
        try {
            const dbResponse = await prisma.usuario.findFirst({
                where: {
                    id: id
                }
            })

            return dbResponse
        } catch (error) {
            throw new Error('Erro no Servidor');
        }

    }

    //VERIFICAÇOES

    async verificarDuplicidadeTipoUsuario(nome: string) {
        try {
            const dbResponse = await prisma.tipoUsuario.findMany({
                where: {
                    nome: nome
                }
            })

            return dbResponse.length > 0
        } catch (error) {
            throw new Error('Erro no Servidor');
        }

    }

    async verficarEmailExiste(email: string) {
        try {
            const dbResponse = await prisma.usuario.findMany({
                where: {
                    email: email
                }
            })

            return dbResponse.length > 0
        } catch (error) {
            throw new Error('Erro no Servidor');
        }

    }

    async verificarUsuarioExiste(nome: string) {
        try {
            const dbResponse = await prisma.usuario.findMany({
                where: {
                    nome_usuario: nome
                }
            })

            return dbResponse.length > 0
        } catch (error) {
            throw new Error('Erro no Servidor');
        }

    }
}

export { CreateUsuarioRepositorie, TipoUsuario, Usuario }