import {ADD_NEW_LIST} from "./actionTypes";

export function addNewTodo(text) {
    return {
        type: ADD_NEW_LIST,
        listName: text
    }
}