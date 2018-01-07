import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { getPost, deletePost } from '../Actions/post'

class PostDelete extends React.Component {

  componentWillMount(){
    this.props.getPost(this.props.match.params.postId)
  }

  onDelete = (e) => {
    e.preventDefault()
    this.props.delete(this.props.activePost.id)
    this.props.history.push("/")
  }

  goBack = (e) => {
    e.preventDefault()
    this.props.history.go(-1)
  }
  
  render() {
    const { title, author } = this.props.activePost
    return (
      <div>
        <h2>Are you sure to delete the post?</h2>
        <p>"{title}" <small>by {author}</small></p>
        <RaisedButton label="Yes" 
          style={{marginRight: "12px"}}
          onClick={this.onDelete}
          secondary={true}
          />
        <RaisedButton label="No"
          onClick={this.goBack}
        />        
      </div>
    )
  }
}

export default connect(
  ({ post }) => ({
    activePost: post.activePost
  }),
  dispatch => ({
    getPost: (id) => dispatch(getPost(id)),
    delete: (id) => dispatch(deletePost(id))
  })
)(PostDelete)
