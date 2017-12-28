import React from 'react';
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import { addComment, editComment } from '../Actions/comment'
import CommentForm from './CommentForm'

class CommentAdd extends React.Component {
  onSubmit = (comment) => {
    // If comment to edit is set
    if (!!this.props.initialValues)
      this.props.editComment(comment)
    else
      this.props.addComment(comment, this.props.activePostId)

    this.onClose()
  }

  onClose = () => {
    // Event set from parent can be triggered
    if (this.props.onClose)
      this.props.onClose()

    this.props.resetForm(this.props.form)
  }

  render() {
    return (
      <CommentForm 
        onSubmit={this.onSubmit} 
        onCancel={this.onClose}
        {...this.props} // spread syntax
      />
    )
  }
}

export default connect(
  state => ({
    activePostId: state.post.activePost.id
  }), 
  dispatch => ({
    addComment: (comment, parentId) => dispatch(addComment(comment, parentId)),
    editComment: comment => dispatch(editComment(comment)),
    resetForm: formName => dispatch(reset(formName))
  })
)(CommentAdd)
