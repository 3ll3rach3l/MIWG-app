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
  const [status, setStatus] = useState('missing')
  
  const dispatch = useDispatch()
  
  // useEffect(() => {
  //       async function viewOneMissing() {
  //           const missingObj = await dispatch(fetchOneMissing())
  //           console.log('this is inside the missingObj', missingObj.missings)
  //           await setCard(missingObj.missings)
  //       }
  //       viewOneMissing()
  //   }, [dispatch]);
  

  const extractCoord = async () => {
      let address = location;
    try{
      const results = await getGeocode({ address });
      console.log('this is results in extract coord edit missing form', results)
      const { lat, lng } = await getLatLng(results[0]);
      console.log('these are coords in edit missing form', {lat, lng})
      dispatch(
        modifyMissing(fullName, age, tribalAffiliation, address, dateLastSeen, details, status, userId, lat, lng)
      )
      // console.log('values and coords', values, lat, lng)
     
      return history.push('/missing')
    }catch(e){
      console.log(e)
    };
  } 

  const handleUpdateMissing = () =>{
      if (location) {
          extractCoord()
      } else{
          dispatch(
              modifyMissing(
                  fullName, 
                  age, 
                  tribalAffiliation, 
                  dateLastSeen, 
                  details, 
                  status, 
                  userId, 
              )
          )
          return history.push(`/missing`)
      }
  }
 
    console.log(person)

    return (
      <Form onSubmit={handleUpdateMissing}>
        {/* <Grid container>
          {missing.map((person) =>( */}
            <div key={person.id}>
            <Grid item xs={6}>
            <Controls.Input 
              disabled
              label="Full Name"
              value={person.fullName}
            />
            <Controls.Input
              label="Update Age"
              value={person.age}
              name="age"
              onChange={e => setAge(e.target.value)}
            />
            <Controls.Input
              disabled
              label="Tribal Affiliation"
              name="tribalAffiliation"
              value={person.tribalAffiliation}
            />
            <Controls.Input 
              label="Update City Last Seen"
              value={person.location}
              name="location"
              onChange={e => setLocation(e.target.value)}
            
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.DatePicker
                name="dateLastSeen"
                label="Update Date Last Seen"
                value={person.dateLastSeen}
                onChange={e => setDateLastSeen(e.target.value)}
            />
            <Controls.Details 
              name="details"
              label="Add Additional Details"
              value={person.details}
              onChange={e => setDetails(e.target.value)}
            />
            <Controls.RadioGroup
              name="status"
              label="Update Status"
              value={person.status}
              onChange={e => setStatus(e.target.value)}
              items={statusItems}
            />

            <div>
              <Controls.Button type="submit" text="Update" />

            </div>
          </Grid>
          </div>


          {/* ))}
          
        </Grid> */}
      </Form>
    );
}