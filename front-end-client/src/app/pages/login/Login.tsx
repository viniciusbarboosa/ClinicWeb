import { Box, Button, Divider, Paper, TextField, Typography, styled } from '@mui/material'
import React, { FormEvent, useContext, useState } from 'react'
import { AppContext } from '../shared/contexts/AppContext'

const Background = styled('div')({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100vh',
    backgroundImage:"url('assets/img/background1.jpg')",
    backgroundSize:'cover',
    backgroundBlendMode:'darken',
    backgroundColor:'rgba(0,0,0,0.3)'
})

const Container = styled('div')({
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
})

const LoginPaper = styled(Paper)({
    width:'100%',
    maxWidth:'400px',
    padding:'40PX',
    textAlign:'center',
    borderRadius:'10px',
    boxShadow:'0px 4px 8px rgba(0,0,0,0.8)',
    border:'2px solid #019C9B'
})

const InputBox = styled(Box)({
    marginBottom:'22px'
})

export const Login = () => {
    const {logar} = useContext(AppContext)
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const handleLogar = async (e:FormEvent) => {
        e.preventDefault();
        await logar(email,senha)
    }

  return (
    <Background>
        <Container>
            <img src="assets/img/logo.png" alt="Logo" width={200} height={170}/>
            <LoginPaper>
                <Typography variant="h5" component="h1" color='textSecondary'>
                    LOGIN
                </Typography>
                <Divider style={{
                    margin:'20px 0px'
                }}/>
                <form onSubmit={handleLogar}>
                <InputBox>    
                    <TextField label="Email" variant="outlined" type='email' fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </InputBox>
                <InputBox>
                    <TextField  label="Senha" variant="outlined" fullWidth type='password' value={senha} onChange={(e)=>{setSenha(e.target.value)}}/>
                </InputBox>
                <InputBox>
                    <Button variant="contained" fullWidth type='submit'>ENTRAR</Button>
                </InputBox>
                </form>
                <Typography variant="body1" color='textSecondary'>
                    Se não tiver um login <br></br> fale com o admin do sistema
                </Typography> 
            </LoginPaper>
        </Container>
    </Background>
  )
}
