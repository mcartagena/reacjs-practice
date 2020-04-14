import React,{Component} from 'react';
import '../css/App.css';

import Header from "./Header"

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      title : "My first Title controlled by event with ES6"
    }
  }

  changeTitle(title){
    this.setState({title});
  }

  render() {
    return (
      <div className="App">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <p>My first body...  Enjoy it!</p>
      </div>
    );
  }
}

export default App;
