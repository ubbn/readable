import { 
  COMMENT_FETCH, 
  COMMENT_GET, 
  COMMENT_CREATE, 
  COMMENT_DELETE, 
  COMMENT_VOTE, 
  COMMENT_UPDATE } from '../Actions/comment'


const initialState = {
  allComments: [],
  selectedComment: {}
}

export const comment = (state=initialState, action) => {
  switch(action.type){
    case COMMENT_GET:
      return {
        ...state,
        selectedComment: action.comment
      }
    case COMMENT_FETCH:
      return {
        allComments: action.comments
      }
    case COMMENT_CREATE:
      return {
        ...state,
        selectedComment: {}
      }
    case COMMENT_VOTE:
    case COMMENT_UPDATE:
    case COMMENT_DELETE:
    default:
      return state
  }
}