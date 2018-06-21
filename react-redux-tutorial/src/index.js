import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from "./redux/store";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./Login";
import App2 from "./App2";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/about" component={Login}></Route>
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
