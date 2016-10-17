import React from 'react';
import Navbar from '../navbar/navbar';

export default class MainLayout extends React.Component {
  render() {
    return <div>
      <Navbar/>
      <div className="container">
        {this.props.children}
      </div>
    </div>;
  }
};
