import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

//COMPONENTES
import { FormularioConfigClinica } from '../formularios/FormularioConfigClinica';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper':{
    width:'80%',
    height:'62%',
    maxWidth:'900px'
  }
}));

interface DialogConfigClinicaProps{
    open:boolean,
    setOpen:(e:boolean)=>void
}

export const DialogConfigClinica:React.FC<DialogConfigClinicaProps> = ({open,setOpen}) => {

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Configurações da Clínica
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <FormularioConfigClinica></FormularioConfigClinica>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Atualizar Configurações
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
