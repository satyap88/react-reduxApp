import {createStore} from 'redux';
import {combineReducers} from 'redux';

const initializeState = {
    todos : [
        {name: 'TASK 1', completed: false},
        {name: 'TASK 2', completed: false}
    ]
};
// action
export const toggleTask = (index) => {
    return {type: "TASK_TOGGLED", payload: index}
};

// Reducer
const todosReducer = (state = initializeState, action) => {
    switch(action.type) {
        case "TASK_TOGGLED" : return {
            ...state,
            todos: [
                 ...state.todos.slice(0, action.payload),
                 {
                   ...state.todos[action.payload],
                   completed: !state.todos[action.payload].completed
                 },
                 ...state.todos.slice(action.payload + 1)
            ]
        };
        default:
            return state;

    }
};
/*

var someFunc = () => {
}
*/

const reducers = combineReducers({
    taskList: todosReducer
});

export default createStore(reducers)