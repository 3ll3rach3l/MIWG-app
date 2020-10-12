import React, { useState, useEffect } from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm';
import Controls from '../components/controls/Controls';

const statusItems = [
    {id: 'missing', title: 'Missing'},
    {id: 'found', title: 'Found'},
    {id: 'deceased', title: 'Deceased'},
]

const initialValues ={
    id: 0,
    fullName: '',
    age: '',
    tribalAffiliation: '',
    location: '',
    dateLastSeen: new Date(),
    status: 'missing',
    // isPermanent: false,
}

export default function MissingForm(){
   const validate = (fieldValues = values) =>{
        let temp = {...errors}
        if ('fullName' in fieldValues) 
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ("age" in fieldValues)
          temp.age = fieldValues.age ? "" : "Please enter an age.";
        if ("tribalAffiliation" in fieldValues)
          temp.tribalAffiliation = fieldValues.tribalAffiliation > 9 ? "" : "This field is required.";
        if ("location" in fieldValues)
          temp.location = fieldValues.location ? "" : "Please enter a location";
        setErrors({
          ...temp,
        });

        if (fieldValues == values)
          return Object.values(temp).every((x) => x == "");
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialValues, true, validate);

  const handleSubmit = e => {
      e.preventDefault()
      if (validate()){
          console.log("I am submitted") //will need to dispatch to POST
          resetForm()
      }
  }

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
              label="Location"
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