import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { fetchPosts } from '../Actions/post'

class PostList extends React.Component  {
  componentDidMount(){
    this.props.dispatch(fetchPosts(this.props.match.params.category))
  }

  render(){
    console.log(this.props.match.params.category)
    return (
      <div>
        <h2>Blog posts</h2>
        {!!this.props.match.params.category && <small>filtered by category: {this.props.match.params.category}</small> }
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

function mapStateToProps({post, comment, category}){
  return {
    allPosts: post.allPosts,
    allComments: comment
  }
}

export default connect(mapStateToProps)(PostList);