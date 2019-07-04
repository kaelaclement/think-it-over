export default function itemsReducer(
  state = {
    items: []
  },
  action) {
    switch (action.type) {
      case 'SET_ITEMS':
        return { items: action.payload }
      default:
        return state;
    }
}