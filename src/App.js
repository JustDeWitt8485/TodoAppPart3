import React, { Component } from "react";
import todosList from "./todos.json";
import TodoList from "./components/todolist/TodoList"
import { Route, NavLink } from "react-router-dom";
// site : Joseph Padgett helped me to understand handleChkToggle
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
      };

      this.setState(state => ({
        todos: [...state.todos, newList]
      }));

      event.target.value = ""
    };
    console.log(this.state)
    console.log("Whatever")
  };

  handleChkToggle = (event, itemToToggle) => {
    const updateArrCk = this.state.todos.slice()
    const updateCompArr = updateArrCk.map(item => {
      if (itemToToggle === item.id) {
        item.completed = !item.completed
      };

      return item
    });
    // this.setState(state => ({
    //   todos: [...state.todos, updateCompArr]
    // }));
    this.setState(state => ({ todos: updateCompArr }));
  };

  handleRemoveChk = () => {
    const checkedToRemove = this.state.todos.filter(item => {
      if (item.completed === true) {
        return false
      };
      return true
    });

    this.setState(state => ({ todos: checkedToRemove }))
  };

  handleDelete = (event, itemsToDelete) => {
    const filteredArray = this.state.todos.filter(item => {
      if (item.id === itemsToDelete) {
        return false;
      };
      return true;
    });

    this.setState(state => ({ todos: filteredArray }));
  };




  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" onKeyDown={this.handleNewTodo} autoFocus />
        </header>
        <Route exact path="/" render={() =>
          <TodoList
            todos={this.state.todos}
            handleChkToggle={this.handleChkToggle}
            handleDelete={this.handleDelete}
            handleRemoveChk={this.handleRemoveChk}
          />
        }>
        </Route>
        <Route path="/active" render={() => (
          <TodoList
            todos={this.state.todos.filter(active => {
              if (true === active.completed) {
                return false
              };
              return true;
            })}
            handleChkToggle={this.handleChkToggle}
            handleDelete={this.handleDelete}
            handleRemoveChk={this.handleRemoveChk}
          />
        )}>
        </Route>

        <Route path="/completed" render={() => (
          <TodoList
            todos={this.state.todos.filter(completed => {
              if (true !== completed.completed) {
                return false
              }
              return true;
            })}
            handleChkToggle={this.handleChkToggle}
            handleDelete={this.handleDelete}
            handleRemoveChk={this.handleRemoveChk}
          />
        )}>
        </Route>

        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count" >
            <strong>0{this.state.todos.filter(todo => !todo.completed).length}</strong> item(s) left 
          </span>
          {/* Site: Stackoverflow documentation about NavLink */}
          <ul className="filters">
            <li>
              <NavLink to="/" exact activeStyle={{ color: "blue" }}>All</NavLink>
            </li>
            <li>
              <NavLink to="/active" exact activeStyle={{ color: "blue" }} >Active</NavLink>
            </li>
            <li>
              <NavLink to="/completed" exact activeStyle={{ color: "blue" }}>Completed</NavLink>
            </li>
          </ul>
          <button className="clear-completed"
            onClick={event => this.handleRemoveChk()}
          >Clear completed</button>
        </footer>
      </section>
    );
  };
};




export default App;

