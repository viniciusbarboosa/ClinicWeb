import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { List } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddBoxIcon from '@mui/icons-material/AddBox';

//UTILS
import { Link } from "react-router-dom";

export const Lista1 = () => {
    return (
        <List>
            <ListItem key={1} disablePadding>
                <ListItemButton component={Link} to="/" sx={{
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
                        <CalendarMonthIcon></CalendarMonthIcon>
                    </ListItemIcon>
                    <ListItemText primary={"Marcação"} />
                </ListItemButton>
            </ListItem>

            <ListItem key={2} disablePadding>
                <ListItemButton component={Link} to="/cadastros" sx={{
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
                        <AddBoxIcon></AddBoxIcon>
                    </ListItemIcon>
                    <ListItemText primary={"Cadastros"} />
                </ListItemButton>
            </ListItem>

        </List>
    )
}