import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import LogoutButton from '../components/LogoutButton';

function HomePage() {
    const isLoggedIn = useSelector(state => !!state.auth.id);
    console.log("this is isLoggedIn", isLoggedIn)
    if (!isLoggedIn) return <Redirect to='/login'></Redirect>

    return (
        <>
        <div>
            <h1>In various tribes, red is known to be the only color spirits see.
            It is hoped that by wearing red, we can call back the missing spirits
                of our women and children so we can lay them to rest.</h1>
        </div>
        <div>
            <Link to="/map">Map</Link>

        </div>
        <div>
            <LogoutButton>Log Out</LogoutButton>

        </div>
        </>


    )

}

export default HomePage;