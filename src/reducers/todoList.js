import {ADD_NEW_TASK, ADD_NEW_TODO, CLICK_ON_TODO} from "../actions/actions";

export function todoList(state = [], action) {
    switch (action.type) {
        case ADD_NEW_TODO: {
            console.log(state);
            return [
                ...state,
                {
                    todoName: action.newTodoName,
                    isShown: false,
                    taskList: []
                }
            ]
        }

        case CLICK_ON_TODO: {
            return state.map(todo =>
                todo.todoName === action.todoName ?
                    {...todo, isShown: !todo.isShown} :
                    {...todo, isShown: false}
            )
        }

        case ADD_NEW_TASK: {
            return state.map(todo =>
                todo.isShown === true ?
                    {
                        ...todo, taskList: [
                            ...todo.taskList,
                            {
                                taskText: action.taskText,
                                isDone: false,
                            }
                        ]
                    } :
                    todo
            )
        }

        default:
            return state
    }
}


