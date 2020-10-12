import React from 'react';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from '@reach/combobox';
import '@reach/combobox/styles.css'
import './search.css'

export default function Search({panTo}){
    //hook
    const {
        ready, 
        value, 
        suggestions: {status, data}, 
        setValue, 
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 39.099728, lng: () => -94.578568}, //will prefer places near the location
            radius:  100 * 1000, //how far around the center to we want (this is in meters now)
        }
    })


    return (
      <div className="search">
        <Combobox
          onSelect={async (address) => {
              setValue(address, false); //updates states
              clearSuggestions()
           try{
               const results = await getGeocode({address});
               console.log(results[0])
               const {lat, lng} = await getLatLng(results[0]); // this converts results from string to lat, lng
                console.log("this is lat long", lat, lng)
               panTo({lat, lng}); 

           } catch(error){
               console.error("error!")
               console.log(error)
           }
          }}
        >
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Enter a city"
          />
          <ComboboxPopover>
              {status === 'OK' && 
                data.map(({id, description}) => (
                <ComboboxOption key={id} value={description}/>
                ))}
          </ComboboxPopover>
        </Combobox>
      </div>
    );
}

