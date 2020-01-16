import React from 'react';
import { connect } from 'react-redux';
import { placeOrderThunk, updateWigsThunk } from '../store/reducers/cart';
import { Link } from 'react-router-dom';
import wigs from '../store/reducers/wigs';
//need to import thunks to post an order

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
      billingAddressZipcode: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const order = {
      total: this.props.total,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      street: this.state.shippingAddressStreet,
      addressLine2: this.state.shippingAddressLine2,
      city: this.state.shippingAddressCity,
      state: this.state.shippingAddressState,
      zip: this.state.shippingAddressZipcode,
      user: this.props.user ? this.props.user.id : null
    };
    this.props.updateWigsThunk(this.props.cart);
    this.props.placeOrderThunk(order);
    window.location.pathname = '/orderCompleted';
  }

  render() {
    const { cart } = this.props;

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
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
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

              <div className="column">
                <input
                  type="text"
                  name="shippingAddressStreet"
                  value={this.state.shippingAddressStreet}
                  onChange={this.handleChange}
                  placeholder="Address"
                />
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
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  placeOrderThunk: order => dispatch(placeOrderThunk(order)),
  updateWigsThunk: cart => dispatch(updateWigsThunk(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
