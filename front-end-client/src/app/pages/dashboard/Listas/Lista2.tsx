import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { List } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../../shared/contexts/AppContext';
import { useState } from 'react';

//ELEMENTS
import { DialogConfigClinica } from '../Dialogs/DialogConfigClinica';

//ICONES
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const Lista2 = () => {
    const [openDialogConfig , setOpenDialogConfig] = useState(false)
    const { deslogar } = useContext(AppContext);

    return (
        <List>
            <ListItem key={1} disablePadding>
                <ListItemButton onClick={()=>setOpenDialogConfig(true)}  sx={{
                    transition: '0.3s',
                    '&:hover': {
                        backgroundColor: '#019C9B',
                        color: 'white',
                        '& .MuiListItemIcon-root': {
                            color: 'white'
                        }
                    }
                }}>
                    <ListItemIcon>
                        <SettingsIcon></SettingsIcon>
                    </ListItemIcon>
                    <ListItemText primary={"Config Clínica"} />
                </ListItemButton>
            </ListItem>


            <ListItem key={2} disablePadding>
                <ListItemButton onClick={deslogar} sx={{
                    transition: '0.3s',
                    '&:hover': {
                        backgroundColor: '#019C9B',
                        color: 'white',
                        '& .MuiListItemIcon-root': {
                            color: 'white'
                        }
                    }
                }}>
                    <ListItemIcon>
                        <LogoutIcon></LogoutIcon>
                    </ListItemIcon>
                    <ListItemText primary={"Deslogar"} />
                </ListItemButton>
            </ListItem>

            <DialogConfigClinica open={openDialogConfig } setOpen={setOpenDialogConfig}></DialogConfigClinica>

        </List>
    )
}
