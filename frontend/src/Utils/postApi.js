import { api, headers } from '../Utils'

export const get = (postId) => 
  fetch(`${api}/posts/${postId}`, {headers}).then(res => res.json())

export const getAll = () =>
  fetch(`${api}/posts`, {headers}).then(res => res.json())

export const getByCategory = (category) =>
  fetch(`${api}/${category}/posts`, {headers})
    .then(res => res.json())

export const update = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(post)
  }).then(res => res.json())

export const add = (post) => 
  fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(post)
  }).then(res => res.json())

export const remove = (id) => 
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json())

export const vote = (id, vote) => 
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(vote)
  }).then(res => res.json())