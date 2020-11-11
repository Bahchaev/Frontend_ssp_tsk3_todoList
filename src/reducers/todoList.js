import {
    FETCH_TODO_LIST,
    ADD_NEW_TASK, ADD_NEW_TODO, CLICK_ON_TASK, CLICK_ON_TODO,
    DELETE_TASK, DELETE_TODO, SET_TODO_IS_DONE, STOP_FETCHING
} from "../actions/actions";
import 'firebase/auth';

const initialState = {
    todoList: {}
};

export function todoList(state = {}, action) {
    switch (action.type) {

        case FETCH_TODO_LIST: {

            if (action.payload.todoList) {
                let newState = action.payload.todoList;
                Object.keys(newState).forEach(key => {
                    newState[key].isShown = false;
                });
                let shownTodo = Object.keys(state).find(key => state[key].isShown === true);
                if (shownTodo) {
                    if (newState[shownTodo]) newState[shownTodo].isShown = true
                } else {
                    let firstTodo = Object.keys(newState)[0];
                    newState[firstTodo].isShown = true
                }

                return newState

            } else return {}
        }

        case STOP_FETCHING: {
            return {}
        }

        case ADD_NEW_TODO: {

            let newState = {
                ...state
            };

            Object.keys(newState).forEach(key => {
                newState[key].isShown = (newState[key].todoName === action.todoName)
            });

            return newState
        }

        case CLICK_ON_TODO: {
            let newState = {
                ...state
            };

            Object.keys(newState).forEach(key =>
                newState[key].isShown = (newState[key].todoName === action.todoName)
            );

            return newState
        }

        case DELETE_TODO: {
            return {...state}
        }

        case SET_TODO_IS_DONE: {
            return {...state}
        }

        case ADD_NEW_TASK: {
            return {...state}
        }

        case CLICK_ON_TASK: {
            return {...state}
        }

        case DELETE_TASK: {
            return {...state}
        }

        default:
            return state
    }
}


