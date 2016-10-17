import { marker, icon } from 'leaflet';

export default class LeafletMarkers {
  constructor(map) {
    this.map = map;
    this._markers = {};
  }

  add(id, latLng) {
    this._markers[id] = marker(latLng, {
      icon: icon({
        iconUrl: 'dist/marker-icon.png',
        iconRetinaUrl: 'dist/marker-icon-2x.png',
        shadowUrl: 'dist/marker-shadow.png',
        iconSize: [24, 40],
        iconAnchor: [12, 40]
      })
    }).addTo(this.map);
  }

  get(id) {
    return this._markers[id];
  }

  remove(id) {
    this.map.removeLayer(this._markers[id]);
    delete this._markers[id];
  }
}
