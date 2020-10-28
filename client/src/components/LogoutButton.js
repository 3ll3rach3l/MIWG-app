import React from "react";
import { useDispatch } from "react-redux";
import { logout } from '../store/actions/auth'
import Cookies from "js-cookie";
import history from '../store/history';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logoutButton: {
    marginRight: theme.spacing(10),
    marginLeft: theme.spacing(20)
   
  },
  
  
}));



function LogoutButton() {
  const dispatch = useDispatch();
  const classes = useStyles()
  

  const handleClick = async () => {
    const res = await dispatch(logout());
    //debugger
    if (res.ok){
      Cookies.remove("token");
      history.push('/logout')
      
    } 

    //console.log("this is res in logoutbutton.js", res)
  };

  return (
    <div id="logout-button">
      <Button variant="contained" className={classes.logoutButton}onClick={handleClick}> Log Out</Button>
    </div>
  );
}

export default LogoutButton;

