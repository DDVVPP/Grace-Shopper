import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../store';

/**
 * COMPONENT
 */
const SignUpForm = props => {
  const { name, handleSubmit } = props;

  return (
    <div>
      <div className="loginSignupText">
        <h1>Sign up</h1>
      </div>

      <form className="loginSignupForm" onSubmit={handleSubmit} name={name}>
        <div className="form-box-loginSignup">
          <div className="contact-loginSignup">
            <div className="column-loginSignup">
              <input type="text" name="firstName" placeholder="First name" />
              <input type="text" name="lastName" placeholder="Last name" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="password" placeholder="Password" />
            </div>
          </div>
          <div className="loginSignup-btn-div">
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    }
  };
};

export const Signup = connect(mapSignup, mapDispatch)(SignUpForm);

//PROP TYPES
SignUpForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
