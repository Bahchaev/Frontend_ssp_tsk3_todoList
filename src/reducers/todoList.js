import {ADD_NEW_TASK, ADD_NEW_TODO, CLICK_ON_TASK, CLICK_ON_TODO} from "../actions/actions";

export function todoList(state = [], action) {
    switch (action.type) {
        case ADD_NEW_TODO: {
            return [
                ...state.map(todo => ({...todo, isShown: false})),
                {
                    todoName: action.newTodoName,
                    isShown: true,
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
                                dateOfCreate: action.dateOfCreate
                            }
                        ]
                    } :
                    todo
            )
        }

        case CLICK_ON_TASK: {
           // return [...state]

            return state.map(todo => ({
                ...todo,
                taskList: todo.taskList.map(task => (
                    task === action.task ?
                        {...task, isDone: !task.isDone} :
                        {...task}
                ))
            }))


        }

        default:
            return state
    }
}


