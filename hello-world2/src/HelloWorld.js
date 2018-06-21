import React from 'react';

export default class HelloWorld extends React.Component {

    userClickedButton = () => {
        alert(this.props.messageFromParent);
    }

    formSubmitted(event) {
        event.preventDefault();
        alert(`the username is: ${this.usernameElement.value}`);
    }

    render() {
        this.props.callbackParent();
        return (
            <div>
                <h1>hello world</h1>
                <h2>{this.props.messageFromParent}</h2>
                <button onClick={this.userClickedButton}>
                    Click me
                </button>

                <form onSubmit={this.formSubmitted.bind(this)}>
                    <label>
                        username
                    </label>
                    {/*<input type="text" name="username" ref={(htmlInputElement) => {this.usernameElement = htmlInputElement}} />*/}
                    <input type="text" name="username" ref={(function(inputDomElement) {this.usernameElement = inputDomElement}).bind(this)} />
                </form>
            </div>
        )
    }
}

