import React from 'react';
import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';

import useModal from '../components/useModal';
import FormModal from '../components/FormModal'
import LogoutButton from '../components/LogoutButton'

function TempHome(){
    const isLoggedIn = useSelector (state => !!state.auth.id);
    const {isShowing, toggle} = useModal();

    if(!isLoggedIn) return <Redirect to='/login'></Redirect>

    return(
       <div className="app">
           <button className="modal-button" onClick={toggle}>Report Missing</button>
           <FormModal isShowing={isShowing}
           hide={toggle}/>
           

           <LogoutButton/>
       </div>
        

    )

}

export default TempHome;