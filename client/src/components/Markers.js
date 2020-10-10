import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

export default function Markers({onMapClick}){
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null)

    // const onMapClick = React.useCallback((e) => {
    //   setMarkers((current) => [
    //     ...current,
    //     {
    //       lat: e.latLng.lat(),
    //       lng: e.latLng.lng(),
    //       time: new Date(),
    //     },
    //   ]);
    // }, []);
    
    
    return (
      <div className="markers">
        {/* below is the 'func' to add markers to map when a user clicks */}
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/red-hand.svg",
              scaledSize: new window.google.maps.Size(50, 50),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(25, 25),
            }}
            onClick={() => {
              setSelected(marker); // this click handler "selects" a marker that is already on the map aka you will be able to 'select' it to get info
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>This is Dope</h2>
              <p>Deciding how I want to utilize this...</p>
            </div>
          </InfoWindow>
        ) : null}
      </div>
    );

}
