import { parseCookies } from "nookies"
import { ReactElement, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface TelaUsuarioNaoLogadoProps{
    element:ReactElement
}

export const TelaUsuarioNaoLogado:React.FC<TelaUsuarioNaoLogadoProps> = ({element}) => {
    const cookies = parseCookies()
    const token = cookies['@clinicWeb.token']
    const navigate = useNavigate()

    useEffect(()=>{
        if(token){
            navigate('/')
        }
    },[token,navigate])

    return token ? null : element 
}

interface TelaUsuarioLogadoProps{
    element:ReactElement
}

export const TelaUsuarioLogado:React.FC<TelaUsuarioLogadoProps> = ({element}) => {
    const cookies = parseCookies()
    const token = cookies['@clinicWeb.token']
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
    },[token,navigate])

    return token ? element : null
}