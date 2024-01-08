import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer  } from 'react-leaflet'
import {Icon} from "leaflet";

function Map() {
    const markers = [
        {
            geocode: [48.8566, 2.3522],
            popUp: "Location"
        }
    ]

    const customIcon = new Icon({
        iconUrl: "../../public/icons/icon_ubicacion_map.png",
        iconSize: [38, 38]
    })

    return (
        <MapContainer className='h-[35rem]' center={[48.8566, 2.3522]} zoom={13}>
            <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {markers.map((marker, index) => (
                <Marker key={index} icon={customIcon} position={marker.geocode} />
            ))}
        </MapContainer>
    )
}

export default Map;

