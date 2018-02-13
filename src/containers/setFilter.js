import React from 'react';
import { connect } from 'react-redux';
import { setDisplayFilter } from '../actions';

let SetDisplayFilter = ({ dispatch }) => {
  return (
    <div className="map-filters">
      <button
        onClick={e => {
          dispatch(setDisplayFilter('DISPLAY_ALL'));
        }}>
        Display All
      </button>

      <button
        onClick={e => {
          dispatch(setDisplayFilter('ONLINE'));
        }}>
        Online Only
      </button>

      <button
        onClick={e => {
          dispatch(setDisplayFilter('OFFLINE'));
        }}>
        Offline Only
      </button>
    </div>
  )
}

SetDisplayFilter = connect()(SetDisplayFilter);

export default SetDisplayFilter;