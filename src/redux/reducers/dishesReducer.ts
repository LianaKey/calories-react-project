import { TOGGLE_ITEM } from './../types'
import { IDish } from '../../interfaces/dishes'
import { Action } from 'redux';

// type GreetFunction = (state: IDish[], action?: any) => IDish[];
// type MyAction = Action & { payload: string | number | boolean }

export const dishes = (state:IDish[] = [], action:any) : IDish[] => {
  switch (action.type) {
    case TOGGLE_ITEM:
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