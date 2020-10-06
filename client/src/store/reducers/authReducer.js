import { SET_USER, LOGOUT_USER } from '../actions/auth';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;

        case LOGOUT_USER:
            return {};

        default:
            return state;
    }

}