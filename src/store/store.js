import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from './usersReducer.js'
import profileRedcuer from "./profileReducer.js";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
    usersPage : usersReducer,
    profilePage : profileRedcuer
})

export const store = createStore(reducers, applyMiddleware(thunk))

window.store = store