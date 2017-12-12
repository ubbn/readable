import React from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../Actions/comment'
import CommentDetail from './CommentDetail'

class CommentList extends React.Component {

  componentDidMount(){
    console.log('CompDidMount on CommentList: ' + this.activePostId)
    this.props.fetchComments(this.props.activePostId)
  }

  render() {
    return (
      <div>Comments {this.props.allComments.length}
        {this.props.allComments.map(x => <CommentDetail key={x.id} comment={x}/>)}
      </div>
    )
  }
}

const mapState = ({comment, post}) => ({
  allComments: comment.allComments,
  activePostId: post.activePost.id
})

const mapDispatch = (dispatch) => ({
  fetchComments: postId => dispatch(fetchComments(postId))
})

export default connect(mapState, mapDispatch)(CommentList)
