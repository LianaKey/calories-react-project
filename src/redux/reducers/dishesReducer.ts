import { TOGGLE_ITEM } from './../types'
import { IDish } from '../../interfaces/dishes'

export const dishes = (state: IDish[] = [], action?: any) : IDish[] => {
    switch (action.type) {
        case TOGGLE_ITEM:
            return [...state].map((item) => {
                if (item.id === action.id) {
                    item.calculated = !item.calculated
                }
                return item
            })
        default:
            return state
    }
}