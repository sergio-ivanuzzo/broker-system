import React, { Component, Fragment } from 'react';
import { withRouter} from 'react-router-dom';
import { withStyles, TextField, Button } from '@material-ui/core';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class LoginForm extends Component {

    state = {
        name: '',
        password: '',
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    doLogin() {
        if (this.state.name == 'test' && this.state.password == 'test') {
            let token = btoa(`${this.state.name}:${this.state.password}`);
            this.props.login(token);
            this.props.history.push('/orders');
        } else {
            let notification = {
                msg: 'Incorrect username or password',
            }
            this.props.notify(notification);
        }
    }

    render() {
        const { classes, login } = this.props;

        return (
            <Fragment>
                <form className={ classes.container } noValidate autoComplete="off">
                    <TextField
                        id="username"
                        label="Username"
                        className={ classes.textField }
                        value={ this.state.name }
                        onChange={ this.handleChange('name') }
                        margin="normal"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        className={ classes.textField }
                        value={ this.state.password }
                        onChange={ this.handleChange('password') }
                        margin="normal"
                    />
                    <Button variant="contained" className={ classes.button } onClick={ this.doLogin.bind(this) }>
                        Login
                    </Button>
                </form>
            </Fragment>
        );
    }
}

export default withRouter(
    withStyles(styles)(LoginForm)
);