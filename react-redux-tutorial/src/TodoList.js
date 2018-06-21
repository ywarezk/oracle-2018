import React from 'react';
import {connect} from 'react-redux';
import {addTasksFromServer} from "./redux/actions";

class TodoList extends React.Component {
    // stamMethod = () => {
    //     // fetch()...then()..
    // }

    componentDidMount() {
        // need to call the server and grab all todo items
        this.props.grabAllTasksFromServer();
    }

    render() {
        const todoItems = this.props.todoItemsToComponent;
        //['item1', 'item2'] => [<li>item1</li>, <li>item2</li>]
        return (
            <ul>
                {
                    todoItems.map((item, index) => {
                        return <li key={index}>{item.title}</li>
                    })
                }
            </ul>
        )
    }
}

export default connect(
    function(state) {
        return {
            todoItemsToComponent: state.todo.todoItems
        }
    },
    function(dispatch) {
        return {
            grabAllTasksFromServer: function() {
                dispatch(addTasksFromServer());
            }
        }
    }
)(TodoList);