import { Box, Button, Divider, Paper, TextField, Typography, styled } from '@mui/material'
import React, { FormEvent, useContext, useState } from 'react'
import { AppContext } from '../../shared/contexts/AppContext'
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const Background = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: "url('assets/img/background1.jpg')",
    backgroundSize: 'cover',
    backgroundBlendMode: 'darken',
    backgroundColor: 'rgba(0,0,0,0.3)'
})

const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
})

const LoginPaper = styled(Paper)({
    width: '100%',
    maxWidth: '400px',
    padding: '40PX',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.8)',
    border: '2px solid #019C9B'
})

const InputBox = styled(Box)({
    marginBottom: '22px'
})

export const Login = () => {
    const { logar } = useContext(AppContext)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(false);
    const [textoError, setTextoError] = useState('');
    const [carregarReq, setCarregarReq] = useState(false)
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogar = async (e: FormEvent) => {
        e.preventDefault();
        setCarregarReq(true);
        const response = await logar(email, senha);

        if (response) {
            setTextoError(response)
            setError(true);
        }
        setCarregarReq(false);
    }

    return (
        <Background>
            <Container>
                <img src="assets/img/logo.png" alt="Logo" width={200} height={170} />
                <LoginPaper>
                    <Typography variant="h5" component="h1" color='textSecondary'>
                        LOGIN
                    </Typography>
                    <Divider style={{
                        margin: '20px 0px'
                    }} />
                    <form onSubmit={handleLogar}>
                        <InputBox>
                            {error && <Alert severity="error">{textoError}</Alert>}
                        </InputBox>
                        <InputBox>
                            <TextField label="Email" variant="outlined" type='email' fullWidth value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </InputBox>
                        <InputBox>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Senha"
                                    value={senha}
                                    onChange={(e)=>{
                                        setSenha(e.target.value)
                                    }}
                                />
                            </FormControl>
                        </InputBox>
                        <InputBox>
                            <Button variant="contained" fullWidth type='submit' disabled={carregarReq} >{carregarReq ? (<CircularProgress color="inherit" />) : ('LOGAR')}</Button>
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
