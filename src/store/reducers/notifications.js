import { actionTypes } from '../actions/action-types';


const initialState = {
    notifications: []
};

export const notifications = (state = initialState, action) => {
    let notifications = state.notifications;

    switch (action.type) {
        case actionTypes.NOTIFY:
            let notification = action.payload.notification;
            notification.id = notifications.length;
            notifications = [...notifications, notification];
            return {...state, notifications}
        case actionTypes.REMOVE_NOTIFICATION:
            let index = action.payload.notification.id - 1;
            notifications.splice(index, 1);
            return {...state, notifications}
        default:
            return state;
    }
}