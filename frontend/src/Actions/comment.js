import { getId, getTimestamp } from '../Utils'
import * as CommentApi from '../Utils/CommentApi'

export const COMMENT_GET = 'COMMENT_GET'
export const COMMENT_VOTE = 'COMMENT_VOTE'
export const COMMENT_FETCH = 'COMMENT_FETCH'
export const COMMENT_CREATE = 'COMMENT_CREATE'
export const COMMENT_UPDATE = 'COMMENT_UPDATE'
export const COMMENT_DELETE = 'COMMENT_DELETE'

export const getComment = id => dispatch => 
CommentApi.get(id).then(
  comment => dispatch({type: COMMENT_GET, comment})
)

export const fetchComments = postId => dispatch =>
  CommentApi.fetchAll(postId).then(
    comments => dispatch({type: COMMENT_FETCH, comments})
  )

export const addComment = comment => dispatch => {
  comment.id = getId()
  comment.timestamp = getTimestamp()

  CommentApi.add(comment).then(
    comment => dispatch({type: COMMENT_CREATE, comment})
  )
}

export const voteComment = id => dispatch =>
  CommentApi.vote(id).then(
    comment => dispatch({type: COMMENT_VOTE, comment})
  )

export const editComment = comment => dispatch =>
  CommentApi.edit(comment).then(
    comment => dispatch({type: COMMENT_UPDATE, comment})
  )

export const deleteComment = id => dispatch =>
  CommentApi.remove(id).then(
    comment => dispatch({type: COMMENT_DELETE, comment})
  )
  