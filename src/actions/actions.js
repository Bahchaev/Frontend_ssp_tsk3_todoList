export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const CLICK_ON_TODO = 'CLICK_ON_TODO';
export const CLICK_ON_TASK = 'CLICK_ON_TASK';

export function addNewTodo(newTodoName) {
    return {
        type: ADD_NEW_TODO,
        newTodoName: newTodoName
    }
}

export function clickOnTodo(todoName) {
    console.log(`click on ${todoName}`);
    return {
        type: CLICK_ON_TODO,
        todoName: todoName
    }
}

export function addNewTask(text, date) {
    return {
        type: ADD_NEW_TASK,
        taskText: text,
        dateOfCreate: date,
    }
}

export function clickOnTask(task) {
    return {
        type: CLICK_ON_TASK,
        task: task,
    }
}

