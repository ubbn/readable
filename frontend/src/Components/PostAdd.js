import React from 'react';
import { connect } from 'react-redux';

import { addPost, getPost, updatePost, deleteActivePost } from '../Actions/post'
import PostForm from './PostForm'

class PostAdd extends React.Component {
  isOnEdit = !!this.props.match.params.postId

  componentWillMount(){
    // Param postId is provided, it means it is EditPost
    if (this.isOnEdit)
      this.props.getPost(this.props.match.params.postId)
    else
      this.props.deleteActivePost()
  }

  onSubmit = (values) => {
    // Post id is already assigned, it means it is Editing, so update it
    let promise = ''
    if (this.isOnEdit)
      promise = this.props.updatePost(values)
    else
      promise = this.props.addNewPost(values)
      
    // After change is made, redirect
    promise.then(({post}) => this.redirectTo(post))
  }

  onCancel = (e) => {
    this.redirectTo(this.props.activePost)
  }

  redirectTo = post => {
    let redirectUrl = "/"
    if (Object.keys(post).length > 0)
      redirectUrl = `/${post.category}/${post.id}`

    this.props.history.push(redirectUrl)
  }

  render() {
    return (
      <PostForm onSubmit={this.onSubmit} onCancel={this.onCancel} />
    )
  }
}

export default connect(
  ({post, category}) =>({
    activePost: post.activePost
  }),
  dispatch => ({
    getPost: id => dispatch(getPost(id)),
    addNewPost: post => dispatch(addPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    deleteActivePost: () => dispatch(deleteActivePost()),
  })
)(PostAdd)
