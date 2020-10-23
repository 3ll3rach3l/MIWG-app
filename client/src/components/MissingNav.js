import React from "react";
import history from '../store/history'
import { useSelector } from 'react-redux';

import { AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Menu } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";

import useModal from "../components/useModal";
import FormModal from "../components/FormModal";
import LogoutButton from "../components/LogoutButton";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(-30),
   
  },
  title: {
    flexGrow: 1,
  },
  homeButton:{
     marginRight: theme.spacing(1),
    marginLeft: theme.spacing(10),
    width: '25%'
  }
  
}));

export default function MissingNav() {
  const classes = useStyles();
  const { isShowing, toggle } = useModal();
  const currentUserId = useSelector((state) => state.auth.id)
  console.log('current user id', currentUserId)

 

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
           
          >
              <Button className={classes.homeButton} variant='contained' onClick={(()=> history.push('/'))}> Home </Button>
              <MenuItem onClick={()=> history.push('/map')}>View Map</MenuItem>
          </IconButton>
          {currentUserId ? <Button variant="contained" color="secondary" onClick={toggle}>
            <Typography variant="h8" className={classes.title}>
                Report Missing
            </Typography> </Button>: (<Button variant="contained" color="secondary" onClick={toggle} disabled>
            <Typography variant="h8" className={classes.title}>
                Report Missing
            </Typography></Button>)}
          
          
          <FormModal isShowing={isShowing} hide={toggle} />
          {currentUserId ? <LogoutButton /> : null}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
