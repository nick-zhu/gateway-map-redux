export const addGateway = () => {
  return {
    type: "ADD_GATEWAY",
    name: new Date().getTime(),
    longitude: -120 - Math.random() * 3,
    latitude: 36 + Math.random() * 2
  }
}

export const setDisplayFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter
  }
}