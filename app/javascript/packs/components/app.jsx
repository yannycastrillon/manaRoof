import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import HomePage from '../bundles/HomePage/home_page';
import EmployeeContainer from '../bundles/Employee/components/employee_container';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="manaroof-app">
          <Route path="/" exact render={props => (<HomePage isUserLogIn={false} />)} />
          <Route path="/about_us" exact render={props => ( <h1>About us Page</h1>)} />
          <Route
            path="/employees"
            exact
            render={props => (
              <EmployeeContainer router={props} {...props} />
            )}
          />
          <Route path="/joint_us" exact render={props => ( <h1>Join Us Page</h1>)} />
          <Route path="/projects" exact render={props => ( <h1>Projects Page</h1>)} />
        </div>
      </Router>
    )
  }
}

export default App;
