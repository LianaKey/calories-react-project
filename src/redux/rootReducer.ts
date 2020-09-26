import {TOGGLE_ITEM, CHANGE_LIMIT} from './types'
import {checkLimit} from '../utils/checklimit'
import {IState} from '../interfaces/reducers'

export const rootReducer = (state: IState = { dishes: [], dayLimit: 0, message: {} }, action?: any): IState => {
    switch (action.type) {
        case TOGGLE_ITEM:
            const new_dishes = [...state.dishes]
            new_dishes.map((item) => {
                if (item.title === action.payload) {
                    if (item.calculated) { M.toast({ html: state.message.itemDeleted }) }
                    item.calculated = !item.calculated
                    checkLimit(state.dayLimit, new_dishes, item, state.message)
                }
                return item
            })
            return Object.assign({}, state, {
                dishes: new_dishes
            })
        case CHANGE_LIMIT:
            M.toast({html: state.message.limitChanged})
            return Object.assign({}, state, {
                dayLimit: action.payload,
            })
        default:
            return state
    }
}
