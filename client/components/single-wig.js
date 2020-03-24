import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCartThunk } from '../store/reducers/cart';
import { addTotalThunk } from '../store/reducers/total';
import { getSingleWig } from '../store/reducers/wigs';

class SingleWig extends React.Component {
  constructor() {
    super();
    this.addClick = this.addClick.bind(this);
  }
  componentDidMount() {
    this.props.getWig(this.props.location.wigId);
  }
  addClick() {
    this.props.addItem(this.props.wigs[0]);
    this.props.addPrice(this.props.wigs[0].price);
  }

  render() {
    const { wigId } = this.props.location;
    const { wigs } = this.props;
    console.log('wig', typeof wigId);
    console.log('wigs', wigs);
    const singleWig = wigs[0];
    return (
      <div className="wig-card">
        <h2>Placeholder for wig.id {wigId}</h2>
        <div className="wig-img-div">
          <img src={singleWig.image} />
        </div>
        <div className="wig-text-div">
          <p>{singleWig.name}</p>
          <p>Price: ${singleWig.price / 100}</p>
        </div>
        {singleWig.quantity === 0 ? <p>This item is sold out.</p> : ''}
        <div className="wig-btn-div">
          <button type="button" onClick={this.addClick}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wigs: state.wigs
});

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addToCartThunk(item)),
    addPrice: wigPrice => dispatch(addTotalThunk(wigPrice)),
    getWig: wigId => dispatch(getSingleWig(wigId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleWig);
