import styles from './AppStyle';
import React, {Component} from 'react';
import {Landing} from '../componentsInterface';
import {withStyles} from '@material-ui/core/styles';
import {DEFAULT_CONSTANTS} from '../../config/configInterface';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route path={DEFAULT_CONSTANTS.ROUTES.BASE}  render={ (routeProps) =>
              <Landing {...routeProps} />
            }/>
            <Route path={DEFAULT_CONSTANTS.ROUTES.ROOT}  render={ (routeProps) =>
              ( <div>Welcome</div>)
            }/>
            <Redirect to={DEFAULT_CONSTANTS.ROUTES.ROOT} />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.defaultProps = {};

App.propTypes = {};

export default withStyles(styles)(App);


