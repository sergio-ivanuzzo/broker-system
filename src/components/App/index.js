import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { withStyles, Grid } from '@material-ui/core';
import * as actions from '../../store/actions';
import { PrivateRoute } from '../../router/privateRoute';
import { PropsRoute } from '../../router/propsRoute';
import LoginForm from '../LoginForm';
import Orders from '../Orders';
import NotificationList from '../NotificationList';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    }
});


class App extends Component {
    render() {
        // methods
        const { login, addBuyOrder, addSellOrder, notify } = this.props;
        // properties
        const { token, buyOrders, sellOrders, notifications } = this.props;

        return (
            <Grid container>
                <Fragment>
                    <Router>
                        <Switch>
                            <PropsRoute path='/login'
                                        component={ LoginForm }
                                        notify={ notify }
                                        login={ login } />

                            <PrivateRoute path='/orders'
                                          redirectTo='/login'
                                          component={ Orders }
                                          addBuyOrder={ addBuyOrder }
                                          addSellOrder={ addSellOrder }
                                          buyOrders={ buyOrders }
                                          sellOrders={ sellOrders }
                                          token={ token } />

                            <Redirect from='/' to='/login' />

                        </Switch>
                    </Router>
                    <NotificationList notifications={ notifications } />
                </Fragment>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.login.token,
    buyOrders: state.buyOrders.buyOrders,
    sellOrders: state.sellOrders.sellOrders,
    notifications: state.notifications.notifications,
});

const mapDispatchToProps = (dispatch) => ({
    login: (token) => dispatch(actions.login(token)),
    addBuyOrder: (order) => dispatch(actions.addBuyOrder(order)),
    addSellOrder: (order) => dispatch(actions.addSellOrder(order)),
    notify: (notification) => dispatch(actions.notify(notification)),
    removeNotification: (notification) => dispatch(actions.removeNotification(notification)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));