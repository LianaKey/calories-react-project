import { combineReducers } from 'redux'
import { dishes } from './reducers/dishesReducer'
import { dayLimit } from './reducers/limitReducer'
import { message } from './reducers/messageReducer'
import { IState } from '../interfaces/reducers'

interface IReducer {
    state: IState,
    action: any
}

export const rootReducer = combineReducers({
    dishes,
    dayLimit,
    message
})


export type RootState = ReturnType<typeof rootReducer>