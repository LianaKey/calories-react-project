import { Search } from './actions'

export const searchReducer = (state = '', action?: any) => {
  switch (action.type) {
    case Search.SEARCH_DISH:
      return action.payload
    default:
      return state
  }
}