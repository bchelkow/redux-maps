import $ from 'jquery';

const GOOGLE_API_KEY = 'AIzaSyDbpjYiKq-rvGq8DjSKKEJ_IHUsJdhd6KI';

export default class GoogleMarkers {
  constructor(map) {
    this.map = map;
    this._markers = {};
  }

  add(id, latLng) {
    this._markers[id] = new google.maps.Marker({
      anchorPoint: [12, 40],
      icon: 'dist/marker-icon.png',
      map: this.map,
      position: new google.maps.LatLng(latLng)
    });
  }

  static address(latLng, callback) {
    const query = $.param({
      latlng: `${latLng.lat},${latLng.lng}`
    });

    $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?${query}&key=${GOOGLE_API_KEY}`,
      success: (data) => {
        if (data.status === "OK") {
          callback(data.results[0].formatted_address);
        }
      },
      dataType: 'json',
      crossDomain: true
    });
  }

  static geocoding(address, callback) {
    const query = $.param({
      address: address
    });

    $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?${query}&key=${GOOGLE_API_KEY}`,
      success: (data) => {
        if (data.status === "OK") {
          callback({
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng
          }, data.results[0].formatted_address);
        }
      },
      dataType: 'json',
      crossDomain: true
    });
  }

  get(id) {
    return this._markers[id];
  }

  remove(id) {
    this._markers.setMap(null);
    delete this._markers[id];
  }
}
