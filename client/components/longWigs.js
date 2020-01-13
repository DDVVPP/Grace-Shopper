import React from 'react';
import { connect } from 'react-redux';
import { getAllWigs } from '../store/reducers/wigs';
import WigCard from './wig-card';

class LongWigs extends React.Component {
  componentDidMount() {
    this.props.getWigs();
  }

  render() {
    const wigs = this.props.wigs;
    console.log('WIGS', wigs);
    return (
      <div className="allwigs-content">
        <h1>long length wigs</h1>
        <div className="wig-container">
          {wigs === undefined
            ? ''
            : wigs.map(
                wig =>
                  wig.length === 'long' ? (
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

export default connect(mapStateToProps, mapDispatchToProps)(LongWigs);
