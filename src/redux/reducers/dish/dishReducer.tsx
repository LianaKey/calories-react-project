import { ActionType } from '../../types'
import { IDish } from '../../../interfaces/dishes'

type Action<T> = {
  type: string | undefined;
  payload: T;
}

type dishReducer<T> = (state: T, action?: Action<any>) => T;

export const dishReducer = (state:IDish[] = [], action:any) => {
  switch (action.type) {
    case ActionType.FETCH_DISHES:
      return action.payload
    default:
      return state
  }
}
