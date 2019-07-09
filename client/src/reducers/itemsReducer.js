export default function itemsReducer(
  state = {
    items: []
  },
  action) {
    switch (action.type) {
      case 'SET_ITEMS':
        return { items: action.payload }
      case 'ADD_ITEM':
        return { items: state.items.concat(action.payload) }
      default:
        return state;
    }
}