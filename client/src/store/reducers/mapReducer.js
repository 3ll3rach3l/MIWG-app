import {GET_CITIES, GET_CITY, POST_CITY} from '../actions/map';

export default function mapReducer(state ={}, action){
    switch(action.type){
        case GET_CITIES:
            return action.cities;
        case GET_CITY:
            return action.city;
        case POST_CITY:
            return action.city
        default:
            return state;
    }
}