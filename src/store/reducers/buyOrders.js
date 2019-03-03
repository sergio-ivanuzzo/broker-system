import { actionTypes } from '../actions/action-types';
import LocalStorageService from '../../services/localStorageService';


const initialState = {
    buyOrders: {
        data: [],
        total: 0
    }
};

export const buyOrders = (state = initialState, action) => {
    let total = state.buyOrders.total;
    let data = state.buyOrders.data;

    switch (action.type) {
        case actionTypes.ADD_BUY_ORDER:
            return {...state, buyOrders: { data, total }}
        default:
            return state;
    }
}