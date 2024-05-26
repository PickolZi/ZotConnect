import { useEffect, useState } from 'react';

import { Alert } from '@mui/material';

import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet';

const Map = ({events, map, setMap, choosingLocation, setChoosingLocation, setLocation}) => {
    const startingPosition = [33.6424, -117.8417] 
    const bounds = [
        [33.6588, -117.8210],
        [33.6300, -117.8597],
    ];

    
    useEffect(() => {
        if (map != null) {
            map.on('click', function(e) {
                if (choosingLocation) {
                    setLocation([e.latlng.lat, e.latlng.lng])
                }
            });
        }
    }, [map, choosingLocation])

    return (
        <div className="relative h-[100%] flex flex-grow bg-pink-300">
            {
                choosingLocation &&
                <Alert 
                    className="z-[999] absolute left-12 top-4" 
                    variant="filled" 
                    severity="info"
                >
                    Please click anywhere on the map to set a location for the event
                </Alert>
            }
            <MapContainer className='h-[100%] w-[100%]' 
                center={startingPosition} 
                zoom={15}
                maxBounds={bounds}
                scrollWheelZoom={true}
                ref={setMap}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    minZoom = {15}
                />
                
                {events.map((event) => (
                    <Marker 
                        key={event.event_id}
                        position={event.geopoint}
                    > 
                        <Popup className="h-[150px] w-[150px] flex">
                            <div className="content-center flex gap-2">
                                {event.title}
                                <div>              </div>
                                {event.description}
                                <div>              </div>
                                From: {String(event.start_date).slice(4,21)}, To {String(event.end_date).slice(4,21)}
                            </div>
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
            
        </div>
    )
}

export default Map;