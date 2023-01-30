import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import styles from "./Map.module.scss";

const center = { lat: 27.92029, lng: -82.49779 }

export default function Map() {
    return (
        <LoadScript googleMapsApiKey="AIzaSyCJyy5YFRLlZuES_1zWSqCAzpBc4L9GnGw">
            <GoogleMap
                zoom={12}
                center={center}
                mapContainerClassName={styles.mapContainer}
            >
                <MarkerF position={center} />
            </GoogleMap>
        </LoadScript>
    )
}