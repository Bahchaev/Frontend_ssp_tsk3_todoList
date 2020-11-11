import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from "../firebase/firebaseConfig"

export const FETCH_TODO_LIST = 'FETCH_TODO_LIST';
export const STOP_FETCHING = 'STOP_FETCHING';

export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const CLICK_ON_TODO = 'CLICK_ON_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_TODO_IS_DONE = 'SET_TODO_IS_DONE';

export const CLICK_ON_TASK = 'CLICK_ON_TASK';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';


firebase.initializeApp(firebaseConfig);
const base = firebase.database();


export function fetchTodoList(post) {
    return dispatch => {
        post.on('value', snapshot => {
            dispatch({
                type: FETCH_TODO_LIST,
                payload: snapshot.val()
            })
        });
    }
}

export function stopFetching(post) {
    return dispatch => {
        post.off();
        dispatch({
            type: STOP_FETCHING,
            payload: {}
        })
    }
}

export function addNewTodo(newTodoName) {

    return ((dispatch, getState) => {
        const state = getState().todoList;
        if (Object.keys(state).some(key => state[key].todoName === newTodoName)) {
            return {}
        } else {
            if (firebase.auth().currentUser) {
                let uid = firebase.auth().currentUser.uid;
                const Post = firebase.database().ref(`${uid}/todoList`);
                Post.push({
                    todoName: newTodoName,
                });
            }
        }
        return dispatch({
            type: ADD_NEW_TODO,
            todoName: newTodoName
        })
    })
}

export function clickOnTodo(todoName) {
    return {
        type: CLICK_ON_TODO,
        todoName: todoName
    }
}

export function deleteTodo(todoName) {

    return ((dispatch, getState) => {
        let state = getState().todoList;
        let deletingTodo = Object.keys(state).find(key => state[key].todoName === todoName);
        const uid = firebase.auth().currentUser.uid;
        const Post = firebase.database().ref(`${uid}/todoList/${deletingTodo}`);
        Post.remove().then();

        return dispatch({
            type: DELETE_TODO,
        })
    })
}

export function setTodoIsDone(todo, isDone) {
    return ((dispatch, getState) => {
        const todoList = getState().todoList;
        const todoKey = Object.keys(todoList).find((key) =>
            todoList[key].todoName === todo.todoName
        );
        if (firebase.auth().currentUser && todoKey) {
            let uid = firebase.auth().currentUser.uid;
            const Post = firebase.database().ref(`${uid}/todoList/${todoKey}`);
            Post.update({
                ...todo,
                isDone: isDone,
            }).then()
            //console.log(todo, isDone)
        }

        //update firebase
        return dispatch({
            type: SET_TODO_IS_DONE
        })
    })
}

export function addNewTask(text, date, isImmediate) {

    return ((dispatch, getState) => {
        const todoList = getState().todoList;
        let todo = Object.keys(todoList).find((key) =>
            todoList[key].isShown === true
        );

        if (firebase.auth().currentUser && todo) {
            let uid = firebase.auth().currentUser.uid;
            const Post = firebase.database().ref(`${uid}/todoList/${todo}/taskList`);
            Post.push({
                taskText: text,
                dateOfCreate: date,
                isImmediate: isImmediate
            });
        }
        return dispatch({
            type: ADD_NEW_TASK,
        })
    })
}

export function clickOnTask(task) {
    return ((dispatch, getState) => {
        const todoList = getState().todoList;
        const todo = Object.keys(todoList).find((key) =>
            todoList[key].isShown === true
        );
        const taskList = todoList[todo].taskList;
        const taskKey = Object.keys(taskList).find(key => taskList[key].taskText === task.taskText);
        if (firebase.auth().currentUser && taskKey) {
            let uid = firebase.auth().currentUser.uid;
            const Post = firebase.database().ref(`${uid}/todoList/${todo}/taskList/${taskKey}`);
            Post.update({
                ...task,
                isDone: !task.isDone,
            }).then()
        }
        return dispatch({
            type: CLICK_ON_TASK,

        })
    })

}

export function deleteTask(task) {

    return ((dispatch, getState) => {
        const todoList = getState().todoList;
        const todo = Object.keys(todoList).find((key) =>
            todoList[key].isShown === true
        );
        const taskList = todoList[todo].taskList;
        const taskKey = Object.keys(taskList).find(key => taskList[key].taskText === task.taskText);
        if (firebase.auth().currentUser && taskKey) {
            let uid = firebase.auth().currentUser.uid;
            const Post = firebase.database().ref(`${uid}/todoList/${todo}/taskList/${taskKey}`);
            Post.remove().then()
        }

        return dispatch({
            type: DELETE_TASK,
        })
    })


}



