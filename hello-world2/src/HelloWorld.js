import React from 'react';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
    }

    userClickedButton = () => {
        // alert(this.props.messageFromParent);
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        });

        // this.setState({
        //     isVisible: true
        // })
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
                    Toggle form visible
                </button>

                {
                    this.state.isVisible ? (
                        <form onSubmit={this.formSubmitted.bind(this)}>
                            <label>
                                username
                            </label>
                            {/*<input type="text" name="username" ref={(htmlInputElement) => {this.usernameElement = htmlInputElement}} />*/}
                            <input value={this.props.messageFromParent} type="text" name="username" ref={(function(inputDomElement) {this.usernameElement = inputDomElement}).bind(this)} />
                        </form>) : null
                }

                {/*{*/}
                    {/*this.state.isVisible && <form></form>*/}
                {/*}*/}

                {/*{*/}
                    {/*function() {*/}
                        {/*if (this.state.isVisible) {*/}
                            {/*return (<form onSubmit={this.formSubmitted.bind(this)}>*/}
                                    {/*<label>*/}
                                        {/*username*/}
                                    {/*</label>*/}
                                    {/*/!*<input type="text" name="username" ref={(htmlInputElement) => {this.usernameElement = htmlInputElement}} />*!/*/}
                                    {/*<input type="text" name="username" ref={(function(inputDomElement) {this.usernameElement = inputDomElement}).bind(this)} />*/}
                                {/*</form>)*/}
                        {/*}*/}
                    {/*}()*/}
                {/*}*/}

            </div>
        )
    }
}

