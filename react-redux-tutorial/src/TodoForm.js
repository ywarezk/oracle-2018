import React from 'react';
import {connect} from 'react-redux';
import {addItem} from "./redux/actions";

class TodoForm extends React.Component {
    addTask = (event) => {
        event.preventDefault();
        console.log(this.itemInput.value);
        this.props.addItemToState(this.itemInput.value)
    }

    render() {
        return (
            <div>
                <h1>
                    {
                        this.props.username ? 'user logged in' : 'user logged out'
                    }
                </h1>
                <form onSubmit={this.addTask}>
                    <label>todo item</label>
                    <input
                        ref={(domElement) => {this.itemInput = domElement}}
                        type="text"
                        name="item"  />
                    <button type="submit">submit</button>
                </form>
            </div>

        )
    }
}

export default connect(
    function(state) {
        return {
            username: state.user.username
        }
    },
    function(dispatch) {
        return {
            addItemToState: function(title) {
                dispatch(addItem(title))
            }
        }
    }
)(TodoForm)