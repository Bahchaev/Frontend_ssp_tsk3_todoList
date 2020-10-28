import {addNewTodo} from "../actions/addNewTodo";
import {store} from "../store/store";
import React, {useEffect} from 'react';
import TodoListContainer from "../Containers/TodoListContainer";

function App() {

    console.log(store.getState());
    store.subscribe(() => console.log(store.getState()));

    useEffect(() => {
        store.dispatch(addNewTodo('List1'));
        store.dispatch(addNewTodo('List2'));
        store.dispatch(addNewTodo('List3'));
    }, []);

    return (
        <TodoListContainer/>
    )
}

export default App

