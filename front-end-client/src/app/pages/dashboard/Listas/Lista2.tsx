import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { List } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import { AppContext } from '../../../shared/contexts/AppContext';

export const Lista2 = () => {
    const {deslogar} = useContext(AppContext);
    return (
        <List>
            
            <ListItem key={1} disablePadding>
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

        </List>
    )
}
