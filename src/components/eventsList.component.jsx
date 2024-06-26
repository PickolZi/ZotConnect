import { useEffect, useState } from 'react';

import EventTab from './event.component';

import Box from '@mui/material/Box';
import List from '@mui/material/List';


const EventsList = ({events, filterInput, eventSearchInput, map}) => {
    const [selectedEvent, setSelectedEvent] = useState("");

    useEffect(() => {
        console.log("selected event: ", selectedEvent)
    }, [selectedEvent])

    return (
        <>
            <h1 className="font-bolder text-xl bg-slate-50 mr-4"> Upcoming Events: </h1>
            <Box sx={{scrollbarColor:"ash #F0F8FF", scrollbarWidth:"thin",overflow:"auto", width: '100%', bgcolor: '#F0F8FF', color:'#454545' }}>
                <List component="nav" aria-label="main mailbox folders">
                    {
                        events.map((event) => {  
                            if (event.tags == filterInput.toLowerCase())
                                return (
                                    <EventTab
                                        key={event.event_id} 
                                        event={event} 
                                        selectedEvent={selectedEvent} 
                                        handleListItemClick={setSelectedEvent}
                                        map={map} 
                                    />  
                                )
                            if ((event.title.toLowerCase().includes(eventSearchInput.toLowerCase()) || event.description.toLowerCase().includes(eventSearchInput.toLowerCase())) && eventSearchInput.length > 0 && filterInput == "Filters ...")
                                return (
                                    <EventTab
                                        key={event.event_id} 
                                        event={event} 
                                        selectedEvent={selectedEvent} 
                                        handleListItemClick={setSelectedEvent} 
                                        map={map}
                                    />  
                                )
                            if (filterInput === "Filters ..." && eventSearchInput == "")
                                return (
                                    <EventTab
                                        key={event.event_id} 
                                        event={event} 
                                        selectedEvent={selectedEvent} 
                                        handleListItemClick={setSelectedEvent} 
                                        map={map}
                                    />  
                                )
                            })
                    }
                </List>
            </Box>
        </>
    )
}
export default EventsList;
