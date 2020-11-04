import todoApp, {createStoreWithFirebase} from "../reducers/combineReducer";
import rootReducer from "../reducers/combineReducer"
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {
    todoList: []
};
export let store = createStore(todoApp, applyMiddleware(thunk));