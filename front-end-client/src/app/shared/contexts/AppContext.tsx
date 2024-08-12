import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { destroyCookie, parseCookies, setCookie } from "nookies";

type Usuario = {
    nomeUsuario:string,
    nomeCompleto:string,
    idTipoUsuario:number
}

type AppContextData = {
   usuario:Usuario | undefined,
   logado:boolean,
   logar:(email:string,senha:string)=>Promise<string|null>,
   deslogar:()=>void 
}

type AppProviderData = {
    children:ReactNode
}

export const AppContext = createContext({} as AppContextData)

export const AppProvider = ({children}:AppProviderData) =>{
    useEffect(()=>{
        const pegarUsuarioId = async () => {
            try {
                const response = await api.get('api/usuarios/meuUsuarioId')  

                setUsuario({
                    nomeUsuario:response.data.usuario.nomeUsuario,
                    nomeCompleto:response.data.usuario.nomeCompleto,
                    idTipoUsuario:response.data.usuario.idTipoUsuario
                })
            } catch (error) {
                deslogar()
            }
        }

        const cookies = parseCookies()
        
        if(cookies['@clinicWeb.token']){
            pegarUsuarioId()
        }
            
    },[])

    const [usuario,setUsuario] = useState<Usuario>();
    const logado = Boolean(usuario);

    const logar = async (email:string,senha:string)=>{
        try {
            const response = await api.post('api/usuarios/logarUsuario', {
                email:email,
                senha:senha
            })

            setCookie(null, '@clinicWeb.token',response.data.usuario.token, {
                maxAge: 30 * 24 * 60 * 60,
            })

            api.defaults.headers['Authorization'] = 'Bearer '+response.data.usuario.token
            window.location.href = '/'
            return null     
        } catch (error:any) {
            return error.response.data.message
        }
    }

    const deslogar = () => {
        try {
            destroyCookie(null, '@clinicWeb.token')
            window.location.href = '/login'
        } catch (error) {
            console.log("Error ao deslogar");
        }
    }

    return(
        <AppContext.Provider value={{usuario,logado,logar,deslogar}}>
            {children}
        </AppContext.Provider>
    )
}