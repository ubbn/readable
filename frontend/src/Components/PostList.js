import React from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import PostDetail from './PostDetail'
import { getAll } from '../Utils/PostApi'

class PostList extends React.Component  {
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    getAll().then(x => 
      this.setState({posts: x})
    )
  }

  render(){
    return (
      <div>
        <h2>Blog posts</h2>
        <ul>
          {this.state.posts.filter(x => !!x.id).map(x =>
            <li key={x.id}>
            <Link to={`/post/${x.id}`}>{x.title}</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
    
}

export default PostList;