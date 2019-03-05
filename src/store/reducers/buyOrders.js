import { actionTypes } from '../actions/action-types';
import LocalStorageService from '../../services/localStorageService';


const initialState = {
    buyOrders: {
        data: LocalStorageService.get_from_storage('buyOrdersData'),
        total: LocalStorageService.get_from_storage('buyOrdersTotal', 0),
        index: LocalStorageService.get_from_storage('buyOrdersIndex', 0),
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
            LocalStorageService.save_to_storage('buyOrdersData', data);
            LocalStorageService.save_to_storage('buyOrdersTotal', total);
            LocalStorageService.save_to_storage('buyOrdersIndex', index);

            return { ...state, buyOrders: { data, total, index } };
        default:
            return state;
    }
};