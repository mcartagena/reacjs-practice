import React from "react";
import todoApp from "./initialDispatcher";

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

class ReduxStateManagement extends React.Component {

    constructor(props) {
        super(props);
        this.intialTodos = {
            visibilityFilter: 'SHOW_ALL',
            todos: [
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
        };
        this.state = {
            task: "My default task"
        };
    }

    addTodo(text) {
        return { type: ADD_TODO, text }
    }
    
    toggleTodo(index) {
        return { type: TOGGLE_TODO, index }
    }
    
    setVisibilityFilter(filter) {
        return { type: SET_VISIBILITY_FILTER, filter }
    }    

    addTask() {
        console.log('Value to add', this.state.task);
        this.intialTodos = todoApp(this.intialTodos, this.addTodo(this.state.task));

        console.log(`new state: ${JSON.stringify(this.intialTodos)}`);
    }

    handleChange(e) {
        const taskToAdd = e.target.value;
        this.setState({ 
            task : taskToAdd
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.task} onChange={this.handleChange.bind(this)} />
                <br /><br />
                <input type="button" value="Add a new Todo Item" onClick={() => this.addTask()}
                />
            </div>
        );
    }
}

export default ReduxStateManagement;
