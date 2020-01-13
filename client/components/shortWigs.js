import React from 'react';
import { connect } from 'react-redux';
import { getAllWigs } from '../store/reducers/wigs';
import WigCard from './wig-card';

class ShortWigs extends React.Component {
  componentDidMount() {
    this.props.getWigs();
  }

  render() {
    const wigs = this.props.wigs;
    console.log('WIGS', wigs);
    return (
      <div className="allwigs-content">
        <h1>short length wigs</h1>
        <div className="wig-container">
          {wigs === undefined
            ? ''
            : wigs.map(
                wig =>
                  wig.length === 'short' ? (
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

export default connect(mapStateToProps, mapDispatchToProps)(ShortWigs);
