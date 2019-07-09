export const setItems = items => {
  return {
    type: "SET_ITEMS",
    payload: items
  }
}

export const addItem = item => {
  return {
    type: "ADD_ITEM",
    payload: item
  }
}

export const getItems = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/items")
      .then(r => r.json())
      .then(data => dispatch(setItems(data)))
  }
}