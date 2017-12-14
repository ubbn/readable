import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PostAdd from './Components/PostAdd'
import PostList from './Components/PostList'
import PostDetail from './Components/PostDetail'
import PostDelete from './Components/PostDelete'

const Routes = () => (
  <div>
      <Switch>
        <Route exact path="/add" component={PostAdd}/>
        <Route exact path="/:category" component={PostList}/>
      </Switch>
      <Route exact path="/" component={PostList}/>
      <Route exact path="/:category/:postId" component={PostDetail}/>
      <Route path="/:category/:postId/delete" component={PostDelete}/>
      <Route path="/:category/:postId/edit" component={PostAdd}/>      
  </div>    
)

export default Routes
