import React from 'react';
import { combineReducers } from 'redux'

import * as ActionTypes from '../Actions'

const posts = (state, action) => {
  switch(action.type) {
    case ActionTypes.POST_CREATE:
      return {
        ...state
      }
    default:
      return state
  }
  
}

const comments = (state, action) => {

}

const categories = (state, action) => {

}

const rootReducer = combineReducers({
  posts,
  comments,
  categories
})

export default rootReducer
