import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMissing } from '../store/actions/missing';



import MissingCard from '../components/MissingCard';
import NavBar from '../components/NavBar'

import './missingAll.css'



export default function MissingAll(){

    const dispatch = useDispatch()
  
    
    
    useEffect(() => {
           dispatch(fetchMissing())
    }, [dispatch]);
    
    

    return(
        <div className='cardContainer'>
           <NavBar />
           <div className='spacer'/>
            <MissingCard />
        </div>
    )
}