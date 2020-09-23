import {TOGGLE_ITEM, CHANGE_LIMIT} from './types'

interface IDish {
    title: string;
    calories: number;
    description: string;
    photo: string;
    recommend: boolean;
    calculated: boolean;
}

interface IMessage {
    [key: string]: string
}

interface IDishes {
    dishes: IDish[];
    dayLimit: number;
    message: IMessage;
}

// --- Checks if calories reached limit ---
function checkLimit(limit:number, dishes:IDish[], item:IDish, message: IMessage){
    let summ = 0
    dishes.map((item:any) => (item.calculated) ? summ = summ + item.calories: '')

    if(limit < summ && limit) {
        item.calculated = false
        if(document.querySelector('#informer')){
            M.toast({html: message.limitReached})
            return
        }
    }
    M.toast({html: message.itemAdded})
}

export const rootReducer = (state: IDishes = {dishes:[], dayLimit:0, message:{}}, action?:any):IDishes => {
    switch (action.type) {
        case TOGGLE_ITEM:
            let new_dishes = [...state.dishes]
            new_dishes.map((item) => {
                if(item.title === action.name){
                    if(item.calculated){
                        item.calculated = false
                        M.toast({html: state.message.itemDeleted})
                    } else {
                        item.calculated = true;
                        checkLimit(state.dayLimit, new_dishes, item, state.message);
                    }
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
