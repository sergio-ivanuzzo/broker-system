import React, { Component, Fragment } from 'react';
import { withStyles, Snackbar } from '@material-ui/core';
import Custom from './Custom';


const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2,
    },
});


class Notification extends Component {

    state = {
        open: true,
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { msg } = this.props;

        return (
            <Fragment>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={ this.state.open }
                    autoHideDuration={ 2000 }
                    onClose={ this.handleClose }>
                    <Custom variant='error' message={ msg } />
                </Snackbar>
            </Fragment>
        );
    }

}

export default withStyles(styles)(Notification);