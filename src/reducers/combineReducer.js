import {combineReducers} from "redux";
import {todoList} from "./todoList";
import {taskList} from "./taskList";


const todoApp = combineReducers({
    todoList,
    taskList
});

export default todoApp