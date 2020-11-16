import React from 'react';

import Link from '@material-ui/core/Link';

import './logoutPage.css'
export default function LogoutPage(){

    return (

        <div className='pageWrapper'>
        <img src="https://i.imgur.com/TOe0wyh.jpg?1" title="source: imgur.com" className="hands"/>
            <div className='linkContainer'>
                <Link href="/" color='secondary' variant="body2">
                    {"Return to Home"}
                </Link>

            </div>
        </div>
    )
}