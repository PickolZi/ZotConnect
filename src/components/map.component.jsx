
import { MapContainer, TileLayer, useMap, Marker, Popup,  } from 'react-leaflet';

const Map = ({events}) => {
    // console.log(events)

    const startingPosition = [33.6424, -117.8417] 
    const markers = [
        {
            location: [33.6424, -117.8437],
            popUp: [
                <h1>Name:</h1>,
                <h1>Location:</h1>,
                <h1>Event:</h1>
            ]
        },
        {
            location: [33.6444, -117.8417],
            popUp: [
                <h1>Name:</h1>,
                <h1>Location:</h1>,
                <h1>Event:</h1>
            ]
        }
    ];
    
    return (
        <div className="h-[100%] flex flex-grow bg-pink-300">
            <MapContainer className='h-[100%] w-[100%]' 
            center={startingPosition} 
            zoom={15} 
            scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {events.map((event) => (
                    <Marker position={event.geopoint}> 
                        {/* <Popup>{marker.popUp}</Popup> */}
                    </Marker>
                ))}
                
            </MapContainer>
        </div>
    )
}

export default Map;