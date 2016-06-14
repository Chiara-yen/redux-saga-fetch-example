
export default function fetchData(state = {data: null, error: ''}, action) {
  switch (action.type) {
    case 'FETCH_SUCCEEDED':
      return Object.assign({}, state, {data: action.data})

    case 'FETCH_FAILED':
      return Object.assign({}, state, {error: action.error})

    default:
      return state
  }
}
