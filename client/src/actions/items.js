// action creators

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

// async actions

export const getItems = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/items")
      .then(r => r.json())
      .then(data => dispatch(setItems(data)))
  }
}

export const createItem = (itemData, history) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itemData)
    })
      .then(r => r.json())
      .then(data => {
        dispatch(addItem(data))
        history.push(`/my_list/${data.id}`)
      })
  }
}

export const deleteItem = itemId => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/items/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: itemId
    })
      .then(dispatch(removeItem(itemId)))
  }
}