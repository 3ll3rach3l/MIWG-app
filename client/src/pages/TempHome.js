import React from 'react';
import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';

import useModal from '../components/useModal';
import FormModal from '../components/FormModal'
import LogoutButton from '../components/LogoutButton'
import MissingForm from '../components/MissingForm';
import { makeStyles, Paper } from '@material-ui/core';


const useStyles = makeStyles(theme =>({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

function TempHome(){
    const isLoggedIn = useSelector (state => !!state.auth.id);
    const {isShowing, toggle} = useModal();
    const classes = useStyles()

    if(!isLoggedIn) return <Redirect to='/login'></Redirect>

    return(
       <div className="app">
           <button className="modal-button" onClick={toggle}>Show Modal</button>
           <FormModal isShowing={isShowing} hide={toggle}/>

           <Paper className={classes.pageContent}>
               <MissingForm />
           </Paper>

           <LogoutButton/>
       </div>
        

    )

}

export default TempHome;