import React from 'react';
import {connect} from 'react-redux'

import { addComment, editComment, fetchComments } from '../Actions/comment'

class CommentAdd extends React.Component {
  // If comment to edit is set
  onEdit = !!this.props.comment

  componentDidMount(){
    if (this.onEdit){
      this.comment.value = this.props.comment.body
      this.author.value = this.props.comment.author
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    // Comment or author value is empty
    if (!!!this.comment.value || !!!this.author.value)
      return

    const comment = {
      body: this.comment.value,
      author: this.author.value,
    }

    if (this.onEdit)
      this.props.editComment({
        ...this.props.comment, 
        ...comment
      })
    else
      this.props.addComment(comment, this.props.activePostId)

    // Event set from parent can be triggered
    if (this.props.afterAdd)
      this.props.afterAdd()    

    this.comment.value = ''
    this.author.value = ''
  }

  cancelled = (e) => {
    e.preventDefault()
    if (this.props.afterAdd)
      this.props.afterAdd()
  }

  keyPressed = (e) => {
    if (e.key === 'Enter')
      this.onSubmit(e)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input type="text" placeholder="Author" ref={x => this.author = x}/>
        </div>
        <div>
          <textarea type="text" placeholder="comment" 
          ref={txt => this.comment = txt}
          onKeyPress={this.keyPressed}/>
        </div>
        <div>
          <input type="submit" value={this.onEdit ? "Update" : "Add"}/>
          {this.onEdit && <button onClick={this.cancelled}>Cancel</button> }
        </div>
      </form>
    )
  }
}

const mapState = ({post}) => ({
  activePostId: post.activePost.id
})

const mapDispatch = (dispatch) => ({
  addComment: (comment, parentId) => dispatch(addComment(comment, parentId)),
  editComment: comment => dispatch(editComment(comment)),
  fetchComments: postId => dispatch(fetchComments(postId))
})

export default connect(mapState, mapDispatch)(CommentAdd)
