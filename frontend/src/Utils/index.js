import moment from 'moment'

export const api='http://127.0.0.1:3001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

// Generate random unique id with length of 20 chars
export const getId = () => {
  return Math.random().toString(36).substr(2,10) + Math.random().toString(36).substr(2,10)
}

// Current unix timestamp
export const getTimestamp = () => Math.floor(Date.now())

// Converts unix timestamp to formatted date string using Moment.js
export const convertToDate = (timestamp) => {
  let a = moment.unix(timestamp/1000)
  return a.format("YYYY-MM-DD HH:mm:ss")
}