import todoApp, {createStoreWithFirebase} from "../reducers/combineReducer";
import rootReducer from "../reducers/combineReducer"
import {createStore} from "redux";

const initialState = {
    todoList: []
};
export let store = createStore(todoApp);