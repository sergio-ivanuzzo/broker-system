import React, { Component, Fragment } from 'react';
import Notification from './Notification';


class NotificationList extends Component {
    render() {
        const { notifications } = this.props;
        return (
            <Fragment>
                { notifications.map(notification => (
                    <Notification key={notification.id} msg={notification.msg} />
                )) }
            </Fragment>
        );
    }
}

export default NotificationList;