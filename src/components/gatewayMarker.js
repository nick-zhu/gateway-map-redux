import React from 'react';
import { Marker } from 'react-map-gl';

export default class GatewayMarker extends React.Component {

  render() {
    const { size, onMouseOver, onMouseOut, longitude, latitude } = this.props;

    return (
      <Marker
        longitude={longitude}
        latitude={latitude}
      >
        <div
          className='oval'
          style={{ transform: `translate(${-size / 2}px,${-size / 2}px)` }}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        ></div>
      </Marker>
    )
  }
}