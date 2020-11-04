import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from "../firebase/firebaseConfig"

export const FETCH_TODO_LIST = 'FETCH_TODO_LIST';

export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const CLICK_ON_TODO = 'CLICK_ON_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_TODO_IS_DONE = 'SET_TODO_IS_DONE';

export const CLICK_ON_TASK = 'CLICK_ON_TASK';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const SET_TODOS = 'SET_TODOS';

firebase.initializeApp(firebaseConfig);
const base = firebase.database();

var userId;
if (firebase.auth().currentUser) userId = firebase.auth().currentUser.uid;
const Post = base.ref();

export function fetchTodoList() {
    console.log("fetchTodoList_action");

    return dispatch => {
        Post.on('value', snapshot => {
            console.log("fetchTodoList_action_dispatch");
            dispatch({
                type: FETCH_TODO_LIST,
                payload: snapshot.val() //(snapshot.val().todoList) ? snapshot.val().todoList : []
            })
        });
    }
}

export function addNewTodo(newTodoName) {
    return {
        type: ADD_NEW_TODO,
        newTodoName: newTodoName
    }
}

export function clickOnTodo(todoName) {
    return {
        type: CLICK_ON_TODO,
        todoName: todoName
    }
}

export function deleteTodo() {
    return {
        type: DELETE_TODO,
    }
}

export function setTodoIsDone(todo, isDone) {
    return {
        type: SET_TODO_IS_DONE,
        todoName: todo.todoName,
        isDone: isDone
    }
}

export function addNewTask(text, date, isImmediate) {
    return {
        type: ADD_NEW_TASK,
        taskText: text,
        dateOfCreate: date,
        isImmediate: isImmediate
    }
}

export function clickOnTask(task) {
    return {
        type: CLICK_ON_TASK,
        task: task,
    }
}

export function deleteTask(task) {
    return {
        type: DELETE_TASK,
        task: task
    }
}

export function setTodos(records) {
    return {
        type: SET_TODOS,
        records: records
    }
}



