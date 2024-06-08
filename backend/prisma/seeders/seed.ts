import prismaClient from "../../src/prisma";

async function SeedCriarTipoUsuarios(){
    await prismaClient.tipoUsuario.createMany({
        data:[
            {nome:"administrador",parametro_edit_config:true},
            {nome:"medico",parametro_edit_config:false},
            {nome:"recepcionista",parametro_edit_config:true},
        ]
    })
}


SeedCriarTipoUsuarios()