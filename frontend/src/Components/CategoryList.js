import React from 'react';
import { Link } from 'react-router-dom'

import { getAll } from '../Utils/CategoryApi'

class CategoryList extends React.Component {
  state = {
    categories: []
  }

  componentDidMount(){
    getAll().then(x => {
      console.log(x.categories)
      this.setState({ categories: x.categories })})
  }

  render(){
    return (
      <div>
        <h3>All categories</h3>
        <ul>
          {this.state.categories.map(x => 
            <li key={x.path}><Link to={`${x.path}/posts`}>{x.name}</Link></li>
          )}
        </ul>
      </div>
    )
  }
}

export default CategoryList
