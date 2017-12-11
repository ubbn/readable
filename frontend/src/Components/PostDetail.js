import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { convertToDate } from '../Utils'
import { getPost } from '../Actions/post'
import CommentAdd from './CommentAdd'
import CommentList from './CommentList'

class PostDetail extends React.Component {
  state = {
    post: {}
  }

  componentDidMount(){
    this.props.getPost(this.props.match.params.postId)
    //this.props.getComments(this.props.match.params.postId)
  }

  render(){
    const {post, match} = this.props
    return (
      <div>
        <h2>{post.title} - {post.id}</h2>
        <small>
          <p>published by {post.author}</p>
          <Link to={`${match.url}/edit`}>edit</Link>{' | '}
          <Link to={`${match.url}/delete`}>delete</Link>
        </small>
        <p>{post.body}</p>
        <small>
          <p>Category: <Link to={`/${post.category}/posts`}>{post.category}</Link></p>
          {convertToDate(post.timestamp)} 
        </small>
        <hr/>
        <CommentList />
        <CommentAdd />
      </div>
    )
  }
}

function mapStateToProps({post, comment}) {
  return {
    post: post.activePost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: id => dispatch(getPost(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
