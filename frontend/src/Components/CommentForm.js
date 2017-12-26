import React from 'react';
import { Field, reduxForm } from 'redux-form';

const CommentForm = (props) => {
  const { handleSubmit, onCancel, pristine, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="author" type="text" placeholder="Author" component="input"/>
      </div>
      <div>
        <Field name="body" type="text" placeholder="Comment" component="textarea"/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>      
    </form>
  );
}

export default reduxForm()(CommentForm)
