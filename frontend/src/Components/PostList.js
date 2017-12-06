import React from 'react';
import { connect } from 'react-redux';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import PostDetail from './PostDetail'
import { getAll } from '../Utils/PostApi'
import { fetchPosts } from '../Actions'

class PostList extends React.Component  {
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }

  componentWillMount(){
    this.props.dispatch(fetchPosts())
    // getAll().then(x => 
    //   this.setState({posts: x})
    // )
  }

  render(){
    return (
      <div>
        <h2>Blog posts</h2>
        <ul>
          {this.props.allPosts.filter(x => !!x.id).map(x =>
            <li key={x.id}>
            <Link to={`/post/${x.id}`}>{x.title}</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
    
}

function mapStateToProps({posts, comments, categories}){
  return {
    allPosts: posts.allPosts,
    allComments: comments
  }
}

export default connect(mapStateToProps)(PostList);