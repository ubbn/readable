import React from 'react'
import {connect} from 'react-redux'

import CommentAdd from './CommentAdd'
import Voters from './Voters'
import { convertToDate } from '../Utils'
import { deleteComment, fetchComments, voteComment } from '../Actions/comment'

class CommentDetail extends React.Component {
  state = {
    showControl: false,
    edit: false
  }

  mouseEnter = (e) => {
    this.setState({showControl: true})
  }

  mouseLeft = (e) => {
    this.setState({showControl: false})
  }

  deleteComment = (e, id) => {
    e.preventDefault()
    this.props.deleteComment(id)
    this.props.fetchComments(this.props.comment.parentId)
  }

  render() {
    const {id, body, timestamp, author, voteScore} = this.props.comment
    return (
      <div style={{margin: '10px'}}>
        {this.state.edit ? 
          <CommentAdd comment={this.props.comment} afterAdd={() => this.setState({edit: false})}/>
          :
          (<div onMouseMove={this.mouseEnter} onMouseLeave={this.mouseLeft}>
            <small>by {author} on {convertToDate(timestamp)}</small>
            <div>{body}</div>
            <Voters id={id} score={voteScore} onVote={this.props.voteComment}/>
            {this.state.showControl && 
              <div>
                <button onClick={e=> this.setState({edit: true})}>edit</button>{' '}
                <button onClick={e => this.deleteComment(e,id)}>delete</button>
              </div>
            }
          </div>)
        }
      </div>
    )
  }
}

const mapState = ({comment}) => ({
  allComments: comment.allComments
})

const mapDispatch = (dispatch) => ({
  deleteComment: id => dispatch(deleteComment(id)),
  fetchComments: postId => dispatch(fetchComments(postId)),
  voteComment: (id, vote) => dispatch(voteComment(id, vote))
})

export default connect(mapState, mapDispatch)(CommentDetail)