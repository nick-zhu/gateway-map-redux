import React from 'react';
import MapGL, { Popup, NavigationControl, Marker } from 'react-map-gl';
import GATEWAYS from '../data/gateways.json';
import AddGateway from '../containers/addGateway';
import SetFilter from '../containers/setFilter';

import { connect } from 'react-redux';
import GatewayMarker from './gatewayMarker';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    let viewport = {
      latitude: 37,
      longitude: -119,
      zoom: 6,
      bearing: 0,
      pitch: 0,
      width: this.props.width || window.innerWidth,
      height: this.props.height || window.innerHeight
    };

    this.state = {
      viewport: viewport,
      mapStyle: 'mapbox://styles/mapbox/dark-v9',
      popupInfo: null
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _updateViewport = (viewport) => {
    this.setState({ viewport });
  }

  _renderPopup() {
    const { popupInfo } = this.state;

    return popupInfo && (
      <Popup tipSize={5}
        anchor="bottom"
        offsetTop={-10}
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        closeButton={false}
      >
        {popupInfo.name}
      </Popup>
    );
  }

  render() {
    let token = 'pk.eyJ1IjoiZ21yeXNrbyIsImEiOiJjaXUwaHB1dXQwMnFvMnpscDhic3Z1emh3In0.pQV-HLhyOJ3hNKpqERZRkA';

    return (
      <MapGL
        {...this.state.viewport}
        mapStyle={this.state.mapStyle}
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={token}
      >
        {this.props.gateways.map((gateway, index) => (
          <GatewayMarker
            size={20}
            latitude={gateway.latitude}
            longitude={gateway.longitude}
            onMouseOver={() => this.setState({ popupInfo: gateway })}
            onMouseOut={() => this.setState({ popupInfo: null })}
          />
        ))}
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>
        <AddGateway />
        <SetFilter />
        {this._renderPopup()}
      </MapGL>
    )
  }
}

const getVisibleGateways = (gateways, filter) => {
  switch (filter) {
    case 'DISPLAY_ALL':
      return gateways;
    case 'OFFLINE':
      return gateways.filter(g => !g.online);
    case 'ONLINE':
      return gateways.filter(g => g.online);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => {
  return {
    gateways: getVisibleGateways(state.gateways, state.displayFilter)
  }
}

export default connect(mapStateToProps, () => ({}))(App);