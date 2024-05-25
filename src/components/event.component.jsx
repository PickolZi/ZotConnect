import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';


const EventTab = ({event, selectedEvent, handleListItemClick}) => {
    return (
        <ListItemButton
            selected={selectedEvent === event.event_id}
            onClick={() => handleListItemClick(event.event_id)}
        >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={event.title} />
        </ListItemButton>
    )
}

export default EventTab;