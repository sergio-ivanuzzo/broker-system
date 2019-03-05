import {actionTypes} from "./action-types";


export const login = (token) => ({
    type: actionTypes.LOGIN,
    payload: {
        token
    }
});

export const addBuyOrder = (order) => ({
    type: actionTypes.ADD_BUY_ORDER,
    payload: {
        order
    }
});

export const addSellOrder = (order) => ({
    type: actionTypes.ADD_SELL_ORDER,
    payload: {
        order
    }
});

export const notify = (notification) => ({
    type: actionTypes.NOTIFY,
    payload: {
        notification
    }
});

export const removeNotification = (notification) => ({
    type: actionTypes.REMOVE_NOTIFICATION,
    payload: {
        notification
    }
});