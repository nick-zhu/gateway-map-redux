import React, { PureComponent } from 'react';

export default class GatewayMarker extends PureComponent {

  render() {
    const {size, onMouseOver, onMouseOut} = this.props;

    return (
      <div
        className='oval'
        style={{ transform: `translate(${-size / 2}px,${-size / 2}px)` }}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      ></div>
    )
  }
}