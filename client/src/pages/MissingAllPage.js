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
            <Grid container spacing={4} className={classes.gridContainer} justify='center'>
                <Grid item xs={12} sm={6} md={4}>
                    <MissingCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MissingCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MissingCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MissingCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MissingCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MissingCard/>
                </Grid>
            {/* {missing.map((person, idx) => {
                return(
                    <Grid item xs={12} sm={6} md={4}>
                        <MissingCard idx={idx} key={idx.id}/>
                    </Grid>
                )
            })} */}
                
            </Grid>
    )
}