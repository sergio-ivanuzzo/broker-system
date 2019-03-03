import { actionTypes } from '../actions/action-types';
import LocalStorageService from '../../services/localStorageService';


const initialState = {
    buyOrders: {
        data: [],
        total: 0,
        index: 0,
    }
};

export const buyOrders = (state = initialState, action) => {
    let total = state.buyOrders.total;
    let data = state.buyOrders.data;
    let index = state.buyOrders.index;

    switch (action.type) {
        case actionTypes.ADD_BUY_ORDER:
            let order = action.payload.order;
            order.id = index++;
            order.total = total;
            data = [...data, order];
            total += order.price;
            return { ...state, buyOrders: { data, total, index } };
        default:
            return state;
    }
};