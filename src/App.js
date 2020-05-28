import React, { Component } from "react";
import todosList from "./todos.json";

class App extends Component {
  state = {
    todos: todosList,
    newText: ""
  };

  handleNewTodo = (event) => {
    if (event.key === "enter") {
      const newList = {
        userId: 1,
        id: Math.random(),
        title: event.target.value,
        completed: false
      }
      const updateArr = this.state.todos.slice()
      updateArr[updateArr.length] = newList;
      this.setState({ todos: updateArr })
      event.target.value = ""
    }
    console.log(this.state)
    console.log("Whatever")
  }

  handleChkToggle = (event, itemToToggle) => {
    const updateArrCk = this.state.todos.slice()
    const updateCompArr = updateArrCk.map(item => {
      if (itemToToggle === item.id) {
        item.completed = !item.completed
      }

      return item
    })
    this.setState({ updateCompArr })
  }

  handleRemoveChk = (event) => {
    const checkedToRemove = this.state.todos.filter(item => {
      if (item.completed === true) {
        return false
      }
      return true
    })
    this.setState({ todos: checkedToRemove })
  }

  handleDelete = (event, itemsToDelete) => {
    const filteredArray = this.state.todos.filter(item => {
      if (item.id === itemsToDelete) {
        return false;
      }
      return true;
    });
    this.setState({ todos: filteredArray });
  };




  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" onKeyDown={this.handleNewTodo} autoFocus />
        </header>
        <TodoList
          todos={this.state.todos}
          handleToggleComplete={this.handleChkToggle}
          handleDeleteTodo={this.handleDelete}
          handleRemoveChecked={this.handleRemoveChk}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed"
            onClick={event => this.handleRemoveChecked()}
          >Clear completed</button>
        </footer>
      </section>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.props.completed} onChange={this.handleNewTodo} />
          <label>{this.props.title}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (

      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <TodoItem title={todo.title} completed={todo.completed} />
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
