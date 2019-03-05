import React, { Component, Fragment } from 'react';
import { withStyles, Paper, Grid } from '@material-ui/core';
import OrderForm from './OrderForm';
import OrderBook from './OrderBook';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 1.2,
    },
});


class Orders extends Component {
    render() {
        // methods
        const { addBuyOrder, addSellOrder, notify } = this.props;
        // properties
        const { buyOrders, sellOrders, classes } = this.props;

        return (
            <Fragment>
                <Grid container className={ classes.root } spacing={ 16 }>
                    <Grid item xs={ 3 }>
                        <Paper className={ classes.control }>
                            <OrderForm addBuyOrder={ addBuyOrder } addSellOrder={ addSellOrder } notify={ notify } />
                        </Paper>
                    </Grid>
                    <Grid item xs={ 9 }>
                        <Paper className={ classes.control }>
                            <OrderBook buyOrders={ buyOrders } sellOrders={ sellOrders } />
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Orders);