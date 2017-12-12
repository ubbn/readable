import { 
  COMMENT_FETCH, 
  COMMENT_GET, 
  COMMENT_CREATE, 
  COMMENT_DELETE, 
  COMMENT_UPDATE } from '../Actions/comment'

const initialState = {
  allComments: []
}

export const comment = (state=initialState, action) => {
  switch(action.type){
    case COMMENT_FETCH:
      return {
        allComments: action.comments
      }
    case COMMENT_CREATE:
      return {
        allComments: state.allComments.concat([action.comment])
      }
    case COMMENT_UPDATE:
      const i = state.allComments.findIndex(x => x.id === action.comment.id)
      if (i === -1)
        return { allComments: state.allComments.concat([action.comment]) }
      return { allComments: state.allComments.slice(0,i).concat(action.comment, state.allComments.slice(i+1)) }
    case COMMENT_DELETE:
      return {
        allComments: state.allComments.filter(x => x.id !== action.comment.id)
      }
    case COMMENT_GET:
    default:
      return state
  }
}