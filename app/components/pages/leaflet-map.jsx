import React from 'react';

import AddMarker from '../add-marker/add-marker';
import LeafletMap from '../leaflet-map/map';
import MarkersList from '../markers-list/list';

export default class LeafletMapPage extends React.Component {
  render() {
    return <div className="row">
      <div className="col-xs-12">
        <h2>Leaflet</h2>
      </div>
      <div className="col-xs-12">
        <AddMarker />
      </div>
      <div className="col-xs-8">
        <LeafletMap/>
      </div>
      <div className="col-xs-4">
        <MarkersList />
      </div>
    </div>;
  }
}
