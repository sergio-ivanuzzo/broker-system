import React, { Component, Fragment } from 'react';
import {withStyles, TextField, Button, Select, Grid, MenuItem} from '@material-ui/core';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class OrderForm extends Component {

    state = {
        price: '',
        amount: '',
        orderType: 'Limit',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    exchangeBuy() {
        if (this.state.price && this.state.amount) {
            let order = {
                price: parseFloat(this.state.price),
                amount: parseFloat(this.state.amount),
            };
            this.props.addBuyOrder(order);
        } else {
            let notification = {
                msg: 'Amount and price fields are required',
            }
            this.props.notify(notification);
        }
    }
    exchangeSell() {
        let order = {
            price: parseFloat(this.state.price),
            amount: parseFloat(this.state.amount),
        };
        this.props.addSellOrder(order);
    }

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <form className={ classes.container } noValidate autoComplete='off'>
                    <Grid container>
                        <Grid item xs={ 12 }>
                            <Select value={this.state.orderType} disabled>
                                <MenuItem value='Limit'>{this.state.orderType}</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                id='price'
                                label='Price'
                                className={ classes.textField }
                                value={ this.state.price }
                                onChange={ this.handleChange('price') }
                                margin='normal'
                            />
                            <TextField
                                id='amount'
                                label='Amount'
                                className={ classes.textField }
                                value={ this.state.amount }
                                onChange={ this.handleChange('amount') }
                                margin='normal'
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Button variant='contained' color='primary' className={ classes.button } onClick={ this.exchangeBuy.bind(this) }>
                                Exchange Buy
                            </Button>
                            <Button variant='contained' color='secondary' className={ classes.button } onClick={ this.exchangeSell.bind(this) }>
                                Exchange Buy
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </Fragment>
        );
    }
}

export default withStyles(styles)(OrderForm);