import { ActionType } from '../../types'

export const searchReducer = (state = '', action?: any) => {
  switch (action.type) {
    case ActionType.CHANGE_LIMIT:
      return action.payload
    default:
      return state
  }
}