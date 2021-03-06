import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';

import { fetchPosts } from '../Actions/post'
import { fetchCategories } from '../Actions/category'

class CategoryList extends React.Component {
  componentDidMount(){
    this.props.fetchCategories()
  }

  refreshPosts = (e, category) => {
    this.props.fetchPosts(category)
  }

  render(){
    const chosenCategory = this.props.location.pathname.slice(1)
    return (
      <div>
        <h2>Categories</h2>
        <List>
          {!!this.props.allCategories && this.props.allCategories.map(x => 
            <ListItem key={x.path}
              primaryText={x.name}
              rightIcon={chosenCategory === x.path ? <ContentSend /> : null}
              containerElement={<Link to={`/${x.path}`}/>}
              onClick={(e) => this.refreshPosts(e, x.name)}
            />
          )}
        </List>
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
