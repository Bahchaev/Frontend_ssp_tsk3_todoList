import {connect} from 'react-redux'

import App from "../Components/App";
import {fetchTodoList, stopFetching} from "../actions/actions";
import 'firebase/auth'


export default connect(
    undefined,
    (dispatch) => ({
        fetchTodoList: (post) => dispatch(fetchTodoList(post)),
        stopFetching: (post) => dispatch(stopFetching(post))
    })
)(App)