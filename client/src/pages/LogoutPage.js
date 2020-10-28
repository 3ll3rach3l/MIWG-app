import React from 'react';

import Link from '@material-ui/core/Link';

import './logoutPage.css'
export default function LogoutPage(){

    return (

        <div className='pageWrapper'>
            <img src={'./logout.jpg'} className='hands' alt='You Are Not Forgotten'/>
            <div className='linkContainer'>
                <Link href="/" color='secondary' variant="body2">
                    {"Return to Home"}
                </Link>

            </div>
        </div>
    )
}