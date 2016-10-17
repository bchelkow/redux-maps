import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { map, latLng, marker, icon, latLngBounds, tileLayer } from 'leaflet';

import { createMarker, updateMarker } from '../../actions/markers';
import GoogleMarkers from '../google-map/markers';
import LeafletMarkers from './markers';

const getMarkers = (markers) => {
  return markers;
};

const mapStateToProps = (state) => {
  return {
    markers: getMarkers(state.markers)
  };
};

class LeafletMap extends React.Component {
  updateMap() {
    _.map(this.props.markers || [], (marker) => {
      if (!this.markers.get(marker.id)) {
        this.markers.add(marker.id, marker.latLng);
      }
    });
  }

  componentDidMount() {
    this.map = map(this.refs.map, {
      center: latLng(20, 0),
      zoom: 2,
      minZoom: 2,
      maxBounds: latLngBounds(latLng(-90, -180), latLng(90, 180)),
      doubleClickZoom: false
    });
    tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    }).addTo(this.map);
    this.markers = new LeafletMarkers(this.map);
    this.updateMap();

    this.map.on('dblclick', (e) => {
      const latLng = {
        lat: e.latlng.lat,
        lng: e.latlng.lng
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

LeafletMap = connect(
  mapStateToProps
)(LeafletMap);

export default LeafletMap;
