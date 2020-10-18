import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import LogoutButton from '../components/LogoutButton';
import { Paper, Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    width: '80%',
    color: 'red',
    opacity: .8
    
  },

}));

export default function HomePage() {
    const isLoggedIn = useSelector(state => !!state.auth.id);
    const classes = useStyles();
    // console.log("this is isLoggedIn", isLoggedIn)
    if (!isLoggedIn) return <Redirect to='/login'></Redirect>

    return (
        <>
        <div>
            <Container component="main" maxWidth="xs " elevation={3}>
            <Paper className={classes.paper}> 
                <Typography variant="h3">In various tribes, red is known to be the only color spirits see.
                It is hoped that by wearing red, we can call back the missing spirits
                of our women and children so we can lay them to rest...
                </Typography>
                <div> 
                    <Link to="/map">Map</Link>
                </div>
                <div>
                <Link to="/missing">Missing</Link>
                </div>
            </Paper>
            </Container>
        </div>
        
        </>


    )

}

