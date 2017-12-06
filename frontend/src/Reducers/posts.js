import * as ActionTypes from '../Actions'

const initialState = {
  allPosts: [],
  activePost: {}
}

export const posts = (state=initialState, action) => {
  switch(action.type) {
    case ActionTypes.POST_GET:
      return {
        ...state,
        activePost: action.post
      }
    case ActionTypes.POST_CREATE:
      return {
        allPosts: state.allPosts.concat([action.post]),
        activePost: action.post
      }
    case ActionTypes.POST_UPDATE:
      return {
        allPosts: state.allPosts.filter(x => x.id != action.post.id).concat([action.post]),
        activePost: action.post
      }
    case ActionTypes.POSTS_FETCH:
      return {
        ...state,
        allPosts: action.posts
      }
    case ActionTypes.POST_DELETE:
      return {
        ...state,
        allPosts: state.allPosts.filter(x=> x.id != action.id)
      }
    default:
      return state
  }
}