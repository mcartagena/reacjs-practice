import React from "react";
import todoApp from "./initialDispatcher";

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const VisibilityFilters = {
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

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
            task: "My default task",
            id: 0
        };
    }

    addTodo(text) {
        return { type: ADD_TODO, text }
    }
    
    toggleTodo(index) {
        return { type: TOGGLE_TODO, index: index }
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

    toggleTask() {
        console.log('Task to update', this.state.id);
        this.intialTodos = todoApp(this.intialTodos, this.toggleTodo(this.state.id));

        console.log(`new state: ${JSON.stringify(this.intialTodos)}`);
    }

    viewActiveTask() {
        this.intialTodos = todoApp(this.intialTodos, this.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
        console.log(`new state: ${JSON.stringify(this.intialTodos)}`);
    }   

    handleChangeId(e) {
        const taskIdToUpdate = e.target.value;
        this.setState({ 
            id : taskIdToUpdate
        });
    }

    render() {
        return (
            <div>
                <p className="Div-add-task">
                <input type="text" value={this.state.task} onChange={this.handleChange.bind(this)} />
                <br /><br />
                <input type="button" value="Add a new Todo Item" onClick={() => this.addTask()}
                />
                </p>
                <p className="Div-update-task">
                <input type="text" value={this.state.id} onChange={this.handleChangeId.bind(this)} />
                <br /><br />
                <input type="button" value="Mark a task in the list to be completed" onClick={() => this.toggleTask()}
                />
                </p>
                <p className="Div-filter-task">
                <br /><br />
                <input type="button" value="View all active tasks" onClick={() => this.viewActiveTask()}
                />
                </p>                
            </div>            
        );
    }
}

export default ReduxStateManagement;
