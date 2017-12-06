import { combineReducers } from 'redux'
import { posts } from './posts'

const comments = (state=[], action) => {
  switch(action.type) {
    default:
      return state
  }
}

const categories = (state=[], action) => {
  return state
}

const rootReducer = combineReducers({
  posts,
  comments,
  categories
})

export default rootReducer
