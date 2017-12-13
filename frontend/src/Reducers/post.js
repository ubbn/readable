import * as ActionTypes from '../Actions/post'

const initialState = {
  allPosts: [],
  activePost: {},
  sortBy: 'timeStamp'
}

export const post = (state=initialState, action) => {
  switch(action.type) {
    case ActionTypes.POST_GET:
      console.log('Reducer post - getPost: ' + action.post.id)
      return {
        ...state,
        activePost: action.post
      }
    case ActionTypes.POST_CREATE:
      return {
        ...state,
        allPosts: state.allPosts.concat([action.post]),
        activePost: action.post
      }
    case ActionTypes.POST_UPDATE:
      return {
        ...state,
        allPosts: state.allPosts.filter(x => x.id !== action.post.id).concat([action.post]),
        activePost: action.post
      }
    case ActionTypes.POSTS_FETCH:
      return {
        ...state,
        allPosts: action.posts,
        activePost: {}
      }
    case ActionTypes.POST_DELETE:
      return {
        ...state,
        allPosts: state.allPosts.filter(x=> x.id !== action.id)
      }
    case ActionTypes.POST_SORT:
      return {
        ...state,
        sortBy: action.field
      }
    default:
      return state
  }
}