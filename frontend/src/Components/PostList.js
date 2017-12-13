import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { fetchPosts } from '../Actions/post'
import Sorter from './Sorter'

class PostList extends React.Component  {
  componentDidMount(){
    this.props.dispatch(fetchPosts(this.props.match.params.category))
  }

  render(){
    return (
      <div>
        <h2>Blog posts</h2>
        {!!this.props.match.params.category && <small>filtered by category: {this.props.match.params.category}</small> }
        <ul>
          <Sorter/>
          {this.props.allPosts.filter(x => !!x.id).map(x =>
            <li key={x.id}>
              <Link to={`${x.category}/${x.id}`}>{x.title} ({x.voteScore})</Link>
            </li>
          )}
        </ul>
        
      </div>
    )
  }
}

function mapStateToProps({post, comment, category}){
  const field = post.sortBy
  const sortedPosts = post.allPosts.sort((a, b) => {
    if (a[field] > b[field])
      return 1
    else if (a[field] < b[field])
      return -1
    else
      return 0
  })
  return {
    allPosts: sortedPosts,
    sortBy: post.sortBy,
    allComments: comment
  }
}

export default connect(mapStateToProps)(PostList);