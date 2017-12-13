import React from 'react';
import { connect } from 'react-redux';

import { sortPosts } from '../Actions/post'

class  Sorter extends React.Component {
  clicked = (e, field) => {
    e.preventDefault()
    this.props.sortBy(field)
  }
    
  render() {
    return (
      <div>
        Sorted by: {this.props.sortedBy} -- 
        <a href="" onClick={e => this.clicked(e, 'title')}>title</a>, 
        <a href="" onClick={e => this.clicked(e, 'timestamp')}>date</a>, 
        <a href="" onClick={e => this.clicked(e, 'voteScore')}>vote</a>
      </div>
    );
  }
}

export default connect(
  ({post}) => ({
    sortedBy: post.sortBy
  }),
  dispatch => ({
    sortBy: field => dispatch(sortPosts(field))
  })
)(Sorter)