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
    const { wigs, firstName } = this.props;

    return (
      <div>
        <div className="welcomeText">
          {firstName ? (
            <div>
              <h2> welcome to BART'S WIGS {firstName}! </h2>
              <p>a place to fullfill all of your wig needs</p>
            </div>
          ) : (
            <div>
              <h2>welcome to BART'S WIGS!</h2>
              <p>a place to fullfill all of your wig needs</p>
            </div>
          )}

          <div className="shop-all-btn-div">
            <Link to="/wigs">
              <button type="button">shop now</button>
            </Link>
          </div>
          <div className="allWigs-content">
            <h1>featured wigs</h1>

            <div className="featured-wig-container">
              {wigs === undefined
                ? ''
                : wigs.map(wig => <FeaturedWigCard wig={wig} key={wig.id} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wigs: state.wigs,
  email: state.user.email,
  firstName: state.user.firstName
});

const mapDispatchToProps = dispatch => ({
  getWigs: () => dispatch(getAllWigs())
});

export default connect(mapStateToProps, mapDispatchToProps)(WigsHome);
