import React from 'react';
import { Link, withRouter } from 'react-router';

class Navbar extends React.Component {
  render() {
    return <nav className="navbar navbar-default">
      <div className="container navbar--no-padding">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className={this.props.router.isActive('/', true) ? "active" : ""}>
              <Link to="/">Google Maps</Link>
            </li>
            <li className={this.props.router.isActive('leaflet') ? "active" : ""}>
              <Link to="/leaflet">Leaflet</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>;
  }
}

export default withRouter(Navbar);
