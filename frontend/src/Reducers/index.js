import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { post } from './post'
import { category } from './category'
import { comment } from './comment'

const rootReducer = combineReducers({
  post,
  category,
  comment,
  form: formReducer
})

export default rootReducer
