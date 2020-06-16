import { addTodoReducer } from "../actions/actions";
import { toggleTodoReducer } from "../actions/actions";
import { deleteTodoReducer } from "../actions/actions";
import { clearTodoReducer } from "redux";



export const store = configureStore({
    reducer: {
        router: connectRouter(history),
        addTodo: combineReducers(addTodoReducer),
        toggleTodo: combineReducers(toggleTodoReducer),
        deleteTodo: combineReducers(deleteTodoReducer),
        clearCompletedTodos: combineReducers(clearTodoReducer),
    },
    preloadedState: {},

});

store.subscribe(() => {
    localStorage.setItem(JSON.stringify(store.getState()));
});
