import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mapReducer from './mapReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    mapReducer,
   
})

export default rootReducer;