import React from 'react';
import {connect} from 'react-redux'

import { addComment, editComment, fetchComments } from '../Actions/comment'

class CommentAdd extends React.Component {
  componentDidMount(){
    if (!!this.props.comment)
      this.comment.value = this.props.comment.body
  }

  onSubmit = (e) => {
    e.preventDefault()

    // Comment box is empty
    if (!!!this.comment.value)
      return

    if (this.props.comment)
    {
      const k = {...this.props.comment, body: this.comment.value}
      console.log('OnSubmit: ' + k)
      this.props.editComment(k)
    }
    else  
      {this.props.addComment(this.comment.value, this.props.activePostId)}

    //this.props.fetchComments(this.props.activePostId)
    
    if (this.props.afterAdd)
      this.props.afterAdd()    

    this.comment.value = ''
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
          <textarea type="text" placeholder="comment" 
          ref={txt => this.comment = txt}
          onKeyPress={this.keyPressed}/>
        </div>
        <div>
          <input type="submit" value="Add"/>
          {!!this.props.comment && <button onClick={this.cancelled}>Cancel</button> }
        </div>
      </form>
    )
  }
}

const mapState = ({post, comment}) => ({
  activePostId: post.activePost.id,
  allComments: comment.allComments
})

const mapDispatch = (dispatch) => ({
  addComment: (comment, parentId) => dispatch(addComment(comment, parentId)),
  editComment: comment => dispatch(editComment(comment)),
  fetchComments: postId => dispatch(fetchComments(postId))
})

export default connect(mapState, mapDispatch)(CommentAdd)
