import { api, headers } from '../Utils'

export const get = id => 
  fetch(`${api}/comments/${id}`, {headers})
    .then(res => res.json())

export const fetchAll = postId => {
  console.log("ID: " + postId)
  return fetch(`${api}/posts/${postId}/comments`, {headers})
    .then(res => {
      console.log(res)
      return res.json()})
  }

export const add = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())

export const vote = id => 
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())

export const edit = comment => 
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json)

export const remove = id => 
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())

