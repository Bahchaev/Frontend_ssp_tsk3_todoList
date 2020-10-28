import todoApp from "../reducers/combineReducer";
import {createStore} from "redux";

export let store = createStore(todoApp);
