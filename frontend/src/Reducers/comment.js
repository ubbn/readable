import { COMMENT_FETCH } from '../Actions/comment'

export const comment = (state=[], action) => {
  switch(action.type){
    case COMMENT_FETCH:
      return state
    default:
      return state
  }
}