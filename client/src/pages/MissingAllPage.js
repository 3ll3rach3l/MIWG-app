import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMissing } from '../store/actions/missing';



import MissingCard from '../components/MissingCard';
import MissingNav from '../components/MissingNav'

import './missingAll.css'



export default function MissingAll(){

    const dispatch = useDispatch()
  
    
    
    useEffect(() => {
           dispatch(fetchMissing())
    }, [dispatch]);
    
    

    return(
        <div className='cardContainer'>
           <MissingNav />
           <div className='spacer'/>
            <MissingCard />
        </div>
    )
}