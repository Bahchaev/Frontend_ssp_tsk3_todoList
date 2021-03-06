import { connect } from 'react-redux'
import TodoList from "../Components/TodoList";
import {clickOnTodo, setTodoIsDone} from "../actions/actions";
import {addNewTodo} from "../actions/actions";


const mapStateToProps = state => ({
    todoList: state.todoList
});

const mapDispatchToProps = dispatch => ({
    clickOnTodo: todoName => dispatch(clickOnTodo(todoName)),
    addNewTodo: newTodoName => dispatch(addNewTodo(newTodoName)),
    setTodoIsDone: (todo, isDone) => dispatch(setTodoIsDone(todo, isDone))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)