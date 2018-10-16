import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import {toggleTask} from './store';

class App extends Component {
  /*state = {
    todos: [
      {name: 'Task 1', completed: false},
      {name: 'Task 2', completed: false},
    ]
  }

  toggleTask = index => {
    const tasks = [
      ...this.state.todos.slice(0, index),
      {
        ...this.state.todos[index],
        completed: !this.state.todos[index].completed
      },
      ...this.state.todos.slice(index + 1)
    ];

    this.setState({ todos: tasks })

  }*/

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(
            (task, i) => <li key = {i} onClick={() => {this.props.toggleTask(i)}} style={{ color: task.completed ? 'red' :'black' }}>
            {task.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        //taskList: state.todos.taskList
        ...state.taskList
    }
}

export default connect(mapStateToProps, {toggleTask})(App);