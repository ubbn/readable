import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { MenuItem, RaisedButton } from 'material-ui'
import { SelectField, TextField } from 'redux-form-material-ui'

const required = value => value ? undefined : 'Required'

const style = {
  margin: 5
}

const PostForm = props => {
  const { handleSubmit, pristine, submitting, onCancel, categories } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" floatingLabelText="Title" component={TextField} validate={required}/>
      </div>
      <div>
        <Field name="author" floatingLabelText="Author" component={TextField} validate={required}/>
      </div>
      <div>
        <Field name="category" floatingLabelText="Category"  component={SelectField}>
          {categories.map(x => <MenuItem key={x} value={x} primaryText={x}/>)}
        </Field>
      </div>
      <div>
        <Field name="body" rows={10} floatingLabelText="Body" multiLine component={TextField} validate={required}/>
      </div>
      <div>
        <RaisedButton type="submit" disabled={pristine || submitting} label="Save" primary={true} style={style}/>
        <RaisedButton type="button" onClick={onCancel} label="Cancel" style={style}/>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'postForm'
})(PostForm)
