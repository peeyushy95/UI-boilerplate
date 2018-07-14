import styles from './HeaderStyle';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles/index';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    const {classes} = this.props;
    return (
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              DEMO
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
}

Header.defaultProps = {};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
