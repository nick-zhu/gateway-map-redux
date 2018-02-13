import React from 'react';
import { connect } from 'react-redux';
import { addGateway } from '../actions';

let AddGateway = ({dispatch}) => {
  return (
    <button
      className="new-gateway-btn"
      onClick={ e => {
        dispatch(addGateway());
      }}
    >Add New Gateway
    </button>
  )
}

AddGateway = connect()(AddGateway);

export default AddGateway;