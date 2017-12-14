import { api, headers } from '../Utils'

export const get = id => 
  fetch(`${api}/comments/${id}`, {headers})
    .then(res => res.json())

export const fetchAll = postId => 
  fetch(`${api}/posts/${postId}/comments`, {headers})
    .then(res => res.json())

export const add = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment)
  }).then(res => res.json())

export const vote = (id, vote) => 
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(vote)
  }).then(res => res.json())

export const edit = comment => 
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(comment)
  }).then(res => res.json())

export const remove = id => 
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json())

