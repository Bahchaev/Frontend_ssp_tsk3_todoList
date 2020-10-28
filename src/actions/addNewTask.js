import {ADD_NEW_TASK} from "./actionTypes";

export function addNewTask(text, listName) {
    return {
        type: ADD_NEW_TASK,
        taskText: text,
        listName: listName
    }
}