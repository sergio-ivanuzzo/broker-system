import { actionTypes } from '../actions/action-types';
import LocalStorageService from '../../services/localStorageService';


const initialState = {
    sellOrders: {
        data: LocalStorageService.get_from_storage('sellOrdersData'),
        total: LocalStorageService.get_from_storage('sellOrdersTotal', 0),
        index: LocalStorageService.get_from_storage('sellOrdersIndex', 0),
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
            LocalStorageService.save_to_storage('sellOrdersData', data);
            LocalStorageService.save_to_storage('sellOrdersTotal', total);
            LocalStorageService.save_to_storage('sellOrdersIndex', index);

            return { ...state, sellOrders: { data, total, index } };
        default:
            return state;
    }
};