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
import RaisedButton from 'material-ui/RaisedButton';

import { fetchPosts, votePost } from '../Actions/post'
import { convertToDate } from '../Utils'
import Voters from './SubComponents/Voters'
import Sorter from './SubComponents/Sorter'

class PostList extends React.Component  {
  componentDidMount(){
    this.props.fetchPosts(this.props.match.params.category)
  }

  state = {
    selectedRow: {}
  }

  url = ''

  onRowSelection = (selectedRow) => {
    this.setState({selectedRow})
    const selectedPost = this.props.allPosts[selectedRow];
    
    if (selectedPost)
      this.url = `${selectedPost.category}/${selectedPost.id}`
    else
      this.url = ''
  }

  render(){
    return (
      <div>
        <h2>Posts</h2>
        <Sorter/>
        <div style ={{float: "right", marginTop: "25px"}}>
          <RaisedButton label="Edit"
            containerElement={<Link to={`${this.url}/edit`}/>}
            disabled={!!!this.url}
          />
          <RaisedButton label="Delete" 
            style={{marginLeft: "12px"}}
            containerElement={<Link to={`${this.url}/delete`}/>}
            disabled={!!!this.url}
          />
        </div>
        <Table onRowSelection={rows => this.onRowSelection(rows[0])}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={{width: "30%"}}>Title</TableHeaderColumn>
              <TableHeaderColumn>Author</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Comments</TableHeaderColumn>
              <TableHeaderColumn>Score</TableHeaderColumn>
              <TableHeaderColumn>Vote</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.allPosts.filter(x => !!x.id).map((x, i) =>
              <TableRow key={i} selected={this.state.selectedRow === i}>
                <TableRowColumn style={{width: "30%"}}>
                  <Link to={`${x.category}/${x.id}`}>{x.title}</Link>
                </TableRowColumn>
                <TableRowColumn>{x.author}</TableRowColumn>
                <TableRowColumn>{convertToDate(x.timestamp)}</TableRowColumn>
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