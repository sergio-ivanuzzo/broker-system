import { actionTypes } from '../actions/action-types';
import LocalStorageService from '../../services/localStorageService';


const initialState = {
    sellOrders: {
        data: [],
        total: 0
    }
};

export const sellOrders = (state = initialState, action) => {
    let total = state.sellOrders.total;
    let data = state.sellOrders.data;

    switch (action.type) {
        case actionTypes.ADD_SELL_ORDER:
            return {...state, sellOrders: { data, total }}
        default:
            return state;
    }
}