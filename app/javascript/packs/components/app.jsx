import React from "react";
import ReactDOM from 'react-dom';

// Components
import HomePage from '../bundles/HomePage/home_page.jsx';

class App extends React.Component {

  render() {
    return (
      <div className="manaroof-app">
        <HomePage isUserlogIn={false}/>
      </div>
    )
  }
}

export default App;
