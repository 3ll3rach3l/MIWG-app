import React from 'react';
import { Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';
import history from '../store/history';

import Controls from '../components/controls/Controls';
import { Paper, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import './homePage.css'

const useStyles = makeStyles((theme) => ({
  background: {
    default: 'black'
  },
  paper: {
    margin: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    width: '60%',
    height: '100%',
    color: 'red',
    opacity: .9,
    marginLeft: theme.spacing(30),
    
    
  },

  buttons:{
      padding: '10px',
      width: '100%'
  }

}));

export default function HomePage() {
    const isLoggedIn = useSelector(state => state.auth.id);
    
    const classes = useStyles();
    // console.log("this is isLoggedIn", isLoggedIn)
    // if (!isLoggedIn) return <Redirect to='/login'></Redirect>

    return (
        <>
        <div className='pageWrapper'>
            <Container component="main" maxWidth="xs " elevation={3}>
            <Paper className={classes.paper}> 
                <Typography variant="h5">In various tribes, red is known to be the only color spirits see.
                It is hoped that by wearing red, we can call back the missing spirits
                of our women and children so we can lay them to rest...
                </Typography>
                <div className='imageContainer'>
                  <img src={'./homepage.JPG'} alt='Natives Mask Up'/>
                </div>
                <div className='buttonContainer'> 
                     <Controls.Button 
                     type="submit" 
                     text="Map" 
                     className={classes.buttons}
                     onClick={() => history.push('/map')}/>
                    <Controls.Button
                      text="Missing"
                      className={classes.buttons}
                      color="default"
                      onClick={() => history.push('/missing')}
                    />
                    
                </div>
            </Paper>
            </Container>
        </div>
        
        </>


    )

}

