import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import markersReducer from './reducers/markers';

import MainLayout from './components/layouts/main';
import GoogleMapPage from './components/pages/google-map';
import LeafletMapPage from './components/pages/leaflet-map';
import NotFoundPage from './components/pages/not-found';

const store = createStore(
  combineReducers({
    markers: markersReducer,
    routing: routerReducer
  })
);
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={GoogleMapPage}/>
        <Route path="leaflet" component={LeafletMapPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
