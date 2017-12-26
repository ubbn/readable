import React from 'react';
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import { addComment, editComment, fetchComments } from '../Actions/comment'
import CommentForm from './CommentForm'

class CommentAdd extends React.Component {
  // If comment to edit is set
  onEdit = !!this.props.comment

  onSubmit = (comment) => {
    if (this.onEdit)
      this.props.editComment(comment)
    else
      this.props.addComment(comment, this.props.activePostId)

    // Event set from parent can be triggered
    if (this.props.onClose)
      this.props.onClose()    

    this.props.resetForm(this.props.form)
  }

  cancelled = (e) => {
    e.preventDefault()
    if (this.props.onClose)
      this.props.onClose()
  }

  render() {
    return (
      <CommentForm onSubmit={this.onSubmit} 
        onCancel={this.cancelled} 
        form={this.props.form}
        initialValues={this.props.comment}/>
    )
  }
}

const mapState = ({post}) => ({
  activePostId: post.activePost.id
})

const mapDispatch = (dispatch) => ({
  addComment: (comment, parentId) => dispatch(addComment(comment, parentId)),
  editComment: comment => dispatch(editComment(comment)),
  fetchComments: postId => dispatch(fetchComments(postId)),
  resetForm: formName => dispatch(reset(formName))
})

export default connect(mapState, mapDispatch)(CommentAdd)
