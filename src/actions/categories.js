const data = [
  { id: 1, name: 'Autos' },
  { id: 2, name: 'Electronica' },
  { id: 3, name: 'Juguetes' }
]

export const getCategories = () => dispatch => {
  dispatch({ type: 'FETCH_CATEGORIES' })

  setTimeout(() => {
    return dispatch({ type: "RECEIVE_CATEGORIES", data })
  }, 2000)
}