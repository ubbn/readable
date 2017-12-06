import * as Generator from '../Utils/Generator'
import * as PostApi from '../Utils/PostApi'

export const POST_GET = 'POST_GET' // not used yet
export const POSTS_FETCH = 'POSTS_FETCH'
export const POST_CREATE = 'POST_CREATE'
export const POST_UPDATE = 'POST_UPDATE'
export const POST_DELETE = 'POST_DELETE'

const addPostAC = post => ({
  type: POST_CREATE,
  post
})

export const addPost = post => dispatch => {
  post.id = Generator.getId()
  post.timestamp = Math.floor(Date.now())
  
  PostApi.add(post).then(
    post => dispatch(addPostAC(post)), 
    error => console.log("bbnee error occurredee: " + error)
  )
}

export const getPost = id => dispatch => {
  return PostApi.get(id).then(post => dispatch({type: POST_GET, post}))
}

export const fetchPosts = () => dispatch => {
  PostApi.getAll().then(
    posts => dispatch({type: POSTS_FETCH, posts})
  )
}

export const updatePost = post => dispatch => {
  PostApi.update(post).then(
    post => dispatch({
      type: POST_UPDATE,
      post
    })
  )
}

export const deletePost = ({id}) => {
  return ({
    type: POST_DELETE,
    id
  })
}

export const COMMENT_CREATE = 'COMMENT_CREATE'
export const COMMENT_UPDATE = 'COMMENT_UPDATE'
export const COMMENT_DELETE = 'COMMENT_DELETE'

