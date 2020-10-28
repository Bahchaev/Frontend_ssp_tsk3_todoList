import {ADD_NEW_LIST, SHOW_LIST} from "../actions/actionTypes";

export function todoList(state = [], action) {
    switch (action.type) {
        case ADD_NEW_LIST: {
            return [
                ...state,
                {
                    listName: action.listName,
                    isShown: false
                }
            ]
        }
        case SHOW_LIST: {
            return state.map(todo =>
                todo.listName === action.listName ? {...todo, isShown: !todo.isShown} : todo
            )
        }
        default:
            return state
    }
}


