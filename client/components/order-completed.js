import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeOrderThunk, updateWigsThunk } from '../store/reducers/cart';

class OrderCompleted extends Component {
  constructor() {
    super();
  }
  render() {
    const { cart } = this.props;

    const orderSummary =
      cart.length > 0 ? (
        cart.map(order => {
          return (
            <div className="summary-div" key={order.id}>
              <img src={order.image} />
              <p>{order.name}</p>

              <p>${(order.price * order.cartQuantity / 100).toFixed(2)}</p>
              <p>{order.cartQuantity}</p>
              <button
                type="button"
                value={order.id}
                onClick={
                  this.removeClickItem // value={item.price * item.cartQuantity}
                }
              >
                X
              </button>
            </div>
          );
        })
      ) : (
        <div className="no-items">There are no items in your cart!</div>
      );

    return (
      <div>
        <div className="checkoutText">
          <h1>Thank you for your purchase!</h1>
        </div>

        <div className="order-summary-centered">
          {this.props.cart.length > 0 ? (
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderCompleted);
