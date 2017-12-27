import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui'
import { FlatButton } from 'material-ui'

const required = value => value ? undefined : 'Required'

const CommentForm = props => {
  const { handleSubmit, onCancel, pristine, submitting } = props
  const isNew = !props.initialValues

  return (
    <form onSubmit={handleSubmit} style={isNew ? {margin: '30px'} : {}}>
      {isNew && 'Add a comment'}
      <div>
        <Field name="author" type="text" hintText="Author" component={TextField}/>
      </div>
      <div>
        <Field name="body" type="text" hintText="Comment" component={TextField} validate={required}/>
      </div>
      <div>
        <FlatButton type="submit" disabled={pristine || submitting} label={isNew ? "Add" : "Save"} />
        <FlatButton type="button" onClick={onCancel} label="Cancel" />
      </div>      
    </form>
  );
}

export default reduxForm()(CommentForm)
