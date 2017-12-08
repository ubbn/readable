import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { getPost } from '../Actions/post'
import CommentAdd from './CommentAdd'

class PostDetail extends React.Component {
  state = {
    post: {}
  }

  componentDidMount(){
    this.props.get(this.props.match.params.postId)
  }

  render(){
    return (
      <div>
        <h2>{this.props.post.title} </h2>

        <small><Link to={`${this.props.match.url}/edit`}>edit</Link></small>{' | '}
        <small><Link to={`${this.props.match.url}/delete`}>delete</Link></small>
        <p>{this.props.post.body}</p>
        <p>Category: <Link to={`ss/posts`}>{this.props.post.category}</Link></p>
        <CommentAdd />
      </div>
    )
  }
}

function mapStateToProps({post}) {
  return {
    post: post.activePost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    get: id => dispatch(getPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
