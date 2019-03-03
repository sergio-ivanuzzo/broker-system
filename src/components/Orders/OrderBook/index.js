import React, { Component, Fragment } from 'react';
import { withStyles, Table, TableBody, TableCell, TableHead, TableRow, Grid } from '@material-ui/core';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});


class OrderBook extends Component {
    render() {
        const { classes, buyOrders, sellOrders } = this.props;

        return (
            <Fragment>
                <Grid container>
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
                                { buyOrders.data.map(order => (
                                    <TableRow key={ order.id }>
                                        <TableCell>{ order.price }</TableCell>
                                        <TableCell>{ order.total }</TableCell>
                                        <TableCell>{ order.amount }</TableCell>
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
                                        <TableCell>{ order.price }</TableCell>
                                        <TableCell>{ order.total }</TableCell>
                                        <TableCell>{ order.amount }</TableCell>
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