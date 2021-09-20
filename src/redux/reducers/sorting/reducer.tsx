import { SortBy } from './actions'

export const sortingReducer = (state = '', action?: any) => {
  switch (action.type) {
    case SortBy.CATNAME:
      return action.payload
    default:
      return state
  }
}