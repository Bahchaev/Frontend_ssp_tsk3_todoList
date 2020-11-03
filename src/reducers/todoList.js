import {
    ADD_NEW_TASK,
    ADD_NEW_TODO,
    CLICK_ON_TASK,
    CLICK_ON_TODO, DELETE_TASK,
    DELETE_TODO,
    SET_TODO_IS_DONE
} from "../actions/actions";



let initialState = {
    todoList: [
        {
            todoName: "newTodoName",
            isShown: true,
            taskList: [
                {
                    taskText: "taskText",
                    isDone: false,
                    dateOfCreate: "dateOfCreate",
                    isImmediate: false
                },
                {}
            ]
        },
    ]
};

export function todoList(state = [], action) {
    switch (action.type) {
        case ADD_NEW_TODO: {
            return [
                ...state.map(todo => ({...todo, isShown: false})),
                {
                    todoName: action.newTodoName,
                    isShown: true,
                    taskList: [],
                }
            ]
        }

        case CLICK_ON_TODO: {
            return state.map(todo =>
                todo.todoName === action.todoName ?
                    {...todo, isShown: true} :
                    {...todo, isShown: false}
            )
        }

        case DELETE_TODO: {
            let newState = [
                ...state
            ];

            for (let i = 0; i < newState.length; i++) {
                if (newState.length === 0) break;
                if (newState[i].isShown === true) {

                    if (i > 0) {
                        newState[i - 1].isShown = true
                    }
                    if (i === 0 && newState.length !== 1) {
                        newState[i + 1].isShown = true
                    }

                    newState.splice(i, 1);
                    break;
                }
            }

            return newState
        }

        case SET_TODO_IS_DONE: {
            return state.map(todo =>
                todo.todoName === action.todoName ?
                    {...todo, isDone: action.isDone} :
                    {...todo}
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
                                dateOfCreate: action.dateOfCreate,
                                isImmediate: action.isImmediate
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
        case DELETE_TASK: {
            let newState = [
                ...state
            ];

            for (let i = 0; i < newState.length; i++) {
                if (newState[i].isShown === true) {
                    newState[i].taskList = newState[i].taskList.filter((task) =>
                        task !== action.task
                    );
                    break;
                }
            }
            console.log(newState);

            return newState
        }

        default:
            return state
    }
}


