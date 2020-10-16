import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import history from '../store/history';
import { Grid, TextField} from '@material-ui/core';
import { useForm, Form } from './useForm';
import Controls from '../components/controls/Controls';
import { newMissing } from '../store/actions/missing';


const statusItems = [
    {id: 'missing', title: 'Missing'},
    {id: 'found', title: 'Found'},
    {id: 'deceased', title: 'Deceased'},
]

export default function MissingForm(){
  const dispatch = useDispatch()
  const userId = useSelector(state => state.auth.id);
  // console.log("userId", userId)
  // if (!userId) return <Redirect to='/login'></Redirect>
  
  const validate = (fieldValues = values) =>{
    let temp = {...errors}
    if ('fullName' in fieldValues) 
    temp.fullName = fieldValues.fullName ? "" : "Please enter full name."
    if ("age" in fieldValues)
    temp.age = fieldValues.age ? "" : "Please enter an age.";
    if ("tribalAffiliation" in fieldValues)
    temp.tribalAffiliation = fieldValues.tribalAffiliation ? "" : "Please enter tribal affiliation.";
    if ("location" in fieldValues)
    temp.location = fieldValues.location ? "" : "Please enter a location";
    setErrors({
      ...temp,
    });
    
    if (fieldValues === values)
    return Object.values(temp).every((x) => x === "");
  }
  
  const initialValues ={
      id: 0,
      fullName: '',
      age: '',
      tribalAffiliation: '',
      location: '',
      dateLastSeen: new Date(),
      details: '',
      status: 'missing',
      userId: userId
      // isPermanent: false,
  }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialValues, true, validate);

  const extractCoord = async () => {
    let address = values.location;
    let fullName = values.fullName;
    let age = values.age;
    let tribalAffiliation = values.tribalAffiliation;
    let dateLastSeen = values.dateLastSeen;
    let details = values.details;
    let status = values.status;
    let userId = values.userId
    try{
      const results = await getGeocode({ address });
      // console.log('this is results in extract coord', results)
      const { lat, lng } = await getLatLng(results[0]);
      console.log('these are coords', {lat, lng})
      dispatch(
        newMissing(fullName, age, tribalAffiliation, address, dateLastSeen, details, status, userId, lat, lng)
      )
      console.log('values and coords', values, lat, lng)
     
      return history.push('/map')
    }catch(e){
      console.log(e)
    };
  } 

  const handleSubmit = e => {
      e.preventDefault()
      if (validate()){
        extractCoord()
        // console.log("this is before dispatch", values)
        // dispatch(newMissing(values))
        // console.log("these are the values", values)
        resetForm()
      }
  }
  // if (!userId) return null
    return (
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />
            <Controls.Input
              label="Age"
              name="age"
              value={values.age}
              onChange={handleInputChange}
              error={errors.age}
            />
            <Controls.Input
              label="Tribal Affiliation"
              name="tribalAffiliation"
              value={values.tribalAffiliation}
              onChange={handleInputChange}
              error={errors.tribalAffiliation}
            />
            <Controls.Input //use search component here
              label="City, ST last seen"
              name="location"
              value={values.location}
              onChange={handleInputChange}
              error={errors.location}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.DatePicker
                name="dateLastSeen"
                label="Date last seen"
                value={values.dateLastSeen}
                onChange={handleInputChange}
            />
            <Controls.Details 
              name="details"
              label="Additional details"
              value={values.details}
              onChange={handleInputChange}
            />
            <Controls.RadioGroup
              name="status"
              label="Status"
              value={values.status}
              onChange={handleInputChange}
              items={statusItems}
            />
            {/* <Controls.Select
              name="departmentId"
              label="Department"
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeService.getDepartmentCollection()}
              error={errors.departmentId}
            /> */}
            {/* <Controls.Checkbox
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              onChange={handleInputChange}
            /> */}

            <div>
              <Controls.Button type="submit" text="Submit" />
              <Controls.Button
                text="Reset"
                color="default"
                onClick={resetForm}
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    );
}