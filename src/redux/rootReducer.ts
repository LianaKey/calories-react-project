import {TOGGLE_ITEM, CHANGE_LIMIT} from './types'

interface IDish {
    title: string;
    calories: number;
    description: string;
    photo: string;
    recommend: boolean;
    calculated: boolean;
}

interface IDishes {
    dishes: IDish[];
    dayLimit: number;
}

export const rootReducer = (state: IDishes = {dishes:[], dayLimit:0}, action?:any):IDishes => {
    switch (action.type) {
        case TOGGLE_ITEM:
            let new_dishes = [...state.dishes]
            new_dishes.map((item) => 
                (item.title === action.name) ? item.calculated ? item.calculated = false : item.calculated = true : ''
            );
            return Object.assign({}, state, {
                dishes: new_dishes
            })
        case CHANGE_LIMIT:
            return Object.assign({}, state, {
                dayLimit: action.payload
            })
        default:
            return state
    }
}
