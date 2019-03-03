import { actionTypes } from '../actions/action-types';
import LocalStorageService from '../../services/localStorageService';


const initialState = {
    token: null
};

export const login = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {...state, token: action.payload.token}
        default:
            return state;
    }
}