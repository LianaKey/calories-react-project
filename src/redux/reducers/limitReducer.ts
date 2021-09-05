import { ActionType } from '../types'

export const limitReducer = (state: number = 0, action?: any) => {
  switch (action.type) {
    case ActionType.CHANGE_LIMIT:
      return action.payload
    default:
      return state
  }
}