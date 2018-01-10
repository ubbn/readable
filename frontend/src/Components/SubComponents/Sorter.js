import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { sortPosts } from '../../Actions/post'

class  Sorter extends React.Component {
  clicked = (e, field) => {
    e.preventDefault()
    this.props.sortBy(field)
  }

  handleChange = (e, index, value) => {
    e.preventDefault()
    this.props.sortBy(value)
  }
    
  render() {
    return (
      <div style={{display: "inline"}}>
        <SelectField
          floatingLabelText="Sorted by"
          value={this.props.sortedBy}
          onChange={this.handleChange}
        >
          <MenuItem value={'title'} primaryText="Title" />
          <MenuItem value={'timestamp'} primaryText="Time stamp" />
          <MenuItem value={'voteScore'} primaryText="Vote score" />
        </SelectField>
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