import {ADD_TO_CALC} from './types'
import {combineReducers} from 'redux'

// export const rootReducer = combineReducers({dishReducer, summReducer})

export const rootReducer = (state) => {
    return state
}

interface IAppState {
    dishes: any[];
  }
const initialState: IAppState = {
    dishes: []
}

function dishReducer(state = initialState , action:any){
    switch (action.type) {
        case ADD_TO_CALC: {
            return (
                { ...state, calculated: true }
            )
        }
        default:
            return state
    }
}

function summReducer(state = initialState , action:any){
    switch (action.type) {
        case ADD_TO_CALC: {
            return (
                { ...state, calculated: true }
            )
        }
        default:
            return state
    }
}