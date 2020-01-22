/* eslint-disable complexity */
import React from 'react';
import { connect } from 'react-redux';
import { updateWigsThunk } from '../store/reducers/cart';
import { placeOrderThunk } from '../store/reducers/order';
import PropTypes from 'prop-types';

class CheckoutForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      shippingAddressStreet: '',
      shippingAddressLine2: '',
      shippingAddressCity: '',
      shippingAddressState: '',
      shippingAddressZipcode: '',
      billingAddressStreet: '',
      billingAddressLine2: '',
      billingAddressCity: '',
      billingAddressState: '',
      billingAddressZipcode: '',
      errors: {
        email: 'Required',
        firstName: 'Required',
        lastName: 'Required',
        shippingAddressStreet: 'Required',
        shippingAddressCity: 'Required',
        shippingAddressState: 'Required',
        shippingAddressZipcode: 'Required'
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let errors = this.state.errors;
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    switch (event.target.name) {
      case 'email':
        errors.email = validEmailRegex.test(event.target.value)
          ? ''
          : 'Email is not valid';
        break;
      case 'firstName':
        errors.firstName =
          event.target.value.length < 1 ? 'Your first name is required' : '';
        break;
      case 'lastName':
        errors.lastName =
          event.target.value.length < 1 ? 'Your last name is required' : '';
        break;
      case 'shippingAddressStreet':
        errors.shippingAddressStreet =
          event.target.value.length < 1 ? 'Street is required' : '';
        break;
      case 'shippingAddressCity':
        errors.shippingAddressCity =
          event.target.value.length < 1 ? 'City is required' : '';
        break;
      case 'shippingAddressState':
        errors.shippingAddressState =
          event.target.value.length < 1 ? 'State is required' : '';
        break;
      case 'shippingAddressZipcode':
        errors.shippingAddressZipcode =
          event.target.value.length < 1 ? 'Zipcode is required' : '';
        break;
      default:
        break;
    }
    this.setState({
      errors,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(evt) {
    console.log('ERROR', this.props.neworder.error);
    evt.preventDefault();
    const order = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      street: this.state.shippingAddressStreet,
      addressLine2: this.state.shippingAddressLine2,
      city: this.state.shippingAddressCity,
      state: this.state.shippingAddressState,
      zip: this.state.shippingAddressZipcode,
      user: this.props.user ? this.props.user.id : null,
      total: this.props.total
    };
    this.props.placeOrderThunk(order);

    this.props.updateWigsThunk(this.props.cart);
  }

  render() {
    const { cart } = this.props;
    const { errors } = this.state;
    console.log('ERROR', this.props.neworder.error);

    const orderSummary = cart ? (
      cart.map(order => {
        return (
          <div className="summary-div" key={order.id}>
            <img src={order.image} />

            <p>{order.name}</p>
            <p>Price: ${(order.price * order.cartQuantity / 100).toFixed(2)}</p>
            <p>{order.cartQuantity}</p>
          </div>
        );
      })
    ) : (
      <div className="no-items">There are no items in your cart!</div>
    );
    return (
      <div>
        <div className="checkoutText">
          <h1>checkout</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-box">
            <div className="contact">
              <h4>Contact information</h4>
              <div className="column">
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
                {errors.email.length > 0 && (
                  <span className="error-txt">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="shipping">
              <h4>Shipping address</h4>
              <div className="sideBySide">
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First name"
                />
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last name"
                />
              </div>
              <div className="sideBySide">
                {errors.firstName.length > 0 && (
                  <span className="error-txt">{errors.firstName}</span>
                )}
                {errors.lastName.length > 0 && (
                  <span className="error-txt">{errors.lastName}</span>
                )}
              </div>
              <div className="column">
                <input
                  type="text"
                  name="shippingAddressStreet"
                  value={this.state.shippingAddressStreet}
                  onChange={this.handleChange}
                  placeholder="Address"
                />
                {errors.shippingAddressStreet.length > 0 && (
                  <span className="error-txt">
                    {errors.shippingAddressStreet}
                  </span>
                )}
              </div>
              <div className="sideBySide">
                <input
                  type="text"
                  name="shippingAddressLine2"
                  value={this.state.shippingAddressLine2}
                  onChange={this.handleChange}
                  placeholder="Address Line 2 (Optional)"
                />

                <input
                  type="text"
                  name="shippingAddressCity"
                  value={this.state.shippingAddressCity}
                  onChange={this.handleChange}
                  placeholder="City"
                />
              </div>
              <div className="sideBySide">
                {errors.shippingAddressState.length > 0 && (
                  <span className="error-txt" />
                )}
                {errors.shippingAddressCity.length > 0 && (
                  <span className="error-txt">
                    {errors.shippingAddressCity}
                  </span>
                )}
              </div>
              <div className="sideBySide">
                <input
                  type="text"
                  name="shippingAddressState"
                  value={this.state.shippingAddressState}
                  onChange={this.handleChange}
                  placeholder="State"
                />

                <input
                  type="text"
                  name="shippingAddressZipcode"
                  value={this.state.shippingAddressZipcode}
                  onChange={this.handleChange}
                  placeholder="ZIP code"
                />
              </div>
              <div className="sideBySide">
                {errors.shippingAddressState.length > 0 && (
                  <span className="error-txt">
                    {errors.shippingAddressState}
                  </span>
                )}
                {errors.shippingAddressZipcode.length > 0 && (
                  <span className="error-txt">
                    {errors.shippingAddressZipcode}
                  </span>
                )}
              </div>
              <div className="column">
                <input
                  type="number"
                  name="contactPhoneNumber"
                  value={this.contactPhoneNumber}
                  onChange={this.handleChange}
                  placeholder="Contact phone number"
                />
              </div>
            </div>

            <div className="billing">
              <h4>Billing address</h4>
              <div className="sideBySide">
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First name"
                />
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last name"
                />
              </div>

              <div className="column">
                <input
                  type="text"
                  name="billingAddressStreet"
                  value={this.state.billingAddressStreet}
                  onChange={this.handleChange}
                  placeholder="Address"
                />
              </div>
              <div className="sideBySide">
                <input
                  type="text"
                  name="billingAddressLine2"
                  value={this.state.billingAddressLine2}
                  onChange={this.handleChange}
                  placeholder="Address Line 2 (Optional)"
                />
                <input
                  type="text"
                  name="billingAddressCity"
                  value={this.state.billingAddressCity}
                  onChange={this.handleChange}
                  placeholder="City"
                />
              </div>
              <div className="sideBySide">
                <input
                  type="text"
                  name="billingAddressState"
                  value={this.state.billingAddressState}
                  onChange={this.handleChange}
                  placeholder="State"
                />
                <input
                  type="text"
                  name="billingAddressZipcode"
                  value={this.state.billingAddressZipcode}
                  onChange={this.handleChange}
                  placeholder="ZIP code"
                />
              </div>
              <div className="column">
                <input
                  type="number"
                  name="contactPhoneNumber"
                  value={this.contactPhoneNumber}
                  onChange={this.handleChange}
                  placeholder="Contact phone number"
                />
              </div>
            </div>
            <div className="error-txt-large">
              {this.props.neworder.message ===
              'Request failed with status code 500'
                ? 'Unable to sign you up. Please double-check the information you entered to make sure it is correct.'
                : null}
            </div>
            <div className="place-order-btn-div">
              <button type="submit">Place Order</button>
            </div>
          </div>

          <div className="order-summary">
            <div className="contact">
              <h4>Order Summary</h4>
            </div>
            {cart.length > 0 ? (
              <div className="contact">
                {orderSummary}
                <h2>Order Total: ${(this.props.total / 100).toFixed(2)}</h2>
              </div>
            ) : (
              <div className="contact">
                <h3>There are no items in your cart!</h3>
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.total,
    user: state.user,
    neworder: state.neworder
  };
};

const mapDispatchToProps = dispatch => ({
  placeOrderThunk: order => dispatch(placeOrderThunk(order)),
  updateWigsThunk: cart => dispatch(updateWigsThunk(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);

//PROP TYPES
CheckoutForm.propTypes = {
  error: PropTypes.object
};
