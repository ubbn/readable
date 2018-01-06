import React, { Component } from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import CategoryList from './CategoryList'
import Routes from '../routes'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="container">
            <div className="header">
              <div className="title">
                <h1><Link to="/">Keep blogging...</Link></h1>
              </div>
              <div className="add-new">
                <FloatingActionButton 
                  containerElement={<Link to="/add" />}
                  secondary={true} mini={true}>
                  <ContentAdd />
                </FloatingActionButton>
              </div>
            </div>
            <div className="menu">
              <CategoryList/>
            </div>
            <div className="content">
              <Routes/>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App
