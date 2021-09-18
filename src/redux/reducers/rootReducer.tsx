import { combineReducers } from 'redux'
import { dishReducer, searchReducer, messageReducer } from '.'

export const rootReducer = combineReducers({
  dishes: dishReducer,
  search: searchReducer,
  message: messageReducer,
})
