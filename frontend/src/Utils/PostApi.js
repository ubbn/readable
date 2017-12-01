const api='http://127.0.0.1:3001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (postId) => 
  fetch(`${api}/posts/${postId}`, {headers}).then(res => res.json())

export const getAll = () =>
  fetch(`${api}/posts`, {headers}).then(res => res.json())

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const add = (post) => {
  fetch('http://127.0.0.1:3001/posts/', {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())}