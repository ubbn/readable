import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import PostAdd from './Components/PostAdd'
import PostList from './Components/PostList'
import PostDetail from './Components/PostDetail'
import CategoryList from './Components/CategoryList'

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Link to="/add">Add new</Link><br/>
          <Link to="/">Home</Link>
          <CategoryList/>
          <Route exact path="/" component={PostList}/>
          <Route path="/add" component={PostAdd}/>
          <Route path="/post/:postId" component={PostDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
