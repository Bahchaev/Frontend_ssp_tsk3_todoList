import {combineReducers} from 'redux'
import {pageReducer} from './pageReducer'
import {userReducer} from './userReducer'

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
});
