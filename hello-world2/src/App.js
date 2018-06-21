import React from 'react';
import HelloWorld from "./HelloWorld";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.transferToChild = this.transferToChild.bind(this);
    }

    transferToChild() {
        // what will be this ?
    }

    transferToChild2 = () => {
        // this here will be permenant
    }

    render() {
        const message = 'this is from root component';
        return (
            <div>
                {/*<Header />*/}
                <HelloWorld messageFromParent={message} callbackParent={this.transferToChild.bind(this)} />
                {/*<Footer />*/}
            </div>
        )
    }
}