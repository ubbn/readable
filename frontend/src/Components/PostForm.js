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
        <Field name="title" hintText="Title" component={TextField} validate={required} label="Title"/>
      </div>
      <div>
        <Field name="author" type="text" hintText="Author" component={TextField} validate={required}/>
      </div>
      <div>
        <Field name="category" floatingLabelText="Category" component={SelectField}>
          {categories.map(x => <MenuItem key={x} value={x} primaryText={x}/>)}
        </Field>
      </div>
      <div>
        <Field name="body" cols={45} rows={10} hintText="Body" component={TextField} validate={required}/>
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
