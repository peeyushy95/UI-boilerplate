import styles from './LandingStyle';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Header} from '../componentsInterface';

class Landing extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.heightFull} >
        <Header />
        <footer className={classes.alignFooter}>
          &copy; Demo Code
        </footer>
      </div>
    );
  }
}

Landing.defaultProps = {};

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
