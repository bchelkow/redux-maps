import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Jets from 'jets';

import MarkerListItem from './item';

const getMarkers = (markers) => {
  return markers;
};

const mapStateToProps = (state) => {
  return {
    markers: getMarkers(state.markers)
  };
};

class MarkersList extends React.Component {
  componentDidMount() {
    this.jets = new Jets({
      searchTag: '#jets-search',
      contentTag: '#jets-content'
    });
  }

  componentDidUpdate() {
    this.jets.update(true);
  }

  render() {
    const markers = _.map(this.props.markers || [], marker => {
      return <MarkerListItem key={marker.id} text={marker.text}/>;
    });

    return <div className="markers-list">
      <input id="jets-search" className="markers-list__input" placeholder="Search for markers"/>
      <ul id="jets-content" className="markers-list__content">{markers}</ul>
    </div>;
  }
}

MarkersList = connect(
  mapStateToProps
)(MarkersList);

export default MarkersList;
