import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Map = () => {
    return (
        <div className="h-[100%] flex flex-grow bg-pink-300">
            <MapContainer className='h-[100%] w-[100%]' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;