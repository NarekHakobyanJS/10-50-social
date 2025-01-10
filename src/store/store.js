import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from './usersReducer.js'
import { thunk } from "redux-thunk";

const reducers = combineReducers({
    usersPage : usersReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))