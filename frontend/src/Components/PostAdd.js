import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getId} from '../Utils/Generator'
import { getAll } from '../Utils/CategoryApi'
import { addPost, updatePost } from '../Actions'

class PostAdd extends React.Component {
  state = {
    post: {},
    categories: [],
    redirect: false
  }

  componentDidMount(){
    // replace
    getAll().then(x => this.setState({categories: x.categories}))

    if (!!this.props.match.params.postId)
      this.setState({post: this.props.activePost})
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (!!this.state.post.id)
      this.props.updatePost(this.state.post)
    else
      this.props.addNewPost(this.state.post)
    
    this.setState({redirect: true})
  }

  valueChanged = (tag, e) => {
    e.preventDefault()
    const xx = e.target.value
    this.setState(prevState => ({post: { ...prevState.post, [tag]: xx}}))
  }

  render() {
    const { from } = this.props.location.state || '/'

    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <div>{this.props.match.params.postId}</div>
          <p>
            <label htmlFor="title">Title: </label>
            <input name="title" id="title" type="text" placeholder="Title" 
              onChange={e => this.valueChanged("title", e)}
              value={this.state.post.title}/>
          </p>
          <p>
            <label htmlFor="author">Author: </label>
            <input name="author" id="author" type="text" placeholder="Author" 
              onChange={e => this.valueChanged("author", e)}
              value={this.state.post.author}/>
          </p>
          <p>
            <label htmlFor="categories">Categories: </label>
            <select name="categories" id="categories" 
              onChange={e => this.valueChanged("category", e)}
              value={this.state.post.category}>
              {this.state.categories.map(x => <option key={x.name}>{x.name}</option>)}
            </select>
          </p>
          <p>
            <label htmlFor="body">Body: </label>
            <textarea name="body" id="body" cols="30" rows="10" placeholder="Post body" 
              onChange={e => this.valueChanged("body", e)}
              value={this.state.post.body}/>
          </p>
          <p>
            <input type="submit" value="Save"/>
          </p>
        </form>
        {this.state.redirect && (<Redirect to={from} />)}
      </div>
    )
  }
}

function mapStateToProps ({posts, comments, categories})  {
  return {
    activePost: posts.activePost, 
    comments, 
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewPost: post => dispatch(addPost(post)),
    updatePost: post => dispatch(updatePost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);