import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import PostAdd from './Components/PostAdd'
import PostList from './Components/PostList'
import PostDetail from './Components/PostDetail'
import PostDelete from './Components/PostDelete'
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
          <Route exact path="/:category/posts" component={PostList}/>
          <Route exact path="/post/:postId" component={PostDetail}/>
          <Route path="/post/:postId/delete" component={PostDelete}/>
          <Route path="/post/:postId/edit" component={PostAdd}/>
          <Route path="/add" component={PostAdd}/>
        </div>
      </Router>
    );
  }
}

export default App;
