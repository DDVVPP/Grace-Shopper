import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserHome } from './components';
import { Login } from './components/loginform';
import { Signup } from './components/signupform';
import { me } from './store';
import AllWigs from './components/all-wigs';
import LongWigs from './components/longWigs';
import MediumWigs from './components/mediumWigs';
import ShortWigs from './components/shortWigs';
import WigsHome from './components/home';
import ViewCart from './components/viewCart';
import CheckoutForm from './components/checkoutForm';
import OrderCompleted from './components/order-completed';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, wig } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={WigsHome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/wigs" component={AllWigs} />

        <Route exact path="/shortwigs" component={ShortWigs} />
        <Route exact path="/mediumwigs" component={MediumWigs} />
        <Route exact path="/longwigs" component={LongWigs} />
        <Route exact path="/viewCart" component={ViewCart} />
        <Route exact path="/checkoutForm" component={CheckoutForm} />
        <Route path="/orderCompleted" component={OrderCompleted} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            {/* <Route exact path="/wigs" component={AllWigs} />
            <Route path="/viewCart" component={ViewCart} /> */}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
