import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <header className="site-head">
      {isLoggedIn ? (
        <div className="site-head-container">
          <nav className="site-head-left">
            {/* The navbar will show these links after you log in */}
            <Link to="/">BART'S WIGS</Link>
          </nav>
          <div className="site-head-center">
            <Link to="/shortwigs">Short</Link>
            <Link to="/mediumwigs">Medium</Link>
            <Link to="/longwigs">Long</Link>
            <Link to="/wigs">All</Link>
          </div>
          <div className="site-head-right">
            <Link to="/orders">My orders</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <Link to="/viewCart">
              <i className="fa fa-shopping-cart" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="site-head-container">
          <nav className="site-head-left">
            {/* The navbar will show these links before you log in */}
            <Link to="/">BART'S WIGS</Link>
          </nav>
          <div className="site-head-center">
            <Link to="/shortwigs">Short</Link>
            <Link to="/mediumwigs">Medium</Link>
            <Link to="/longwigs">Long</Link>
            <Link to="/wigs">All</Link>
          </div>
          <div className="site-head-right">
            <Link to="/login">Login / Register</Link>
            <Link to="/viewCart">
              <i className="fa fa-shopping-cart" />
            </Link>
          </div>
        </div>
      )}
      <hr />
    </header>
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
