import {TOGGLE_ITEM, CHANGE_LIMIT} from './types'
import {IDish} from '../interfaces/dishes'
import M from 'materialize-css';

interface IMessage {
    [key: string]: string
}

interface IState {
    dishes: IDish[];
    dayLimit: number;
    message: IMessage;
}

// --- Checks if calories reached limit ---
function checkLimit(limit:number, dishes:IDish[], item:IDish, message: IMessage):void {

    let summ = dishes.reduce(function(total, dish):number{
        return (dish.calculated) ? ( total + dish.calories ) : total
    }, 0);

    if (limit < summ && limit) {
        item.calculated = false
        M.toast({html: message.limitReached})
    } else {
        M.toast({html: message.itemAdded})
    }
    
    
}

export const rootReducer = (state: IState = { dishes: [], dayLimit: 0, message: {} }, action?: any): IState => {
    switch (action.type) {
        case TOGGLE_ITEM:
            const new_dishes = [...state.dishes]
            new_dishes.map((item) => {
                if (item.title === action.payload) {
                    if (item.calculated) { M.toast({ html: state.message.itemDeleted }) }
                    item.calculated = !item.calculated
                    checkLimit(state.dayLimit, new_dishes, item, state.message);
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
