import * as Generator from '../Utils/Generator'

export const POST_CREATE = 'POST_CREATE'
export const POST_UPDATE = 'POST_UPDATE'
export const POST_DELETE = 'POST_DELETE'

const defaultPost = {
  id: Generator.getId(),
  timestamp: Math.floor(Date.now())
}

export const addPost = (state=defaultPost, action) => {
  const { title, body, author, category } = action
  if (action.type == POST_CREATE)
    return {
      ...state,
      title,
      body,
      title,
      category
    }

  return state
}

export const COMMENT_CREATE = 'COMMENT_CREATE'
export const COMMENT_UPDATE = 'COMMENT_UPDATE'
export const COMMENT_DELETE = 'COMMENT_DELETE'

