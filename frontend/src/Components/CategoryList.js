import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import { fetchPosts } from '../Actions/post'
import { fetchCategories } from '../Actions/category'

class CategoryList extends React.Component {
  componentDidMount(){
    this.props.fetchCategories()
  }

  refreshPosts = (e, category) => {
    //e.preventDefault()
    this.props.fetchPosts(category)
  }

  render(){
    return (
      <div>
        <h3>All categories</h3>
        <ul>
          {!!this.props.allCategories && this.props.allCategories.map(x => 
            <li key={x.path}>
              <Link to={`/${x.path}/posts`} onClick={(e) => this.refreshPosts(e, x.path)}>{x.name}</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ category }) => ({
  allCategories: category
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(fetchPosts(category)),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
