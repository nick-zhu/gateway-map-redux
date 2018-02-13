const gateways = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GATEWAY':
      return [
        ...state,
        {
          name: `Gateway-${action.name}`,
          longitude: action.longitude,
          latitude: action.latitude,
          online: Math.random() >= 0.5
        }
      ]
    default:
      return state;
  }
}
export default gateways;