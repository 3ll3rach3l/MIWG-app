import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMissing } from '../store/actions/missing';


import { Grid } from '@material-ui/core'
import MissingCard from '../components/MissingCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
      paddingTop: '10px',
      paddingLeft: '40px',
      paddingRight: '40px'
  }
}));

export default function MissingAll(){
    const classes = useStyles()
    const dispatch = useDispatch()
    const missing = useSelector(state => state.missingReducer.missing)
    
    
    useEffect(() => {
           dispatch(fetchMissing())
    }, [dispatch]);
    
    

    return(
        <div>
            <MissingCard />
        </div>
    )
}