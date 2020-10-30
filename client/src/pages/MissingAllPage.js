import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import history from '../store/history'

import { fetchMissing } from '../store/actions/missing';

import MissingCard from '../components/MissingCard';
import MissingNav from '../components/MissingNav'

import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import './missingAll.css'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 200,
       
        
        
    },
    background:{
        default: 'black'

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        image: '/red-hand.svg',
        backgroundColor: red[500],
    },
    pos: {
        marginBotton: 12
    },
     gridContainer: {
      paddingTop: '10px',
      paddingLeft: '40px',
      paddingRight: '40px'
      
  }
}));

export default function MissingAll(){
    const dispatch = useDispatch()
    const classes = useStyles();
    
   
    const currentUserId = useSelector(state=> state.auth.id)
    const missing = useSelector(state => state.missingReducer.missing)

   
  
    //  useEffect(() => {
    //     async function getMissing() {
    //         const missingObj = await dispatch(fetchMissing())
    //         // console.log('this is inside the missingObj', missingObj.missings)
    //         await setCard(missingObj.missings)
    //     }
    //     getMissing()
    // }, [dispatch]);
    
    useEffect(() => {
           dispatch(fetchMissing())
    }, [dispatch]);
    
    
    if(!missing) return 'loading cards...'
    return(
        <div className='cardContainer'>
            <MissingNav />
            <div className='spacer'/>
        
            <Grid container  >
                <Grid item xs={10} m={6} s={4}>
                    <Grid container className={classes.gridContainer} justify='center' spacing={2}>
                    {missing.map((person, i) => (
                        <Grid key={person.id} item>
                        <MissingCard person={person} idx={i} />
                        </Grid>
                        
                        ))}

                </Grid>
            
            </Grid>
            </Grid>     
        </div>
    )
}