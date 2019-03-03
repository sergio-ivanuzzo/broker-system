import React, { Component, Fragment } from 'react';
import OrderForm from './OrderForm';
import OrderBook from './OrderBook';


class Orders extends Component {
    render() {
        // methods
        const { addBuyOrder, addSellOrder } = this.props;
        // properties
        const { buyOrders, sellOrders } = this.props;

        return (
            <Fragment>
                <OrderForm addBuyOrder={ addBuyOrder } addSellOrder={ addSellOrder } />
                <OrderBook buyOrders={ buyOrders } sellOrders={ sellOrders } />
            </Fragment>
        );
    }
}

export default Orders;