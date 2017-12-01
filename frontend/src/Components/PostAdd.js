import React from 'react';

import { add } from '../Utils/PostApi'
import { getId} from '../Utils/Generator'
import { getAll } from '../Utils/CategoryApi'

class PostAdd extends React.Component {
  state = {
    post: {},
    categories: []
  }

  componentDidMount(){
    getAll().then(x => this.setState({categories: x.categories}))
  }

  onSubmit = (e) => {
    e.preventDefault()
    add({...this.state.post, id: getId(), timestamp: Math.floor(Date.now())})
  }

  valueChanged = (tag, e) => {
    e.preventDefault()
    const xx = e.target.value
    this.setState(prevState => ({post: { ...prevState.post, [tag]: xx}}))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          <label htmlFor="title">Title: </label>
          <input name="title" id="title" type="text" placeholder="Title" onChange={e => this.valueChanged("title", e)}/>
        </p>
        <p>
          <label htmlFor="author">Author: </label>
          <input name="author" id="author" type="text" placeholder="Author" onChange={e => this.valueChanged("author", e)}/>
        </p>
        <p>
          <label htmlFor="categories">Categories: </label>
          <select name="categories" id="categories" onChange={e => this.valueChanged("category", e)}>
            {this.state.categories.map(x => <option key={x.name}>{x.name}</option>)}
          </select>
        </p>
        <p>
          <label htmlFor="body">Body: </label>
          <textarea name="body" id="body" cols="30" rows="10" placeholder="Post body" onChange={e => this.valueChanged("body", e)}/>
        </p>
        <p>
          <input type="submit" value="Save"/>
        </p>
      </form>    
    )
  }
}

export default PostAdd;