import React from 'react';

import { get } from '../Utils/PostApi'
import CommentAdd from './CommentAdd'

class PostDetail extends React.Component {
  state = {
    post: {}
  }

  componentDidMount(){
    get(this.props.match.params.postId).then(x => 
      this.setState({post: x})
    )
  }

  render(){
    return (
      <div>
        <h2>{this.state.post.title}</h2>
        <p>{this.state.post.body}</p>
        <CommentAdd />
      </div>
    )
  }
}

export default PostDetail;