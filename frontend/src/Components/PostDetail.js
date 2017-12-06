import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom'

import { getPost } from '../Actions'
import CommentAdd from './CommentAdd'
import PostAdd from './PostAdd'

class PostDetail extends React.Component {
  state = {
    post: {}
  }

  componentDidMount(){
    this.props.get(this.props.match.params.postId)
    // get(this.props.match.params.postId).then(x => 
    //   this.setState({post: x})
    // )
  }

  render(){
    return (
      <div>
        <h2>{this.props.post.title} </h2>

        <small><Link to={`${this.props.match.url}/edit`}>edit</Link></small>{' | '}
        <small><Link to={`${this.props.match.url}/delete`}>delete</Link></small>
        <p>{this.props.post.body}</p>
        <p>Category: {this.props.post.category}</p>
        <CommentAdd />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.activePost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    get: id => dispatch(getPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
