import { useEffect, useState } from 'react';

import EventTab from './event.component';

import Box from '@mui/material/Box';
import List from '@mui/material/List';


const EventsList = ({events}) => {
    const [selectedEvent, setSelectedEvent] = useState("");

    useEffect(() => {
        console.log("selected event: ", selectedEvent)
    }, [selectedEvent])

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    events.map((event) => {
                        return (
                            <EventTab 
                                event={event} 
                                selectedEvent={selectedEvent} 
                                handleListItemClick={setSelectedEvent} 
                            />
                        )
                    })
                }
            </List>
        </Box>
    )
}
export default EventsList;
