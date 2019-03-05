import React, { Component, Fragment } from 'react';
import { withStyles, Table, TableBody, TableCell, TableHead, TableRow, Grid } from '@material-ui/core';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 450,
    },
});


class OrderBook extends Component {
    render() {
        const { classes, buyOrders, sellOrders } = this.props;

        buyOrders.data.sort((a, b) => b.price - a.price);
        sellOrders.data.sort((a, b) => a.price - b.price);

        return (
            <Fragment>
                <Grid container className={ classes.root }>
                    <Grid item xs={ 6 }>
                        <Table className={ classes.table }>
                            <TableHead>
                                <TableRow>
                                    <TableCell variant='head'>Amount</TableCell>
                                    <TableCell variant='head'>Total</TableCell>
                                    <TableCell variant='head'>Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { buyOrders.data.map(order => (
                                    <TableRow key={ order.id }>
                                        <TableCell variant='body'>{ order.amount.toFixed(8) }</TableCell>
                                        <TableCell variant='body'>{ order.total }</TableCell>
                                        <TableCell variant='body'>{ order.price.toFixed(8) }</TableCell>
                                    </TableRow>
                                )) }
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={ 6 }>
                        <Table className={ classes.table }>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { sellOrders.data.map(order => (
                                    <TableRow key={ order.id }>
                                        <TableCell>{ order.price.toFixed(8) }</TableCell>
                                        <TableCell>{ order.total }</TableCell>
                                        <TableCell>{ order.amount.toFixed(8) }</TableCell>
                                    </TableRow>
                                )) }
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default withStyles(styles)(OrderBook);