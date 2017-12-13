import React, { Component } from 'react';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom'

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
          <Switch>
            <Route exact path="/add" component={PostAdd}/>
            <Route exact path="/:category" component={PostList}/>
          </Switch>
          <Route exact path="/" component={PostList}/>
          <Route exact path="/:category/:postId" component={PostDetail}/>
          <Route path="/:category/:postId/delete" component={PostDelete}/>
          <Route path="/:category/:postId/edit" component={PostAdd}/>
        </div>
      </Router>
    );
  }
}

export default App;
