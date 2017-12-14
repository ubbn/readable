import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { addPost, updatePost } from '../Actions/post'

class PostAdd extends React.Component {
  state = {
    post: {}, // current post on Edit/Add
    redirect: false
  }

  componentDidMount(){
    // Param postId is provided, it means it is EditPost
    // so open active post on edit form
    if (!!this.props.match.params.postId)
      this.setState({post: this.props.activePost})
    
    // Set default value for category
    this.setState(prevState => ({post: { ...prevState.post, category: this.category.value}}))
  }

  onSubmit = (e) => {
    e.preventDefault()

    // Post id is already assigned, it means it is Editing, so update it
    if (!!this.state.post.id)
      this.props.updatePost(this.state.post)
    else
      this.props.addNewPost(this.state.post)
    
    this.setState({redirect: true})
  }

  valueChanged = (tag, e) => {
    e.preventDefault()
    const value = e.target.value
    this.setState(prevState => ({post: { ...prevState.post, [tag]: value}}))
  }

  render() {
    const {id, title, body, author, category} = this.state.post
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
            <Link to={redirectTo}>Cancel</Link>
          </p>
        </form>
        {this.state.redirect && (<Redirect to={redirectTo} />)}
      </div>
    )
  }
}

function mapStateToProps ({post, comment, category})  {
  return {
    activePost: post.activePost, 
    comment, 
    category
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewPost: post => dispatch(addPost(post)),
    updatePost: post => dispatch(updatePost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);