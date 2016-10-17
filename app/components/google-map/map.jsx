import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { createMarker, updateMarker } from '../../actions/markers';
import GoogleMarkers from './markers';

const getMarkers = (markers) => {
  return markers;
};

const mapStateToProps = (state) => {
  return {
    markers: getMarkers(state.markers)
  };
};

class GoogleMap extends React.Component {
  updateMap() {
    _.map(this.props.markers || [], (marker) => {
      if (!this.markers.get(marker.id)) {
        this.markers.add(marker.id, marker.latLng);
      }
    });
  }

  componentDidMount() {
    const map = new google.maps.Map(this.refs.map, {
      center: {lat: 20, lng: 0},
      zoom: 2,
      minZoom: 2,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      panControl: false,
      streetViewControl: false,
      scaleControl: true
    });
    this.markers = new GoogleMarkers(map);
    this.updateMap();

    map.addListener('dblclick', (e) => {
      const latLng = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      const marker = this.props.dispatch(createMarker(latLng));

      this.markers.add(marker.id, latLng);
      GoogleMarkers.address(latLng, (address) => {
        this.props.dispatch(updateMarker(marker.id, address));
      });
    });
  }

  componentWillUpdate() {
    this.updateMap();
  }

  render() {
    return <div ref="map" className="map"></div>;
  }
}

GoogleMap = connect(
  mapStateToProps
)(GoogleMap);

export default GoogleMap;
