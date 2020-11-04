import { connect } from 'react-redux'
import TodoList from "../Components/TodoList";
import {clickOnTodo, fetchTodoList, setTodoIsDone} from "../actions/actions";
import {addNewTodo} from "../actions/actions";


const mapStateToProps = state => ({
    todoList: state.todoList
});

const mapDispatchToProps = dispatch => ({
    showTaskList: todoName => dispatch(clickOnTodo(todoName)),
    addNewTodo: newTodoName => dispatch(addNewTodo(newTodoName)),
    setTodoIsDone: (todo, isDone) => dispatch(setTodoIsDone(todo, isDone))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)