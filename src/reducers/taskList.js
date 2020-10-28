import {ADD_NEW_LIST, ADD_NEW_TASK} from "../actions/actionTypes";

export function taskList(state = {}, action) {
    switch (action.type) {
        case ADD_NEW_LIST: {
            let newState = {
                ...state,
            };
            newState[action.listName] = [];
            return newState
        }
        case ADD_NEW_TASK : {
            let newState = {
                ...state,
            };
            if (newState[action.listName]) {
                newState[action.listName].push({
                    taskText: action.taskText,
                    isDone: false
                });
            }
            return newState
        }
        default:
            return state
    }
}