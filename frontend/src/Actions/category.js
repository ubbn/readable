import * as CategoryApi from '../Utils/categoryApi'

export const CATEGORY_FETCH = 'CATEGORY_FETCH'

export const fetchCategories = () => dispatch => {
  CategoryApi.getAll().then(res => {
    dispatch({
      type: CATEGORY_FETCH,
      categories: res.categories
    })})
}