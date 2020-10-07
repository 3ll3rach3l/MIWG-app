import React from 'react';
import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';

import LogoutButton from '../components/LogoutButton'

function TempHome(){
    const isLoggedIn = useSelector (state => !!state.auth.id);
    
    if(!isLoggedIn) return <Redirect to='/login'></Redirect>

    return(
        <>
        <h1>My Home Page</h1>
        <LogoutButton/>
        </>

    )

}

export default TempHome;