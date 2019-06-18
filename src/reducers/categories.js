const defaultState = {
  isFetching: false,
  items: []
}

const categories = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return { ...state, isFetching: true }
    case "RECEIVE_CATEGORIES":
      return { isFetching: false, items: action.data }
    default:
      return state
  }
}

export default categories