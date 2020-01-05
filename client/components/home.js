import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WigsHome extends Component {
  render() {
    return (
      <div>
        <h1>An e-commerce site where users can view and buy wigs</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default WigsHome;
