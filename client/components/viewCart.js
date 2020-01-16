import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCartThunk } from '../store/reducers/cart';
import { updateTotalThunk } from '../store/reducers/total';

class ViewCart extends React.Component {
  constructor() {
    super();
    this.removeClickItem = this.removeClickItem.bind(this);
  }

  removeClickItem(event) {
    //item.id is passed in as a string
    let wigIdString = event.target.value;

    //converted item.id from string to number
    let wigId = Number(wigIdString);

    //filtering through cart on state to return wig that was clicked
    let filteredCart = this.props.cart.filter(wig => wigId === wig.id);
    console.log('FILTERED ', filteredCart);

    //filtered cart will always only have one wig in it's array
    let cartQuant = filteredCart[0].cartQuantity;
    let eachWigPrice = filteredCart[0].price;

    //multiply cart quanity with price of wig to send to thunk creator
    let subtotalWigPrice = eachWigPrice * cartQuant;

    this.props.decreaseTotal(subtotalWigPrice);
    this.props.removeItem(wigId);
  }

  render() {
    const items = this.props.cart
      ? this.props.cart.map(item => {
          // eslint-disable-next-line no-return-assign
          return (
            //         <div className="cart-div" key={item.id}>
            //           <div className="item-img-div">
            //             <img src={item.image} />
            //           </div>
            //           <div className="item-text-div">
            //             <h3 className="item-name-padding">{item.name}</h3>
            //             <p className="item-text-padding">
            //               Quantity: {item.cartQuantity}
            //             </p>
            //             <p className="item-text-padding">
            //               Price: ${(item.price * item.cartQuantity / 100).toFixed(2)}
            //             </p>
            //             <div className="item-btn-div">
            //               <button
            //                 type="button"
            //                 value={item.id}
            //                 onClick={
            //                   this.removeClickItem // value={item.price * item.cartQuantity}
            //                 }
            //               >
            //                 Remove from Cart
            //               </button>
            //             </div>
            //           </div>
            //         </div>
            //       );
            //     })
            //   : '';

            // const itemSum = this.props.cart ? this.props.total : '';

            <div className="summary-div" key={item.id}>
              <img src={item.image} />
              <p>{item.name}</p>

              <p>${(item.price * item.cartQuantity / 100).toFixed(2)}</p>
              <p>{item.cartQuantity}</p>
              <button
                type="button"
                value={item.id}
                onClick={
                  this.removeClickItem // value={item.price * item.cartQuantity}
                }
              >
                X
              </button>
            </div>
          );
        })
      : '';

    const itemSum = this.props.cart ? this.props.total : '';

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
            </div>
          ) : (
            <div className="contact">
              <h3>There are no items in your cart!</h3>
            </div>
          )}
          <Link to="/checkoutForm">
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </Link>
        </div>

        {/* <div className="cart-container">
          {items}
          <div className="item-text-div">
            {this.props.cart.length > 0 ? (
              <h3>Total Price: ${(itemSum / 100).toFixed(2)}</h3>
            ) : (
              <p>There are no items in your cart!</p>
            )}
          </div>
          <div className="checkout-button-div">
            {this.props.cart.length > 0 ? (
              <Link to="/checkoutForm">
                <button type="button" className="checkout-btn">
                  Checkout
                </button>
              </Link>
            ) : (
              ''
            )}
          </div>
        </div> */}
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
  decreaseTotal: subtotalWigPrice =>
    dispatch(updateTotalThunk(subtotalWigPrice))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
