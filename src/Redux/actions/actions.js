import {
    getInitStateFromStorage,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
} from '../helpers';

const ADD_TODO = createActions('ADD_TODO')
export const addTodo = () => dispatch => {
    dispatch(ADD_TODO.START());


    export const addTodoReducer = {
        addTodo: createReducer(
            getInitStateFromStorage('ADD_TODO', asyncInitialState),
            {
                ...asyncCases(ADD_TODO)
            }
        )
    }
}

const TOGGLE_TODO = createActions('TOGGLE_TODO')
export const toggleTodo = () => dispatch => {
    dispatch(TOGGLE_TODO.START());


    export const toddleTodoReducer = {
        toggleTodo: createReducer(
            getInitStateFromStorage('TOGGLE_TODO', asyncInitialState),
            {
                ...asyncCases(TOGGLE_TODO)
            }
        )
    }
}

const DELETE_TODO = createActions(' DELETE_TODO')
export const deleteTodo = () => dispatch => {
    dispatch(DELETE_TODO.START());


    export const deleteTodoReducer = {
        deleteTodo: createReducer(
            getInitStateFromStorage(' DELETE_TODO', asyncInitialState),
            {
                ...asyncCases(TOGGLE_TODO)
            }
        )
    }
}

const CLEAR_COMPLETED_TODOS = createActions(' CLEAR_COMPLETED_TODOS')
export const clearTodo = () => dispatch => {
    dispatch(CLEAR_COMPLETED_TODOS.START());


    export const clearTodoReducer = {
        clearCompletedTodos: createReducer(
            getInitStateFromStorage(' CLEAR_COMPLETED_TODOS', asyncInitialState),
            {
                ...asyncCases(CLEAR_COMPLETED_TODOS)
            }
        )
    }
}


