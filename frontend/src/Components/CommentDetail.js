import React from 'react'
import {connect} from 'react-redux'

import CommentAdd from './CommentAdd'
import Voters from './SubComponents/Voters'
import FontIconButton from './SubComponents/FontIconButton'
import { convertToDate } from '../Utils'
import { deleteComment, fetchComments, voteComment } from '../Actions/comment'

class CommentDetail extends React.Component {
  state = {
    showControl: false,
    onEdit: false
  }

  deleteComment = (e, comment) => {
    e.preventDefault()
    this.props.deleteComment(comment.id)
    this.props.fetchComments(comment.parentId)
  }

  editComment = e => {
    e.preventDefault()
    this.setState({onEdit: true})
  }

  render() {
    const {comment, voteComment } = this.props
    const {id, body, timestamp, author, voteScore} = comment

    return (
      <div style={{margin: '20px'}}>
        {this.state.onEdit ? 
          <CommentAdd 
            initialValues={comment} 
            onClose={() => this.setState({onEdit: false})} 
            form={`Edit_${id}`}
          />
        : (<div>
            <div style={{display: "inline-block", width: "70%"}}>
              <small>
                by <b>{!!author ? author : 'anonymous'}</b> on {convertToDate(timestamp)}
              </small>
              <div>{body}</div>
              <Voters id={id} score={voteScore} onVote={voteComment} showScore={true}/>
            </div>
            <div style={{float: "right"}}>
              <FontIconButton name="edit" onClick={this.editComment}/>
              <FontIconButton name="delete" onClick={e => this.deleteComment(e, comment)}/>
            </div>
          </div>)
        }
      </div>
    )
  }
}

export default connect(
  null, 
  dispatch => ({
    deleteComment: id => dispatch(deleteComment(id)),
    fetchComments: postId => dispatch(fetchComments(postId)),
    voteComment: (id, vote) => dispatch(voteComment(id, vote))
  })
)(CommentDetail)