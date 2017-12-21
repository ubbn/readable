import React from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../Actions/post'

class PostDelete extends React.Component {
  onDelete = (e) => {
    e.preventDefault()
    this.props.delete(this.props.activePost.id)
    this.props.history.push("/")
  }

  goBack = (e) => {
    e.preventDefault()
    this.props.history.go(-1)
  }
  
  render() {
    const { title, author } = this.props.activePost
    return (
      <div>
        <h3>Are you sure to delete the post?</h3>
        <h3>"{title}" <small>by {author}</small></h3>
        <input type="submit" value="Yes" onClick={this.onDelete}/>{' '}
        <input type="button" value="No" onClick={this.goBack}/>
      </div>
    )
  }
}

export default connect(
  ({ post }) => ({
    activePost: post.activePost
  }),
  dispatch => ({
    delete: (id) => dispatch(deletePost(id))
  })
)(PostDelete)
