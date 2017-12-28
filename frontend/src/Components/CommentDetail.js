import React from 'react'
import {connect} from 'react-redux'

import CommentAdd from './CommentAdd'
import Voters from './Voters'
import { convertToDate } from '../Utils'
import { deleteComment, fetchComments, voteComment } from '../Actions/comment'

class CommentDetail extends React.Component {
  state = {
    showControl: false,
    onEdit: false
  }

  mouseMove = (e) => {
    this.setState({showControl: true})
  }

  mouseLeft = (e) => {
    this.setState({showControl: false})
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
      <div style={{margin: '10px'}}>
        {this.state.onEdit ? 
          <CommentAdd initialValues={comment} onClose={() => this.setState({onEdit: false})} form={`Edit_${id}`}/>
          :
          (<div onMouseMove={this.mouseMove} onMouseLeave={this.mouseLeft}>
            <small>by {author} on {convertToDate(timestamp)}</small>
            <div>{body}</div>
            <Voters id={id} score={voteScore} onVote={voteComment}/>
            {this.state.showControl && 
              <div>
                <button onClick={this.editComment}>Edit</button>{' '}
                <button onClick={e => this.deleteComment(e, comment)}>Delete</button>
              </div>
            }
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