import { actionTypes } from '../actions/action-types';
import LocalStorageService from '../../services/localStorageService';


const initialState = {
    token: LocalStorageService.get_from_storage('token', null)
};

export const login = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            let token = action.payload.token;
            LocalStorageService.save_to_storage('token', token);
            return {...state, token }
        default:
            return state;
    }
}