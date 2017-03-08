// state argument is not application state but only state for this reducers
// state = null is default needed when app just booted up and state is not available
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
