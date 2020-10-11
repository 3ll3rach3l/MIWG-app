import React from 'react';
import {Button} from '@material-ui/core'


export default function AuthButton(props){

    return(
        <div className="button">
            <Button variant="outlined" color="secondary" type="submit" size="medium" {...props}/>
        </div>

    )
}