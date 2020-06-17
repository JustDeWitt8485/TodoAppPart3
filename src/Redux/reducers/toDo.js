import { ADD_TODO } from '../actions/actions';
import { TOGGLE_TODO } from '../actions/actions';
import { DELETE_TODO } from '../actions/actions';
import { CLEAR_COMPLETED_TODOS } from '../actions/actions';
import todosList from "../../todos.json";

const initialState = {
  todos: todosList,
};

function toDo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:{
      return {
        ...state,
        todos: action.ADD_TODO
      };
    }
    case TOGGLE_TODO:
      return {
        todos: action.TOGGLE_TODO
      };
    case DELETE_TODO:
      return {
        todos: action.DELETE_TODO
      };
      case CLEAR_COMPLETED_TODOS:
      return {
        todos: action.CLEAR_COMPLETED_TODOS
      }
    default:
      return state
  }

};

export default toDo;