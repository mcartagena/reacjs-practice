import { combineReducers } from "redux";

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const intialFilter = 'SHOW_ALL';
const intialTodos = [
    {
      text: 'Pay Utility Bill',
      completed: true,
      id: 0
    },
    {
      text: 'Initiate Vendor Discussion',
      completed: false,
      id: 1
    }, 
 ]

function todos(state = intialTodos, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state,
            {
                text: action.text,
                completed: false,
                id: state.length,
            },
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === parseInt(action.index)) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed,
                    });
                }
                return todo;
            });

        default:
            return state;
    }
}

function visibilityFilter(state = intialFilter, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;


