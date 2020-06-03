import React, { Component } from "react"
import TodoItem from "../todoitem/TodoItem"


class TodoList extends Component {
    render() {
        return (

            <section className="main">
                <ul className="todo-list">
                    {this.props.todos.map(todo => (
                        <TodoItem
                            // site key={todo.id} was suggested to use because of warning being thrown(Joseph Padgett)
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            handleChkToggle={this.props.handleChkToggle}
                            handleRemoveChk={this.props.handleRemoveChk}
                            handleDelete={event =>
                                this.props.handleDelete(event, todo.id)
                            }
                        />
                    ))};
            </ul>
            </section>
        );
    };
};


export default TodoList