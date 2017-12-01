
// Generate random unique id with length of 20 chars
export const getId = () => {
  return Math.random().toString(36).substr(2,10) + Math.random().toString(36).substr(2,10)
}
