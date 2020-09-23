import {TOGGLE_ITEM} from './types'
import {combineReducers} from 'redux'
import { Reducer } from 'react'

interface IDish {
    title: string;
    calories: number;
    description: string;
    photo: string;
    recommend: boolean;
    calculated: boolean;
}

export const rootReducer = (state: IDish[] = [], action?:any):IDish[] => {
    switch (action.type) {
        case TOGGLE_ITEM:
            let new_state = [...state]
            new_state.map((item) => 
                (item.title === action.name) ? item.calculated ? item.calculated = false : item.calculated = true : ''
            );
            return new_state
        default:
            return state
    }
}
