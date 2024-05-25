import * as React from 'react';
import { useState } from 'react';

import EventTab from './event.component';

import Box from '@mui/material/Box';
import List from '@mui/material/List';



const EventsList = ({events}) => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    events.map((event) => {
                        return (
                            <EventTab event={event}/>
                        )
                    })
                }
            </List>
        </Box>
    )
}
export default EventsList;
