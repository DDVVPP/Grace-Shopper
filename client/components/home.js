import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllWigs } from '../store/reducers/wigs';
import FeaturedWigCard from './featured-wig-card';

class WigsHome extends Component {
  componentDidMount() {
    this.props.getWigs();
  }
  render() {
    const wigs = this.props.wigs;

    return (
      <div>
        <div className="welcomeText">
          <h2>welcome to BART'S WIGS!</h2>
          <p>a place to fullfill all of your wig needs</p>
          <div className="shop-all-btn-div">
            <Link to="/wigs">
              <button type="button">shop now</button>
            </Link>
          </div>
          <h1>featured wigs</h1>
          <div className="wig-container">
            {wigs === undefined
              ? ''
              : wigs.map(wig => <FeaturedWigCard wig={wig} key={wig.id} />)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wigs: state.wigs
});

const mapDispatchToProps = dispatch => ({
  getWigs: () => dispatch(getAllWigs())
});

export default connect(mapStateToProps, mapDispatchToProps)(WigsHome);
