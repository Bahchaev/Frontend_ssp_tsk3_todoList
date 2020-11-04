import {combineReducers, compose, createStore} from "redux";
import {todoList} from "./todoList";
import {firebaseReducer, reactReduxFirebase} from 'react-redux-firebase'
import firebase from 'firebase'


const todoApp = combineReducers({
    todoList,
});
export default todoApp

