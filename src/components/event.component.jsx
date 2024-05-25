import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';


const EventTab = ({event}) => {
    return (
        <ListItemButton
            selected={false}
            // onClick={(event) => handleListItemClick(event, 0)}
        >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={event.title} />
        </ListItemButton>
    )
}

export default EventTab;