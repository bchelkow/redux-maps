import React from 'react';
import { connect } from 'react-redux';

import { createMarker, updateMarker } from '../../actions/markers';
import GoogleMarkers from '../google-map/markers';

class AddMarker extends React.Component {
  onAddressSearch() {
    GoogleMarkers.geocoding(this.refs.address.value, (latLng, address) => {
      const marker = this.props.dispatch(createMarker(latLng));

      this.props.dispatch(updateMarker(marker.id, address));
      this.refs.address.value = '';
    });
  }

  onEnterKey(e) {
    if (e.key === 'Enter') {
      this.onAddressSearch();
    }
  }

  render() {
    return <input className="add-marker" ref="address" placeholder="Add marker" onKeyPress={this.onEnterKey.bind(this)}/>
  }
}

AddMarker = connect()(AddMarker);

export default AddMarker;
