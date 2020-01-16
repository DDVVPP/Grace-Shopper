// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { auth } from '../store';
// import { render } from 'enzyme';

// /**
//  * COMPONENT
//  */
// const AuthForm = props => {
//   const { name, handleSubmit } = props;

//   return (
//     <div>
//       <div className="checkoutText">
//         <h1>Login / Register</h1>
//       </div>

//       <form onSubmit={handleSubmit} name={name}>
//         <div className="form-box">
//           <div className="contact">
//             <h4>Login</h4>
//             <div className="column">
//               <input type="text" name="email" placeholder="Email" />
//               <input type="text" name="password" placeholder="Password" />
//             </div>
//           </div>

//           <div className="place-order-btn-div">
//             <button type="submit">Login</button>
//           </div>
//         </div>
//         <div className="form-box">
//           <div className="contact">
//             <h4>Register</h4>
//             <div className="column">
//               <input type="text" name="firstName" placeholder="First name" />
//               <input type="text" name="lastName" placeholder="Last name" />
//               <input type="text" name="email" placeholder="Email" />
//               <input type="text" name="password" placeholder="Password" />
//             </div>
//           </div>
//           <div className="place-order-btn-div">
//             <button type="submit">Register</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.user.error
//   };
// };

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.user.error
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault();
//       const formName = 'signup';
//       const email = evt.target.email.value;
//       const password = evt.target.password.value;
//       dispatch(auth(formName, email, password));
//     }
//   };
// };

// export const Login = connect(mapLogin, mapDispatch)(AuthForm);
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

// //PROP TYPES
// AuthForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// };
