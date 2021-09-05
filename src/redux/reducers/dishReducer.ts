import { ActionType } from '../types'
import { IDish } from '../../interfaces/dishes'

type Action<T> = {
  type: string | undefined;
  payload: T;
}

type dishReducer<T> = (state: T, action?: Action<any>) => T;

export const dishReducer = (state:IDish[] = [], action:any) => {
  switch (action.type) {
    case ActionType.TOGGLE_ITEM:
      return [...state].map((item) => {
        if (item.id === action.payload) {
          item.calculated = !item.calculated
        }
        return item
      })
    default:
      return state
  }
}