import { actionTypes } from '../actions/action-types';
import LocalStorageService from '../../services/localStorageService';


const initialState = {
    sellOrders: {
        data: [],
        total: 0,
        index: 0,
    }
};

export const sellOrders = (state = initialState, action) => {
    let total = state.sellOrders.total;
    let data = state.sellOrders.data;
    let index = state.sellOrders.index;

    switch (action.type) {
        case actionTypes.ADD_SELL_ORDER:
            let order = action.payload.order;
            order.id = index++;
            order.total = total;
            data = [...data, order];
            total += order.price;
            return { ...state, sellOrders: { data, total, index } };
        default:
            return state;
    }
};