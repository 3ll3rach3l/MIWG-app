import { GET_MISSING, GET_ONE_MISSING, POST_MISSING, UPDATE_MISSING} from '../actions/missing';

export default function missingReducer(state={}, action ){
    switch(action.type){
        case GET_MISSING:
            return {...state, missing: action.missing};
        case GET_ONE_MISSING:
            return {...state, oneMissing: action.oneMissing};
        case POST_MISSING:
            return {...state, newMissingPerson: action.missing};
        case UPDATE_MISSING:
            return {...state, updateMissing: action.missing}
        default:
            return state;
    }
}