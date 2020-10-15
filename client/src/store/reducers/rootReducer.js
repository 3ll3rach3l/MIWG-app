import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mapReducer from './mapReducer';
import missingReducer from './mapReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    mapReducer,
    missingReducer
   
})

export default rootReducer;