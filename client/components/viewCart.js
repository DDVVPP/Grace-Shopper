import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeFromCartThunk,
  updateCartQuantThunk,
  addToCartThunk
} from '../store/reducers/cart';
import { updateTotalThunk, addTotalThunk } from '../store/reducers/total';

class ViewCart extends React.Component {
  constructor() {
    super();
    // this.removeClickItem = this.removeClickItem.bind(this);
    this.reduceItemByOne = this.reduceItemByOne.bind(this);
    this.increaseItemByOne = this.increaseItemByOne.bind(this);
  }

  reduceItemByOne(event) {
    let wigIdString = event.target.value;
    let wigId = Number(wigIdString);

    let filteredCart = this.props.cart.filter(wig => wigId === wig.id);
    this.props.updateCartQuant(filteredCart[0]);

    let cartQuant = filteredCart[0].cartQuantity;
    let priceOfWig = filteredCart[0].price;

    //decrease price of 1 wig from total & remove item from cart if 0 quantity
    if (cartQuant === 0) {
      this.props.removeItem(wigId);
      this.props.decreaseTotal(priceOfWig);
    } else {
      this.props.decreaseTotal(priceOfWig);
    }
  }

  increaseItemByOne(event) {
    let wigIdString = event.target.value;
    let wigId = Number(wigIdString);

    let filteredCart = this.props.cart.filter(wig => wigId === wig.id);
    this.props.increaseCartQuant(filteredCart[0]);

    let cartQuant = filteredCart[0].cartQuantity;
    let dbQuant = filteredCart[0].quantity;
    let priceOfWig = filteredCart[0].price;

    //increase price of 1 wig from total & remove item from cart if 0 quantity

    this.props.increaseTotal(priceOfWig);
  }

  render() {
    console.log('props', this.props.cart);
    const items = this.props.cart
      ? this.props.cart.map(item => {
          // eslint-disable-next-line no-return-assign
          return (
            <div className="summary-div" key={item.id}>
              <img src={item.image} />
              <p>{item.name}</p>
              <p>${(item.price * item.cartQuantity / 100).toFixed(2)}</p>
              <button
                type="button"
                value={item.id}
                onClick={this.reduceItemByOne}
              >
                -
              </button>
              <p>{item.cartQuantity}</p>
              {item.cartQuantity < item.quantity ? (
                <button
                  type="button"
                  value={item.id}
                  onClick={this.increaseItemByOne}
                >
                  +
                </button>
              ) : (
                <h2>'No more available wigs!'</h2>
              )}
            </div>
          );
        })
      : '';

    return (
      <div>
        <div className="checkoutText">
          <h1>your cart</h1>
        </div>

        <div className="order-summary-centered">
          {this.props.cart.length > 0 ? (
            <div className="contact">
              {items}
              <h2>Order Total: ${(this.props.total / 100).toFixed(2)}</h2>
              <div className="checkout-btn-div">
                <Link to="/checkoutForm">
                  <button type="button" className="checkout-btn">
                    Checkout
                  </button>
                </Link>
              </div>
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

const mapStateToProps = state => ({
  cart: state.cart,
  total: state.total
});

const mapDispatchToProps = dispatch => ({
  removeItem: wigId => dispatch(removeFromCartThunk(wigId)),
  updateCartQuant: filteredCart => dispatch(updateCartQuantThunk(filteredCart)),
  decreaseTotal: priceOfWig => dispatch(updateTotalThunk(priceOfWig)),
  increaseTotal: priceOfWig => dispatch(addTotalThunk(priceOfWig)),
  increaseCartQuant: filteredCart => dispatch(addToCartThunk(filteredCart))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
