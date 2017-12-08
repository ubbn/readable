const api='http://127.0.0.1:3001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () => 
  fetch(`${api}/categories`, {headers}).then(res => res.json())
