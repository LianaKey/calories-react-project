import { combineReducers } from 'redux'
import { dishReducer, limitReducer, messageReducer } from './reducers'

export const rootReducer = combineReducers({
  dishes: dishReducer,
  limit: limitReducer,
  message: messageReducer
})

export type RootState = ReturnType<typeof rootReducer>