import { combineReducers } from 'redux';
import gateways from './gateways';
import displayFilter from './displayFilter';

const gatewayMap = combineReducers({
  gateways,
  displayFilter
});

export default gatewayMap;