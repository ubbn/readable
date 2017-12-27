import React, { Component } from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CategoryList from './CategoryList'
import Routes from '../routes'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Link to="/add">Add new</Link><br/>
            <Link to="/">Home</Link>
            <CategoryList/>
            <Routes/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App
