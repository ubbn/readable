import * as Util from '../Utils'
import * as PostApi from '../Utils/PostApi'

export const POST_GET = 'POST_GET'
export const POSTS_FETCH = 'POSTS_FETCH'
export const POST_CREATE = 'POST_CREATE'
export const POST_UPDATE = 'POST_UPDATE'
export const POST_DELETE = 'POST_DELETE'
export const POST_SORT = 'POST_SORT'

const addPostAC = post => ({
  type: POST_CREATE,
  post
})

export const addPost = post => dispatch => {
  post.id = Util.getId()
  post.timestamp = Util.getTimestamp()
  post.voteScore = 0
  
  PostApi.add(post).then(
    post => dispatch(addPostAC(post)), 
    error => console.log("bbnee error occurredee: " + error)
  )
}

export const getPost = id => dispatch => {
  return PostApi.get(id).then(post => dispatch({type: POST_GET, post}))
}

export const fetchPosts = (category) => dispatch => {
  console.log(category)
  if (!!category)
    return PostApi.getByCategory(category)
      .then(posts => dispatch({type: POSTS_FETCH, posts}))  
  else
    return PostApi.getAll()
      .then(posts => dispatch({type: POSTS_FETCH, posts}))
}

export const updatePost = post => dispatch => {
  PostApi.update(post).then(
    post => dispatch({
      type: POST_UPDATE,
      post
    })
  )
}

export const deletePost = (id) => dispatch => {
  PostApi.remove(id).then(
    post => dispatch({
      type: POST_DELETE,
      id
    })
  )
}

export const votePost = (id, vote) => dispatch => {
  PostApi.vote(id, vote).then(
    post => dispatch({
      type: POST_UPDATE,
      post      
    })
  )
}

export const sortPosts = field => dispatch => {
  dispatch({
    type: POST_SORT,
    field 
  })
}