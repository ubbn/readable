import React from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../Actions/post'

class PostDelete extends React.Component {
  
  onDelete = (e) => {
    e.preventDefault()
    this.props.delete(this.props.activePost.id)
    this.props.history.go(-2)
  }

  goBack = (e) => {
    e.preventDefault()

    //console.log(this.props)
    this.props.history.go(-1)
  }
  
  render() {
    return (
      <div>
        <h3>Are you sure to delete the post?</h3>
        <h3>"{this.props.activePost.title}" <small>by {this.props.activePost.author}</small></h3>
        <input type="submit" value="Yes" onClick={this.onDelete}/>{' '}
        <input type="submit" value="No" onClick={this.goBack}/>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  activePost: posts.activePost
})

const mapDispatchToProps = dispatch => ({
  delete: (id) => dispatch(deletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDelete)