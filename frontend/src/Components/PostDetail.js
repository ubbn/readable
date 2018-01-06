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
          <p>published by <strong>{author}</strong>{' | '}
            category: <Link to={`/${category}`}>{category}</Link>{' | '}
            {convertToDate(timestamp)} 
            {' ('}
              <Link to={`${match.url}/edit`}>edit</Link>{' | '}
              <Link to={`${match.url}/delete`}>delete</Link>
            {')'}
          </p>
        </small>
        <p>{body}</p>
        <Voters id={id} score={voteScore} onVote={votePost} showScore={true}/>
        <br/>
        {!!!activePost.id ? 'Loading comments' :
          <div>
            <CommentList/>
            <CommentAdd form={'newComment'}/>
          </div> 
        }
      </div>
    )
  }
}

export default connect(
  ({post}) =>({
    activePost: post.activePost
  }), 
  dispatch => ({
    getPost: id => dispatch(getPost(id)),
    votePost: (id, vote) => dispatch(votePost(id, vote))
  })
)(PostDetail)
