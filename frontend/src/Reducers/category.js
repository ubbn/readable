import { CATEGORY_FETCH } from '../Actions/category'

export const category = (state=[], action) => {
  if (action.type === CATEGORY_FETCH)
    return action.categories
  else
    return state
}