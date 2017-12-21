import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const required = value => value ? undefined : 'Required'

let PostForm = props => {
  const { handleSubmit, pristine, submitting, onCancel } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title: </label>
        <Field name="title" id="title" type="text" placeholder="Title" component="input" validate={required}/>
      </p>
      <p>
        <label htmlFor="author">Author: </label>
        <Field name="author" id="author" type="text" placeholder="Author" component="input"/>
      </p>
      <p>
        <label htmlFor="category">Categories: </label>
        <Field name="category" id="category" component="select" defaultValue={'redux'}>
          {props.category.map(x => <option key={x.name}>{x.name}</option>)}
        </Field>
      </p>
      <p>
        <label htmlFor="body">Body: </label>
        <Field name="body" id="body" cols="45" rows="15" placeholder="Post body" component="textarea"/>
      </p>
      <p>
        <button type="submit" disabled={pristine || submitting}>Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </p>
    </form>
  )
}

PostForm = reduxForm({
  form: 'postForm'
})(PostForm);

export default connect(
  ({post, category}) => ({
    initialValues: 
      !!post.activePost.category ? 
        post.activePost : 
        {...post.activePost, 
          category: category[0]
        },
    category
  })
)(PostForm)