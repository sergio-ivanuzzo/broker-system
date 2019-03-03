import { combineReducers } from 'redux';
import { login } from './login';
import { buyOrders } from "./buyOrders";
import { sellOrders } from "./sellOrders";

export default combineReducers({
    login,
    buyOrders,
    sellOrders
})