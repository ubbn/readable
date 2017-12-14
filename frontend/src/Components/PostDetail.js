import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { convertToDate } from '../Utils'
import { getPost, votePost } from '../Actions/post'
import CommentAdd from './CommentAdd'
import CommentList from './CommentList'
import Voters from './Voters'

class PostDetail extends React.Component {
  componentDidMount(){
    this.props.getPost(this.props.match.params.postId)
  }

  render(){
    const {activePost, match, votePost} = this.props
    const {title, author, body, timestamp, category, voteScore, id} = activePost
    
    return (
      <div>
        <h2>{title}</h2>
        <small>
          <p>published by {author}</p>
          <Link to={`${match.url}/edit`}>edit</Link>{' | '}
          <Link to={`${match.url}/delete`}>delete</Link>
        </small>
        <p>{body}</p>
        <Voters id={id} score={voteScore} onVote={votePost}/>
        <small>
          <p>Category: <Link to={`/${category}`}>{category}</Link></p>
          {'Updated on ' + convertToDate(timestamp)} 
        </small>
        <hr/>
        {!!!activePost.id ? 'Loading' :
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
    activePost: post.activePost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: id => dispatch(getPost(id)),
    votePost: (id, vote) => dispatch(votePost(id, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
