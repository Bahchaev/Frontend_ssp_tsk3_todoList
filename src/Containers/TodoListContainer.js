import { connect } from 'react-redux'
import TodoList from "../Components/TodoList";
import {clickOnTodo} from "../actions/actions";
import {addNewTodo} from "../actions/actions";

const mapStateToProps = state => ({
    todoList: state.todoList
});

const mapDispatchToProps = dispatch => ({
    showTaskList: todoName => dispatch(clickOnTodo(todoName)),
    addNewTodo: newTodoName => dispatch(addNewTodo(newTodoName))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)