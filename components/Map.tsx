import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { locationType } from "../types"


interface IProps {
  location: locationType;
  }

declare const process : {
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string
  }
}

const Googlemap = ({ location }: IProps) => {
  
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY });

  if (loadError) return <div>Error</div>;
  if (!isLoaded) return <div></div>;

  return <Map location={location}/>;
}

const Map = ({ location }: IProps) => {
  
  const center = useMemo(() => ({
    lat: Number(`${location.lat}`),
    lng: Number(`${location.long}`)
  }), [location]);

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="map-container" >
      <Marker
        position={center}
        // key={Math.random()}      
        />
    </GoogleMap>
  );
}

export default Googlemap;