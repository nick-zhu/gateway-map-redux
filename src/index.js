import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './components/app'
import GATEWAYS from './data/gateways.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import './stylesheets/app.css';

let store = createStore(reducer, {gateways: GATEWAYS});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)