import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { addPost, getPost, updatePost, deleteActivePost, updateActivePost } from '../Actions/post'

class PostAdd extends React.Component {
  state = {
    redirect: false
  }

  isOnEdit = !!this.props.match.params.postId

  componentDidMount(){
    // Param postId is provided, it means it is EditPost
    if (this.isOnEdit)
      this.props.getPost(this.props.match.params.postId)
    else{
      this.props.deleteActivePost()
      this.props.updateActivePost({category: this.category.value})
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    // Post id is already assigned, it means it is Editing, so update it
    if (this.isOnEdit)
      this.props.updatePost(this.props.activePost)
    else
      this.props.addNewPost(this.props.activePost)
    
    this.setState({redirect: true})
  }

  valueChanged = (tag, e) => {
    e.preventDefault()
    this.props.updateActivePost({[tag]: e.target.value})
  }

  cancelled = (e) => {
    this.props.deleteActivePost()
  }

  render() {
    const {id, title, body, author, category} = this.isOnEdit ? this.props.activePost : {}
    const redirectTo = !!id ? `/${category}/${id}` : "/"

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>
            <label htmlFor="title">Title: </label>
            <input name="title" id="title" type="text" placeholder="Title" 
              onChange={e => this.valueChanged("title", e)}
              value={title}/>
          </p>
          <p>
            <label htmlFor="author">Author: </label>
            <input name="author" id="author" type="text" placeholder="Author" 
              onChange={e => this.valueChanged("author", e)}
              value={author}/>
          </p>
          <p>
            <label htmlFor="categories">Categories: </label>
            <select name="categories" id="categories" 
              onChange={e => this.valueChanged("category", e)}
              value={category}
              ref={ctrl => this.category = ctrl}>
              {this.props.category.map(x => <option key={x.name}>{x.name}</option>)}
            </select>
          </p>
          <p>
            <label htmlFor="body">Body: </label>
            <textarea name="body" id="body" cols="30" rows="10" placeholder="Post body" 
              onChange={e => this.valueChanged("body", e)}
              value={body}/>
          </p>
          <p>
            <input type="submit" value="Save"/>{' '}
            <Link to={redirectTo} onClick={this.cancelled}>Cancel</Link>
          </p>
        </form>
        {this.state.redirect && (<Redirect to={redirectTo} />)}
      </div>
    )
  }
}

function mapStateToProps ({post, category})  {
  return {
    activePost: post.activePost, 
    category
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: id => dispatch(getPost(id)),
    addNewPost: post => dispatch(addPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    updateActivePost: post => dispatch(updateActivePost(post)),
    deleteActivePost: () => dispatch(deleteActivePost()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);