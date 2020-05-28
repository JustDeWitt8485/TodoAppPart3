import React, { Component } from "react";
import todosList from "./todos.json";

class App extends Component {
  state = {
    todos: todosList,
    newText: ""
  };

  handleNewTodo = (event) => {
    if (event.key === "Enter") {
      const newList = {
        userId: 1,
        id: Math.random(),
        title: event.target.value,
        completed: false
      }

      this.setState(state => ({
        todos: [...state.todos, newList]
      }));

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
          handleChkToggle={this.handleChkToggle}
          handleDelete={this.handleDelete}
          handleRemoveChk={this.handleRemoveChk}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed"
            onClick={event => this.handleRemoveChk()}
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
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={event =>
              this.props.handleChkToggle(event, this.props.id)
            }
          />
          <label>{this.props.title}</label>
          <button className="destroy"
            onClick={this.props.handleDelete} />
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
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
              handleChkToggle={this.props.handleChkToggle}
              handleRemoveChk={this.props.handleRemoveChk}
              handleDelete={event =>
                this.props.handleDelete(event, todo.id)
              }
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
