import React from 'react';
import { Link } from 'react-router-dom';

class WigsHome extends React.Component {
  render() {
    return (
      <div className="allwigs-content">
        <h1>An e-commerce site where users can view and buy wigs</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default WigsHome;
