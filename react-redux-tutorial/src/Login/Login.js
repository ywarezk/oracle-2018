import './Login.scss'
import React from 'react';
import {setUsername} from "./redux/user-actions";
import {connect} from 'react-redux';

class Login extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.setUsernameWithDispatch(this.itemInput.value);
    }

    render() {
        return (
            <form className="login-component" onSubmit={this.handleFormSubmit}>
                <label>
                    username
                </label>
                <input
                    ref={(domElement) => {this.itemInput = domElement}}
                    type="text"
                    name="username" />
            </form>
        )
    }
}