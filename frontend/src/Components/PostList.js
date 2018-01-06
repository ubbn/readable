import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { fetchPosts, votePost } from '../Actions/post'
import Voters from './Voters'
import Sorter from './Sorter'

class PostList extends React.Component  {
  componentDidMount(){
    this.props.fetchPosts(this.props.match.params.category)
  }

  render(){
    return (
      <div>
        <h2>Posts</h2>
        {!!this.props.match.params.category && <small>filtered by category: {this.props.match.params.category}</small> }
        <Sorter/>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={{width: "30%"}}>Title</TableHeaderColumn>
              <TableHeaderColumn>Author</TableHeaderColumn>
              <TableHeaderColumn>Comments</TableHeaderColumn>
              <TableHeaderColumn>Score</TableHeaderColumn>
              <TableHeaderColumn>Vote</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.allPosts.filter(x => !!x.id).map(x =>
              <TableRow key={x.id}>
                <TableRowColumn style={{width: "30%"}}>
                  <Link to={`${x.category}/${x.id}`}>{x.title}</Link>
                </TableRowColumn>
                <TableRowColumn>{x.author}</TableRowColumn>
                <TableRowColumn>{x.commentCount}</TableRowColumn>
                <TableRowColumn>{x.voteScore}</TableRowColumn>
                <TableRowColumn>
                  <Voters id={x.id} score={x.voteScore} onVote={this.props.votePost}/>
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>          
        </Table>
        
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

export default connect(
  mapStateToProps, 
  dispatch => ({
    fetchPosts: category => dispatch(fetchPosts(category)),
    votePost: (id, vote) => dispatch(votePost(id, vote))
  })
)(PostList)