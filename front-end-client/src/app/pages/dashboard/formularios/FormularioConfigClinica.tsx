import React from 'react'
import { Button, Grid,TextField, Typography } from '@mui/material'
import MaskedInput from 'react-text-mask'

//ICONES
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DeleteIcon from '@mui/icons-material/Delete';

export const FormularioConfigClinica = () => {
  return (
    <Grid container spacing={2}>
        
        <Grid item xs={7}>
            <Grid container spacing={1}>
                <Grid item xs={12}><TextField label="Nome Da Clínica" variant="outlined" fullWidth/></Grid>
                <Grid item xs={5}>
                    <TextField label="Cep" variant="outlined" fullWidth 
                    InputProps={{
                        inputComponent:MaskedInput as any,
                        inputProps:{
                            mask:[ /\d/, /\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/]
                        }
                    }}
                /></Grid>
                <Grid item xs={7}><TextField label="Endereço" variant="outlined" fullWidth/></Grid>
                <Grid item xs={5}><TextField label="Bairro" variant="outlined" fullWidth/></Grid>
                <Grid item xs={4}><TextField label="Cidade" variant="outlined" fullWidth/></Grid>
                <Grid item xs={3}><TextField label="Estado" variant="outlined" fullWidth/></Grid>
                <Grid item xs={6}>
                    <TextField label="Telefone" variant="outlined" fullWidth
                        InputProps={{
                            inputComponent:MaskedInput as any,
                            inputProps:{
                                mask:['(', /\d/, /\d/, ')', ' ','9',/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Cnpj" variant="outlined" fullWidth
                    InputProps={{
                        inputComponent:MaskedInput as any,
                        inputProps:{
                            mask:[/\d/, /\d/, '.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/, ]
                        }
                    }}/>
                </Grid>
            </Grid>
            
        </Grid>
        
        <Grid item xs={5}>

            <Grid container  alignItems={'center'} spacing={2}>
                <Grid item xs={12}>
                    <div style={{
                        width:'100%',
                        height:'170px',
                        backgroundColor:'#f0f0f0',
                        textAlign:'center'
                    }}>
                        <Typography>LOGO</Typography>
                    </div>
                </Grid>

                    
            </Grid>

            <Grid container  alignItems={'center'} spacing={2} style={{
                marginTop:'1px'
            }}>
                <Grid item xs={6}><Button variant="contained" startIcon={<FileUploadIcon></FileUploadIcon>}>Atualizar Logo</Button></Grid>
                <Grid item xs={6}><Button color='error' variant="contained" startIcon={<DeleteIcon></DeleteIcon>}>Deletar Logo</Button></Grid>
            </Grid>

        </Grid>
        
        <Grid item xs={12}>
            <TextField label="Rodapé" variant="outlined" fullWidth/>
        </Grid>
    </Grid>
  )
}
