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

export const removeItem = itemId => {
  return {
    type: "DELETE_ITEM",
    payload: itemId
  }
}

export const getItems = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/items")
      .then(r => r.json())
      .then(data => dispatch(setItems(data)))
  }
}

export const createItem = (itemData) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itemData)
    })
      .then(r => r.json())
      .then(data => dispatch(addItem(data)))
  }
}