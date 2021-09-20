import { combineReducers } from 'redux';
import { searchReducer } from './search/reducer';
import { dishReducer } from './dish/reducer';
import { messageReducer } from './message/reducer';
import { sortingReducer } from './sorting/reducer';

export const rootReducer = combineReducers({
    dishes: dishReducer,
    search: searchReducer,
    message: messageReducer,
    sorting: sortingReducer,
})
