import {ADD_TO_CALC} from './types'
import {combineReducers} from 'redux'
import { Reducer } from 'react'

interface IDishh {
    title: string;
    calories: number;
    description: string;
    photo: string;
    recommend: boolean;
    calculated: boolean;
}

export const rootReducer = (state: IDishh[] = [], action?:any):any => {
    switch (action.type) {
        case ADD_TO_CALC:
            let new_array = [...state]
            new_array.map((item) => 
                (item.title === action.name) ? item.calculated ? item.calculated = false : item.calculated = true : ''
            );
            return new_array
        default:
            return state
    }
}
