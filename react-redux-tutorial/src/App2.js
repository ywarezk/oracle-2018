import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Login from "./Login";

export default class App2 extends Component {
  render() {
    return (
      <div>
          <nav>
              <ul>
                  <li>
                      this is permenant
                  </li>
              </ul>
          </nav>
          {this.props.children}
      </div>
    );
  }
}