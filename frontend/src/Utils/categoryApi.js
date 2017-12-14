import { api, headers } from '../Utils'

export const getAll = () => 
  fetch(`${api}/categories`, {headers}).then(res => res.json())
