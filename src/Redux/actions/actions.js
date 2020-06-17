export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS '


export const addTodo = (title) => {
    const newList = {
        userId: 1,
        id: Math.random(),
        title: title,
        completed: false
    }

    return {
        type: ADD_TODO,
        newList
    }
};



export const toggleTodo = (updateCompArr) => {
    return {
        type: TOGGLE_TODO,
        updateCompArr
    }
}

export const deleteTodo = (filteredArray) => {

    return {
        type: DELETE_TODO,
        filteredArray
    }
}

export const clearCompletedTodos = (checkedToRemove) => {

    return {
        type: CLEAR_COMPLETED_TODOS,
        checkedToRemove
    }
}









