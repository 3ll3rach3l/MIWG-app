import { combineReducers } from 'redux';
import authReducer from './authReducer';

import missingReducer from './mapReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    missingReducer
   
})

export default rootReducer;