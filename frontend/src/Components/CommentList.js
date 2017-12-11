import React from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../Actions/comment'

class CommentList extends React.Component {

  componentWillMount(){
    console.log('Wil mount on CommentList')
    this.props.fetchComments(this.props.activePostId)
  }

  render() {
    return (
      <div>Comments - {this.props.activePostId}
        <ul>
          {this.props.allComments.map(x => 
            <li key={x.id}>{x.body}</li>
          )}
        </ul>
      </div>
    );
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