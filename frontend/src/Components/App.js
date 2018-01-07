import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import CategoryList from './CategoryList'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Routes from '../routes'
import './App.css'

const styles = {
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
}

class App extends Component {
  
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="container">
            <div className="header">
              <div className="title">
                <IconButton
                  iconStyle={styles.mediumIcon}
                  style={styles.medium}
                  containerElement={<Link to="/" />}
                >
                  <ActionHome />
                </IconButton>
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
              <Route path="/" component={CategoryList}/>
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
