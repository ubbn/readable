import { combineReducers } from 'redux'

import { post } from './post'
import { category } from './category'
import { comment } from './comment'

const rootReducer = combineReducers({
  post,
  category,
  comment,
})

export default rootReducer
