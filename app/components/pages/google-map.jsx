import React from 'react';

import AddMarker from '../add-marker/add-marker';
import GoogleMap from '../google-map/map';
import MarkersList from '../markers-list/list';

export default class GoogleMapPage extends React.Component {
  render() {
    return <div className="row">
      <div className="col-xs-12">
        <h2>Google Maps</h2>
      </div>
      <div className="col-xs-12">
        <AddMarker />
      </div>
      <div className="col-xs-8">
        <GoogleMap/>
      </div>
      <div className="col-xs-4">
        <MarkersList />
      </div>
    </div>;
  }
};
