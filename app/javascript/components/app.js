import ReactDOM from 'react-dom';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Yanny"
    }
  }
  render() {
    return (
      <div>This is my Home Page Component {this.state.name}</div>
    )
  }
}

export default App;
