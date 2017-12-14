import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { convertToDate } from '../Utils'
import { getPost, votePost } from '../Actions/post'
import { fetchComments } from '../Actions/comment'
import CommentAdd from './CommentAdd'
import CommentList from './CommentList'
import Voters from './Voters'

class PostDetail extends React.Component {
  componentDidMount(){
    this.props.getPost(this.props.match.params.postId)
  }

  render(){
    const {post, match} = this.props
    const {title, author, body, timestamp, category, voteScore, id} = post
    return (
      <div>
        <h2>{title}</h2>
        <small>
          <p>published by {author}</p>
          <Link to={`${match.url}/edit`}>edit</Link>{' | '}
          <Link to={`${match.url}/delete`}>delete</Link>
        </small>
        <p>{body}</p>
        <Voters id={id} score={voteScore} onVote={this.props.votePost}/>
        <small>
          <p>Category: <Link to={`/${category}`}>{category}</Link></p>
          {'Updated on ' + convertToDate(timestamp)} 
        </small>
        <hr/>
        {!!!this.props.post.id ? 'Loading' :
          <div>
            <CommentList/>
            <CommentAdd/>
          </div> 
        }
      </div>
    )
  }
}

function mapStateToProps({post, comment}) {
  return {
    post: post.activePost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: id => dispatch(getPost(id)),
    fetchComments: postId => dispatch(fetchComments(postId)),
    votePost: (id, vote) => dispatch(votePost(id, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
