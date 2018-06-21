import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Login from "./Login";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
            Todo Application
        </h1>
        <Login/>
        <TodoForm />
        <hr/>
        <TodoList/>
      </div>
    );
  }
}

