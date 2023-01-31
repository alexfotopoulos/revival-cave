import { GoogleMap, InfoWindowF, LoadScript, MarkerF } from "@react-google-maps/api";
import styles from "./Map.module.scss";
import { useState } from "react";

const center = { lat: 27.92029, lng: -82.49779 }

export default function Map() {
    const [showWindow, setShowWindow] = useState(false);

    return (
        <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`}>
            <GoogleMap
                zoom={12}
                center={center}
                mapContainerClassName={styles.mapContainer}
            >
                <MarkerF position={center} onClick={() => setShowWindow(true)} />
                {showWindow && <InfoWindowF position={center} onCloseClick={() => setShowWindow(false)}>
                    <div>
                        <h4>3310 W Empedrado St, Tampa, FL 33629</h4>
                    </div>
                </InfoWindowF>}
            </GoogleMap>
        </LoadScript>
    )
}