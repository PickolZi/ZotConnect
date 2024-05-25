
import { MapContainer, TileLayer, useMap, Marker, Popup,  } from 'react-leaflet';

const Map = ({events}) => {

    const startingPosition = [33.6424, -117.8417] 
    const bounds = [
        [33.6588, -117.8210],
        [33.6300, -117.8597],
      ]

    const redColor = { color: 'red' }
    
    return (
        <div className="h-[100%] flex flex-grow bg-pink-300">
            <MapContainer className='h-[100%] w-[100%]' 
            center={startingPosition} 
            zoom={15}
            maxBounds = {bounds}
            
            scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    minZoom = {15}
                    
                />
                
                {events.map((event) => (
                    <Marker position={event.geopoint}> 
                        {/* <Popup>{marker.popUp}</Popup> */}
                    </Marker>
                ))}
            mapContainer.setMaxZoom(15);

            {/* <Rectangle bounds={bounds} pathOptions={redColor} />         */}
            </MapContainer>
        </div>
    )
}

export default Map;