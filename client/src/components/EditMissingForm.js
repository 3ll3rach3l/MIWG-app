import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyMissing, fetchOneMissing } from '../store/actions/missing';
import {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import history from '../store/history';
import { Grid } from '@material-ui/core';
import { Form } from './useForm';
import Controls from '../components/controls/Controls';




const statusItems = [
    {id: 'missing', title: 'Missing'},
    {id: 'found', title: 'Found'},
    {id: 'deceased', title: 'Deceased'},
]

export default function EditMissingForm({person}){
  const userId = useSelector(state => state.auth.id);
  // const person = useSelector(state => state.missingReducer.oneMissing)
  
  const [card, setCard] = React.useState([]);
  const [fullName, setFullName] = useState(null);
  const [age, setAge] = useState(null);
  const [tribalAffiliation, setTribalAffiliation] = useState(null);
  const [location, setLocation] = useState(null);
  const [dateLastSeen, setDateLastSeen] = useState(null);
  const [details, setDetails] = useState(null);
  const [status, setStatus] = useState(null)
  
  const dispatch = useDispatch()
  


  const extractCoord = async () => {
      let address = location;
      console.log('this is address', address)
    try{
      const results = await getGeocode({ address });
      console.log('this is results in extract coord edit missing form', results)
      const { lat, lng } = await getLatLng(results[0]);
      console.log('these are coords in edit missing form', {lat, lng})
      dispatch(
        modifyMissing( age,
    dateLastSeen, 
    details, 
    fullName, 
    lat, 
    lng, 
    location, 
    status,
    tribalAffiliation, 
    userId, )
      )
      // console.log('values and coords', values, lat, lng)
     
      return history.push('/missing')
    }catch(e){
      console.log(e)
    };
  } 

  const handleUpdateMissing = (e) =>{
    e.preventDefault()
      if (location) {
        console.log('new location', location)
          extractCoord()
      } else{
          dispatch(
              modifyMissing( 
                   age,
    dateLastSeen, 
    details, 
    fullName, 
    status,
    tribalAffiliation, 
    userId, 
              )
          )

          console.log('body',  age,
    dateLastSeen, 
    details, 
    fullName, 
    location, 
    status,
    tribalAffiliation, 
    userId, )
          return history.push(`/missing`)
      }
  }
 
    console.log('person', person)
    

    return (

      <Form onSubmit={handleUpdateMissing}>
            <div key={person.id}>
            <Grid item xs={6}>
            <Controls.Input 
              disabled={true}
              label="Full Name"
              value={person.fullName}
            />
              <Controls.Input
                disabled={true}
                label="Tribal Affiliation"
                name="tribalAffiliation"
                value={person.tribalAffiliation}
              />
            <Controls.Input
              label={`Update Age`}
              // value={person.age}
              name="age"
              onChange={e => setAge(e.target.value)}
              
            />
            <Controls.Input 
              label="Update City Seen"
              // value={person.location}
              name="location"
              onChange={e => setLocation(e.target.value)}
             
            
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.DatePicker
                name="dateLastSeen"
                label="Update Date Last Seen"
                // value={person.dateLastSeen}
                onChange={e => setDateLastSeen(e.target.value)}
                
            />
            <Controls.Details 
              name="details"
              label="Add Additional Details"
              // value={person.details}
              onChange={e => setDetails(e.target.value)}
             
            />
            <Controls.RadioGroup
              name="status"
              label="Update Status"
              // value={person.status}
              onChange={e => setStatus(e.target.value)}
              items={statusItems}

            />

            <div>
              <Controls.Button type="submit" text="Update" />

            </div>
          </Grid>
          </div>
      </Form>
      
    );
}