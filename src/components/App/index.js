import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions';
import { PrivateRoute } from '../../router/privateRoute';
import { PropsRoute } from '../../router/propsRoute';
import LoginForm from '../LoginForm';
import OrderBook from '../OrderBook';
import OrderForm from '../OrderForm';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <PropsRoute path='/login'
                                    component={ LoginForm }
                                    login={ this.props.login } />

                        <PrivateRoute path='/orders'
                                      redirectTo='/login'
                                      component={ OrderBook }
                                      token={ this.props.token } />

                        <Redirect from='/' to='/login' />

                    </Switch>
                </Router>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.login.token,
    buyOrders: state.buyOrders.buyOrders,
    sellOrders: state.sellOrders.sellOrders,
});

const mapDispatchToProps = (dispatch) => ({
    login: (token) => dispatch(actions.login(token)),
    addBuyOrder: (order) => dispatch(actions.addBuyOrder(order)),
    addSellOrder: (order) => dispatch(actions.addSellOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);