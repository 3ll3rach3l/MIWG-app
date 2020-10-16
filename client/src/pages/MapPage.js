import React, {useEffect} from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { useDispatch, useSelector } from "react-redux";
import { fetchMissing } from '../store/actions/missing';
import {useQuery, useMutation, queryCache} from 'react-query'

import mapStyles from './mapStyles'
import Search from '../components/Search'
import NavBar from '../components/NavBar'

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



export default function MapPage(){
  //hooks
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });
  
  const dispatch = useDispatch()
  //state - useState is used when we want React to re-render
  const missing = useSelector(state => state.missingReducer.missing)
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null)

  // console.log('this is missing state', missing)
  useEffect(()=>{
    async function getMissing(){
     const missingObj= await dispatch(fetchMissing())
    //  console.log('this is inside the missingObj', missingObj)
     setMarkers(missingObj.missings) //possibly just missingObj.missing
    }
    getMissing()
  }, [dispatch]);


  //this event is listening for every click on map and registering the lat & long in state
  const onMapClick = React.useCallback((e) => {
   // dispatch(postCity(city, state, lat, lng))
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

 

  

  const mapRef = React.useRef(); //we use ref when we want to retain state without re-rendering
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({lat, lng}) => { //this is for panning to the city input from search
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(14);
  }, []);



  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  if(!missing) return "loading missing"
  
  return (
    <div className="googleMap" style={{ width: "100vw", height: "100vh" }}>
      {/* <h1>No more stolen sisters</h1> */}

      <Search panTo={panTo}/> 
      <NavBar />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={4.5}
        center={center}
        options={options}
        // onClick={onMapClick}
        onLoad={onMapLoad}
      >
       
        {/* below is the 'func' to add markers to map when a user clicks */}
        {missing.map((location) => (
          <Marker
            key={location.location}
            position={{ lat: location.lat, lng: location.lng }}
            icon={{
              url: "/red-hand.svg",
              scaledSize: new window.google.maps.Size(50, 50),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(25, 25),
            }}
            onClick={() => {
              setSelected(location); // this click handler "selects" a city that is already on the map aka you will be able to 'select' it to get info
            }}
          />
        ))}

        {selected ? (
          <InfoWindow 
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={()=>{setSelected(null)}}
          >
            <div>
              <h2>This is Dope</h2>
              <p>
                Deciding how I want to utilize this...
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

