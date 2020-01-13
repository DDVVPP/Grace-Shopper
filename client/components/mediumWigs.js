import React from 'react';
import { connect } from 'react-redux';
import { getAllWigs } from '../store/reducers/wigs';
import WigCard from './wig-card';

class MediumWigs extends React.Component {
  componentDidMount() {
    this.props.getWigs();
  }

  render() {
    const wigs = this.props.wigs;

    return (
      <div className="allwigs-content">
        <h1>medium length wigs</h1>
        <div className="wig-container">
          {wigs === undefined
            ? ''
            : wigs.map(
                wig =>
                  wig.length === 'medium' ? (
                    <WigCard wig={wig} key={wig.id} />
                  ) : (
                    ''
                  )
              )}
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

export default connect(mapStateToProps, mapDispatchToProps)(MediumWigs);
