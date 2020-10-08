import React from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from '@reach/combobox'

import mapStyles from './mapStyles'
import './mapPage.css'

//can go in it's own component
const libraries = ['places'];

const mapContainerStyle = {
  width: '100vs',
  height: '100vh'
}

const center = {
  lat: 39.099728,
  lng: -94.578568,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
}

function MapPage(){
  //hooks
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries
  })

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  
    return (
      <div className="googleMap" style={{ width: "100vw", height: "100vh" }}>
       <h1>No more stolen sisters</h1> 
       <GoogleMap 
       mapContainerStyle={mapContainerStyle} 
       zoom={4.5} 
       center={center}
       options={options}></GoogleMap>
      </div>
    );
}

export default MapPage;