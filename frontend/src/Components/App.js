import React, { Component } from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom'

import CategoryList from './CategoryList'
import Routes from '../routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/add">Add new</Link><br/>
          <Link to="/">Home</Link>
          <CategoryList/>
          <Routes/>
        </div>
      </Router>
    );
  }
}

export default App
